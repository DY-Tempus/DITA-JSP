import React, { useEffect, useState } from 'react';
import './css/Profile.css';
import axios from 'axios';
import {ProfileImg} from './ProfileImg'

const Profile = () => {

    const [profileImg, setProfileImg]=useState([])

    useEffect(()=>{
        let obj=sessionStorage.getItem("idKey")
        obj=JSON.parse(obj)
        console.log(obj)
        setProfileImg([...profileImg,obj])
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
        img:''
    });

    // 수정 상태 관리
    const [editField, setEditField] = useState('');

    // 수정할 필드를 변경하는 함수
    const handleEdit = (field) => {
        setEditField(field);
    };

    // 엔터키로 저장하는 함수
    const handleKeyDown = (e, field, value) => {
        setUserInfo({ ...userInfo, [field]: e.target.value });
        console.log(e.key);
        if (e.key === 'Enter') {
            setEditField(''); // 수정 끝나면 다시 기본 상태로 돌아감
        }
    };

    // 포커스를 잃었을 때 저장하는 함수
    const handleBlur = (e, field, value) => {
        setUserInfo({ ...userInfo, [field]: e.target.value });
        setEditField(''); // 수정 끝나면 다시 기본 상태로 돌아감
    };
    if(!sessionStorage.getItem("idKey")){
        return (
            <div>
                <meta http-equiv="refresh" content="0;url=/signIn"></meta>
            </div>
        );
    }
    return (
        <div className="profile-page">
            <div className="profile-header">
                {<ProfileImg item={profileImg}/>}
                <div className="profile-username">
                    {editField === 'username' ? (
                        <div>
                            <div>
                            <input
                            type="text"
                            value={userInfo.username}
                            onChange={(e) => handleKeyDown(e, 'username', e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 'username', e.target.value)}
                            onBlur={(e) => handleBlur(e, 'username', e.target.value)}/>
                            <img
                                src="./img/edit.png"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => handleEdit('username')}
                            />
                            </div>
                            <div className='subs'>
                                <span>7,603 Subs</span>
                            </div>
                        </div>
                        
                    ) : (
                        <div>
                            <span>{userInfo.username}</span>
                            <img
                                src="./img/edit.png"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => handleEdit('username')}
                            />
                            <div className='subs'>
                                <span>7,603 Subs</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="profile-details">
                <div className="profile-container">
                    <input
                        type="text"
                        id="idInput"
                        className="InputSetting"
                        value={userInfo.id}
                        onChange={(e) => handleKeyDown(e, 'id', e.target.value)}
                        required
                    />
                    <label htmlFor="idInput" className="label">ID</label>
                    <div className="underline"></div>
                </div>

                <div className="profile-container">
                    <input
                        type="password"
                        id="passwordInput"
                        className="InputSetting"
                        value={userInfo.password}
                        onChange={(e) => handleKeyDown(e, 'password', e.target.value)}
                        required
                    />
                    <label htmlFor="passwordInput" className="label">PW</label>
                    <div className="underline"></div>
                </div>

                <div className="profile-container">
                    <input
                        type="text"
                        id="emailInput"
                        className="InputSetting"
                        value={userInfo.email}
                        onChange={(e) => handleKeyDown(e, 'email', e.target.value)}
                        required
                    />
                    <label htmlFor="emailInput" className="label">Email</label>
                    <div className="underline"></div>
                </div>
            </div>

            <div className='CancelConfirm'>
                <button className='my-button cancel'>Cancel</button>
                <button className='my-button confirm'>Confirm</button>
            </div>
            
        </div>
                );
};

                export default Profile;
