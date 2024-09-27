import React, { useState } from 'react';
import './css/Profile.css';

const Profile = () => {
    // 사용자 정보 상태
    const [userInfo, setUserInfo] = useState({
        username: 'user123',
        id: 'asdf1234',
        password: 'asdf1234',
        country: 'Korea',
        genre1: 'Dubstep',
        genre2: 'EDM',
        email: 'asdfasdf@gmail.com',
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

    return (
        <div className="profile-page">
            <div className="profile-header">
                <img src="./img/getsix.png" alt="Profile" className="profile-image" />
                <div className="profile-username">
                    {editField === 'username' ? (
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
                        
                    ) : (
                        <>
                            <span>{userInfo.username}</span>
                            <img
                                src="./img/edit.png"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => handleEdit('username')}
                            />
                        </>
                    )}
                </div>
            </div>

            <div className="profile-details">
                <div className="detail-item">
                    <span className='width-limit'>ID</span>
                    <span className='flex1'>{userInfo.id}</span>
                </div>
                
                <div className="detail-item">
                    <span className='width-limit'>PW</span>
                    {editField === 'password' ? (
                        <div className='display-flex'>
                            <input
                                type="password"
                                value={userInfo.password}
                                onChange={(e) => handleKeyDown(e, 'password', e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, 'password', e.target.value)}
                                onBlur={(e) => handleBlur(e, 'password', e.target.value)}
                            />
                            <img
                                    src="./img/edit.png"
                                    alt="Edit"
                                    className="edit-icon"
                                    onClick={() => handleEdit('password')}
                                />
                        </div>
                    ) : (
                        <>
                            <span className='flex1'>{userInfo.password}</span>
                            <img
                                src="./img/edit.png"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => handleEdit('password')}
                            />
                        </>
                    )}
                </div>

                <div className="detail-item">
                    <span className='width-limit'>Country</span>
                    {editField === 'country' ? (
                        <div className='display-flex'>
                            <input
                            type="text"
                            value={userInfo.country}
                            onChange={(e) => handleKeyDown(e, 'country', e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 'country', e.target.value)}
                            onBlur={(e) => handleBlur(e, 'country', e.target.value)}
                            />
                            <img
                                src="./img/edit.png"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => handleEdit('country')}
                            />
                        </div>
                        
                    ) : (
                        <>
                            <span className='flex1'>{userInfo.country}</span>
                            <img
                                src="./img/edit.png"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => handleEdit('country')}
                            />
                        </>
                    )}
                </div>
                
                <div className="detail-item">
                    <span className='width-limit'>Email</span>
                    {editField === 'email' ? (
                        <div className='display-flex'>
                            <input 
                            type="text"
                            value={userInfo.email}
                            onChange={(e) => handleKeyDown(e, 'email', e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 'email', e.target.value)}
                            onBlur={(e) => handleBlur(e, 'email', e.target.value)}
                            />
                            <img
                                src="./img/edit.png"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => handleEdit('email')}
                            />
                        </div>
                        
                    ) : (
                        <>
                            <span className='flex1'>{userInfo.email}</span>
                            <img
                                src="./img/edit.png"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => handleEdit('email')}
                            />
                        </>
                    )}
                </div>
                
                <div className="detail-item">
                    <span className='width-limit'>Favorite Genre 1</span>
                    <select
                        value={userInfo.genre1}
                        onChange={(e) => handleBlur(e, 'genre1', e.target.value)}
                    >
                        <option value="Dubstep">Dubstep</option>
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                    </select>
                </div>

                <div className="detail-item">
                    <span className='width-limit'>Favorite Genre 2</span>
                    <select
                        value={userInfo.genre2}
                        onChange={(e) => handleBlur(e, 'genre2', e.target.value)}
                    >
                        <option value="EDM">EDM</option>
                        <option value="Hip-Hop">Hip-Hop</option>
                        <option value="Jazz">Jazz</option>
                    </select>
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
