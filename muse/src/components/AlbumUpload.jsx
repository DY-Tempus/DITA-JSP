import React, { useState, useEffect } from 'react';
import { MusicList } from './AlbumList';
import axios from 'axios';
import './css/AlbumUpload.css';

const AlbumUpload = () => {
    const [checkItems, setCheckItems] = useState([])
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [songs, setSongs] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        detail: '',
        option: 'public'
    });
    const [imageFile, setImageFile] = useState(null); // base64로 변환한 이미지 데이터 저장
    const [imageFileName, setImageFileName] = useState(''); // 앨범 이미지 파일 이름 저장
    const [album, setAlbum] = useState([]);
    const [musics, setMusics] = useState([]);
    
    const checkItemHandler = (id, isChecked) => {
        if (isChecked) {
            checkItems.push(id)
            setCheckItems(checkItems)
            console.log(checkItems)
        } else if (!isChecked) {
            checkItems.pop(id)
            setCheckItems(checkItems)
            console.log(checkItems)
        }
      }

    useEffect(() => {
        let obj = sessionStorage.getItem("idKey");
        obj = JSON.parse(obj);
        axios.post("http://localhost:3000/api/album/musiclist", {
            uid: obj.ID,
        })
        .then((Response) => {
            console.log(Response.data);
            const obj = Response.data;
            console.log(obj);
            setMusics([...musics, obj]);
        });
    }, []);

    // 이미지 파일 처리 및 base64 변환
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(reader.result); // base64로 변환된 이미지 데이터 저장
            };
            reader.readAsDataURL(file); // 파일을 base64로 인코딩
            setImageFileName(file.name); // 파일 이름 저장
        }
    };

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
        const obj = JSON.parse(sessionStorage.getItem("idKey")); // 세션에서 유저 정보 가져오기
        if (!obj || !obj.ID) {
            alert('로그인 정보가 없습니다.');
            return;
        }

        const albumData = {
            title: formData.title,
            genre: formData.genre,
            detail: formData.detail,
            option: formData.option,
            image: imageFile, // base64로 변환된 이미지 데이터 전송
            songIds: selectedSongs,
            ID: obj.ID // 세션에서 가져온 사용자 ID
        };

        try {
            const response = await axios.post('http://localhost:3000/api/album/upload', albumData);
            alert('앨범 업로드 성공!');
            console.log(response.data);
        } catch (error) {
            console.error('앨범 업로드 실패:', error.response);
            alert('앨범 업로드 실패: ' + (error.response && error.response.data && error.response.data.message ? error.response.data.message : '알 수 없는 오류'));
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
                        <div><label>Genre</label><input type="text" name="genre" value={formData.genre} onChange={handleInputChange} /></div>
                        <div><label>Detail</label><input type="text" name="detail" value={formData.detail} onChange={handleInputChange} /></div>
                    </div>
                </div>

                <div className="album-upload-list-content">
                    <h1>List</h1>
                    <div className="album-upload-song-list">
                        <>
                            {
                                <MusicList item={musics} checkItemHandler={checkItemHandler}/>
                            }
                        </>
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
