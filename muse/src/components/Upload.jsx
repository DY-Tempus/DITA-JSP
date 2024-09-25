import React from 'react';
import './css/Upload.css';

const Upload = () => {
    return (
        <div className="upload-panel">
            <h1 className="title">Upload Music</h1>
            <div className="upload-section">
                {/* 곡 이미지 & 정보 섹션 */}
                <div className="upload-content">
                    
                    <div className="image-box">
                        <img src="/img/upload.png" alt="Upload Icon" className="upload-icon" />
                        <p>Upload Image</p>
                    </div>
                    <div className="input-fields">
                        <label>Title</label><input type="text" />
                        <label>Uploader</label><input type="text" />
                        <label>Producer</label><input type="text" />
                        <label>Album</label><input type="text" />
                        <label>Genre</label><input type="text" />
                        <label>Copyright</label><input type="text" />
                        <label>Option</label>
                        <select>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                </div>

                {/* 가사 섹션 */}
                <div className="lyrics-content">
                    <h2>Lyrics</h2>
                    <textarea placeholder="Insert your lyrics here..."></textarea>
                </div>
            </div>

            {/* 버튼 */}
            <div className="button-section">
                <button className="upload-button">Upload</button>
                <button className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default Upload;
