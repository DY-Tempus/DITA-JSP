import React, { useState } from 'react';
import axios from 'axios';
import './css/UpdateMusic.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateMusic = () => {
    const navigate = useNavigate();
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

        try {
            const response = await axios.post('http://113.198.238.115:3000/api/music/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // 파일 전송 시 헤더 설정
                }
            });
            alert('음악 업로드 성공!');
            console.log(response.data);
            navigate('/home');
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
            <h1 className="title">Update Music</h1>
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
                        <div>
                            <label>Genre</label>
                            <select name="option" value={formData.option} onChange={handleInputChange}>
                                <option value="Hip-hop">Hip-hop</option>
                                <option value="Jazz">Jazz</option>
                                <option value="Anime">Anime</option>
                                <option value="K-POP">K-POP</option>
                                <option value="Rap">Rap</option>
                                <option value="Rock">Rock</option>
                                <option value="트로트">트로트</option>
                                <option value="기타">기타</option>
                            </select>
                        </div>
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
                <button className="cancel-button" onClick={navigate('/home')}>Cancel</button>
            </div>
        </div>
    );
};

export default UpdateMusic;
