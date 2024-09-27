import React, { useState } from 'react';
import './css/Upload.css';

const Upload = () => {
    const [imageFileName, setImageFileName] = useState('');  // 이미지 파일 이름 저장
    const [musicFileName, setMusicFileName] = useState('');  // 음악 파일 이름 저장

    const handleImageChange = (event) => {
        const file = event.target.files[0];  // 첫 번째 파일 선택
        if (file) {
            setImageFileName(file.name);  // 이미지 파일 이름 저장
        }
    };

    const handleMusicChange = (event) => {
        const file = event.target.files[0];  // 첫 번째 파일 선택
        if (file) {
            setMusicFileName(file.name);  // 음악 파일 이름 저장
        }
    };

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
                        <div><label>Title</label><input type="text" /></div>
                        <div><label>Artist</label><input type="text" /></div>
                        <div><label>Producer/Remix</label><input type="text" /></div>
                        <div><label>Album</label><input type="text" /></div>
                        <div><label>Genre</label><input type="text" /></div>
                        <div><label>Copyright</label><input type="text" /></div>
                        <div>
                            <label>Option</label>
                            <select>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="lyrics-content">
                    <h1>Lyrics</h1>
                    <textarea placeholder="Insert your lyrics here..."></textarea>
                </div>
            </div>

            <div className="button-section">
                <button className="upload-button">Upload</button>
                <button className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default Upload;
