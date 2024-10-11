import React, { useEffect, useState } from 'react';
import './css/Profile.css';
import axios from 'axios';
import { ProfileImg } from './ProfileImg'

const Profile = ({ isDarkMode }) => {

    const [profileImg, setProfileImg] = useState([]); // 서버에서 이미지 받아오기

    const [imageSrc, setImageSrc] = useState(null); // 로컬에서 이미지 업로드 하는부분

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // 파일을 하나만 선택한다고 가정
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result); // 파일이 로드되면 결과를 state에 저장
            };
            reader.readAsDataURL(file); // 파일을 Data URL로 변환
        }
    };


    useEffect(() => {
        let obj = sessionStorage.getItem("idKey")
        obj = JSON.parse(obj)
        console.log(obj)
        setProfileImg([...profileImg, obj])
        setUserInfo({
            username: obj.NAME,
            id: obj.ID,
            password: obj.PASSWORD,
            country: 'Korea',
            genre1: obj.GENRE1,
            genre2: obj.GENRE2,
            email: obj.EMAIL,
        });

    }, []);
    // 사용자 정보 상태
    const [userInfo, setUserInfo] = useState({
        username: 'user123',
        id: 'asdf1234',
        password: 'asdf1234',
        country: 'Korea',
        genre1: 'Dubstep',
        genre2: 'EDM',
        email: 'asdfasdf@gmail.com',
        img: ''
    });

    // 수정 상태 관리
    const [editField, setEditField] = useState('');

    // 엔터키로 저장하는 함수
    const handleKeyDown = (e, field, value) => {
        setUserInfo({ ...userInfo, [field]: e.target.value });
        console.log(e.key);
        if (e.key === 'Enter') {
            setEditField(''); // 수정 끝나면 다시 기본 상태로 돌아감
        }
    };
    if (!sessionStorage.getItem("idKey")) {
        return (
            <div>
                <meta http-equiv="refresh" content="0;url=/signIn"></meta>
            </div>
        );
    }
    return (
        <div className={`profile-page ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="profile-header">
                {imageSrc && <img src={imageSrc} alt="Image Preview" style={{ maxWidth: '100px', marginTop: '10px', borderRadius: '50%' }} />}
                <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} />
                <label htmlFor="image-upload" className="profile-custom-file-upload"></label>
                <div className="profile-username">
                    <input
                        type="text"
                        id="nameInput"
                        className="InputSetting"
                        value={userInfo.username}
                        onChange={(e) => handleKeyDown(e, 'username', e.target.value)}
                        required
                    />
                    <div className="underline"></div>
                    <div className="subs">
                        <span>7,603 Subs</span>
                    </div>
                </div>
            </div>

            <div className={`profile-details ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className="profile-container">
                    <label htmlFor="idInput" className="label">ID</label>
                    <div className='flex1'>
                        <input
                            type="text"
                            id="idInput"
                            className="InputSetting"
                            value={userInfo.id}
                            onChange={(e) => handleKeyDown(e, 'id', e.target.value)}
                            required
                        />
                        <div className="underline"></div>
                    </div>
                </div>

                <div className="profile-container">
                    <label htmlFor="passwordInput" className="label">PW</label>
                    <div className='flex1'>
                        <input
                            type="password"
                            id="passwordInput"
                            className="InputSetting"
                            value={userInfo.password}
                            onChange={(e) => handleKeyDown(e, 'password', e.target.value)}
                            required
                        />
                        <div className="underline"></div>
                    </div>
                </div>

                <div className="profile-container">
                    <label htmlFor="emailInput" className="label">Email</label>
                    <div className='flex1'>
                        <input
                            type="text"
                            id="emailInput"
                            className="InputSetting"
                            value={userInfo.email}
                            onChange={(e) => handleKeyDown(e, 'email', e.target.value)}
                            required
                        />
                        <div className="underline"></div>
                    </div>
                </div>

                <div className="profile-container">
                    <label htmlFor="genre1Input" className="label">Genre1</label>
                    <div className='flex1'>
                        <select
                            id="text"
                            name="genre1Input"
                            className="InputSetting"
                            value={userInfo.genre1}
                            onChange={(e) => handleKeyDown(e, 'genre1', e.target.value)}
                            required
                        >
                            <option value=""></option>
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="cherry">Cherry</option>
                            <option value="date">Date</option>
                        </select>
                        <div className="underline"></div>
                    </div>
                </div>

                <div className="profile-container">
                    <label htmlFor="genre1Input" className="label">Genre2</label>
                    <div className='flex1'>
                        <select
                            id="text"
                            name="genre1Input"
                            className="InputSetting"
                            value={userInfo.genre2}
                            onChange={(e) => handleKeyDown(e, 'genre2', e.target.value)}
                            required
                        >
                            <option value=""></option>
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="cherry">Cherry</option>
                            <option value="date">Date</option>
                        </select>
                        <div className="underline"></div>
                    </div>
                </div>
            </div>

            <div className='CancelConfirm'>
                <button className='my-button confirm'>Confirm</button>
                <button className='my-button cancel'>Cancel</button>

            </div>

        </div>
    );
};

export default Profile;
