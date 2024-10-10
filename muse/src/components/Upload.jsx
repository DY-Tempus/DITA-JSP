import React, { useState } from 'react';
import axios from 'axios';
import './css/Upload.css';

const Upload = () => {
    const [imageFile, setImageFile] = useState(null);  // 이미지 파일 저장
    const [musicFile, setMusicFile] = useState(null);  // 음악 파일 저장
    const [formData, setFormData] = useState({
        title: '',
        artist: '',        // DB에는 저장되지 않음
        producer: '',      // DB에는 저장되지 않음
        album: '',         // DB에는 저장되지 않음
        genre: '',
        copyright: '',     // DB에는 저장되지 않음
        lyrics: '',
        option: 'public'   // DB에는 저장되지 않음
    });

    const [imageFileName, setImageFileName] = useState('');  // 이미지 파일 이름
    const [musicFileName, setMusicFileName] = useState('');  // 음악 파일 이름
    const userId = JSON.parse(sessionStorage.getItem('idKey')).ID;  // 세션에서 사용자 ID 가져오기

    // 이미지 파일 처리
    const handleImageChange = (event) => {
        const file = event.target.files[0];  // 첫 번째 파일 선택
        if (file) {
            setImageFile(file);  // 이미지 파일 저장
            setImageFileName(file.name);  // 이미지 파일 이름 저장
        }
    };

    // 음악 파일 처리
    const handleMusicChange = (event) => {
        const file = event.target.files[0];  // 첫 번째 파일 선택
        if (file) {
            setMusicFile(file);  // 음악 파일 저장
            setMusicFileName(file.name);  // 음악 파일 이름 저장
        }
    };

    // 입력 필드 값 변경 처리
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 파일 및 데이터를 서버로 전송하는 함수
    const handleSubmit = async () => {
        const data = new FormData();  // FormData 객체 생성
        data.append('image', imageFile);  // 이미지 파일 추가
        data.append('music', musicFile);  // 음악 파일 추가
        data.append('title', formData.title);
        data.append('genre', formData.genre);
        data.append('lyrics', formData.lyrics);
        data.append('userId', userId);  // 사용자 ID 추가

        try {
            const response = await axios.post('http://localhost:3000/api/music/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // 파일 전송 시 헤더 설정
                }
            });
            alert('음악 업로드 성공!');
            console.log(response.data);
        } catch (error) {
            console.error('업로드 실패:', error);
            alert('음악 업로드 실패');
        }
    };
    // if(!sessionStorage.getItem("idKey")){
    //     return (
    //         <div>
    //             <meta http-equiv="refresh" content="0;url=/signIn"></meta>
    //         </div>
    //     );
    // }
    return (
        <div className="upload-panel">
            <h1 className="title">Upload Music</h1>
            <div className="upload-section">
                <div className="upload-content">
                    <div className="image-box">
                        <div className="file-upload">
                            <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} />
                            <label htmlFor="image-upload" className="custom-file-upload">
                                Upload Image
                            </label>
                            {imageFileName && <p className="file-name">{imageFileName}</p>}
                        </div>
                        <div className="file-upload">
                            <input type="file" id="music-upload" accept="audio/*" onChange={handleMusicChange} />
                            <label htmlFor="music-upload" className="custom-file-upload">
                                Upload Music
                            </label>
                            {musicFileName && <p className="file-name">{musicFileName}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <div><label>Title</label><input type="text" name="title" value={formData.title} onChange={handleInputChange} /></div>
                        <div><label>Album</label><input type="text" name="album" value={formData.album} onChange={handleInputChange} /></div>
                        <div><label>Genre</label><input type="text" name="genre" value={formData.genre} onChange={handleInputChange} /></div>
                    </div>
                </div>

                <div className="lyrics-content">
                    <h1>Lyrics</h1>
                    <textarea
                        name="lyrics"
                        placeholder="Insert your lyrics here..."
                        value={formData.lyrics}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
            </div>

            <div className="button-section">
                <button className="upload-button" onClick={handleSubmit}>Upload</button>
                <button className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default Upload;
