import React, { useState, useEffect } from 'react';
import {MusicList,AlbumList} from './AlbumList'
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
    const [album,setAlbum]=useState([]);
    const [musics,setMusics]=useState([]);

    useEffect(()=>{
        let obj = sessionStorage.getItem("idKey")
        obj = JSON.parse(obj)
        axios.post("http://localhost:3000/api/album/musiclist",{
            uid:obj.ID,
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setMusics([...musics,obj]);
        });
    },[])

    // 이미지 파일 처리
    const handleImageChange = (event) => {
        const file = event.target.files[0];  // 첫 번째 파일 선택
        if (file) {
            setImageFile(file);  // 이미지 파일 저장
            setImageFileName(file.name);  // 이미지 파일 이름 저장
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
                        <div><label>Genre</label><input type="text" name="genre" value={formData.genre} onChange={handleInputChange} /></div>
                        <div><label>Detail</label><input type="text" name="detail" value={formData.detail} onChange={handleInputChange} /></div>
                    </div>
                </div>

                <div className="album-upload-list-content">
                    <h1>List</h1>
                    <div className="album-upload-song-list">
                        <>
                            {
                                <MusicList item={musics}/>
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