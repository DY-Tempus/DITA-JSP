import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AlbumUpload.css';

const AlbumUpload = () => {
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [songs, setSongs] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        producer: '',  // Producer/Remix 추가
        genre: '',
        detail: '',
        option: 'public'
    });
    const [imageFile, setImageFile] = useState(null); // 앨범 이미지 파일 저장
    const [imageFileName, setImageFileName] = useState(''); // 앨범 이미지 파일 이름 저장

    // 이미지 파일 처리
    const handleImageChange = (event) => {
        const file = event.target.files[0];  // 첫 번째 파일 선택
        if (file) {
            setImageFile(file);  // 이미지 파일 저장
            setImageFileName(file.name);  // 이미지 파일 이름 저장
        }
    };

    // 로그인된 사용자의 노래 불러오기
    useEffect(() => {
        axios.get('http://localhost:3000/api/music/mysongs')
            .then((response) => {
                setSongs(response.data); // 불러온 노래 데이터를 songs에 저장
            })
            .catch((error) => {
                console.error('노래 목록 가져오기 실패:', error);
            });

        // 로그인된 사용자 이름 가져오기
        const loggedInUser = JSON.parse(sessionStorage.getItem("idKey"));
        if (loggedInUser) {
            setFormData(prevState => ({
                ...prevState,
                producer: loggedInUser.NAME  // Producer/Remix에 로그인된 사용자 이름 설정
            }));
        }
    }, []);

    const handleSongSelect = (id) => {
        if (selectedSongs.includes(id)) {
            setSelectedSongs(selectedSongs.filter(songId => songId !== id));
        } else {
            setSelectedSongs([...selectedSongs, id]);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        const albumData = new FormData(); // FormData 객체 생성
        albumData.append('title', formData.title); // 앨범 타이틀
        albumData.append('producer', formData.producer); // Producer/Remix 정보
        albumData.append('genre', formData.genre); 
        albumData.append('detail', formData.detail);
        albumData.append('option', formData.option);
        albumData.append('image', imageFile); // 이미지 파일 추가
        albumData.append('songIds', selectedSongs); // 선택된 곡들 추가

        try {
            const response = await axios.post('http://localhost:3000/api/music/albumUpload', albumData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('앨범 업로드 성공!');
            console.log(response.data);
        } catch (error) {
            console.error('앨범 업로드 실패:', error);
            alert('앨범 업로드 실패');
        }
    };

    return (
        <div className="album-upload-panel">
            <h1 className="title">Upload Album</h1>
            <div className="album-upload-section">
                <div className="album-upload-content">
                    <div className="image-box">
                        <div className="file-AlbumUpload">
                            <input type="file" id="image-AlbumUpload" accept="image/*" onChange={handleImageChange} />
                            <label htmlFor="image-AlbumUpload" className="custom-file-album-upload">
                                Album Image
                            </label>
                            {imageFileName && <p className="file-name">{imageFileName}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <div><label>Title</label><input type="text" name="title" value={formData.title} onChange={handleInputChange} /></div>
                        <div><label>Producer/Remix</label><input type="text" name="producer" value={formData.producer} onChange={handleInputChange} /></div>
                        <div><label>Genre</label><input type="text" name="genre" value={formData.genre} onChange={handleInputChange} /></div>
                        <div><label>Detail</label><input type="text" name="detail" value={formData.detail} onChange={handleInputChange} /></div>
                        <div>
                            <label>Option</label>
                            <select name="option" value={formData.option} onChange={handleInputChange}>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="album-upload-list-content">
                    <h1>Select Songs for Album</h1>
                    <div className="album-upload-song-list">
                        {songs.length > 0 ? (
                            songs.map((song) => (
                                <div key={song.MID} className="album-song-element">
                                    <input
                                        type='checkbox'
                                        onChange={() => handleSongSelect(song.MID)}
                                        checked={selectedSongs.includes(song.MID)}
                                    />
                                    <img src={`data:image/jpeg;base64,${song.MIMG}`} alt={song.MNAME} className="album-song-image" />
                                    <div className="album-song-info">
                                        <div className="album-song-detail">
                                            <span className="album-song-title">{song.MNAME}</span>
                                        </div>
                                        <span className="album-song-duration">{song.duration}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No songs uploaded by the user.</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="button-section">
                <button className="album-upload-button" onClick={handleSubmit}>Upload</button>
                <button className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default AlbumUpload;
