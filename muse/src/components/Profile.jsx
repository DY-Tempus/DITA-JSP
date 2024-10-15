import React, { useEffect, useState } from 'react';
import './css/Profile.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Profile = ({ isDarkMode }) => {
    const [profileImg, setProfileImg] = useState(null); // 서버에서 받은 프로필 이미지
    const [imageSrc, setImageSrc] = useState(null); // 로컬에서 업로드한 이미지 파일 미리보기용
    const [genres, setGenres] = useState([]); // 장르 데이터를 저장할 상태
    const navigate = Navigate();
    // 장르 데이터를 가져오는 useEffect
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('http://113.198.238.115:3000/api/profile/genres');
                setGenres(response.data); // 가져온 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres(); // 컴포넌트가 마운트될 때 장르 목록을 불러오기
    }, []);

    // 이미지 미리보기와 파일 저장
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // 파일 객체 가져오기
        if (file) {
            setImageSrc(file); // 파일 객체 저장
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImg(reader.result); // 미리보기용 이미지 설정
            };
            reader.readAsDataURL(file); // 파일을 base64 URL로 변환하여 미리보기 설정
        }
    };

    // 이미지 업로드 함수 (BLOB 전송)
    const handleImageUpload = async () => {
        const formData = new FormData();

        formData.append('profileImage', imageSrc); // 이미지를 FormData로 전송
        formData.append('userId', userInfo.id); // 유저 ID도 함께 전송

        try {
            const response = await axios.post('http://113.198.238.115:3000/api/profile/uploadProfileImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                console.log('Image uploaded successfully', response.data);
            } else {
                console.error('Image upload failed', response.data);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    useEffect(() => {
        let obj = sessionStorage.getItem("idKey");
        obj = JSON.parse(obj);
        setProfileImg(obj.img); // 서버에서 받은 BLOB 데이터
        setUserInfo({
            username: obj.NAME,
            id: obj.ID,
            password: obj.PASSWORD,
            genre1: obj.GENRE1,
            genre2: obj.GENRE2,
            email: obj.EMAIL,
        });
    }, []);

    const [userInfo, setUserInfo] = useState({
        username: 'user123',
        id: 'asdf1234',
        password: 'asdf1234',
        genre1: '',
        genre2: '',
        email: 'asdfasdf@gmail.com',
    });

    const handleInputChange = (e, field) => {
        setUserInfo({ ...userInfo, [field]: e.target.value });
    };

    const handleProfileUpdate = async () => {
        const updatedInfo = {
            id: userInfo.id,
            username: userInfo.username,
            password: userInfo.password,
            email: userInfo.email,
            genre1: userInfo.genre1,
            genre2: userInfo.genre2,
        };

        try {
            const response = await axios.post('http://113.198.238.115:3000/api/profile/updateProfile', updatedInfo);
            console.log('Profile updated successfully', response.data);
        } catch (error) {
            console.error('Error updating profile:', error);
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
                {/* 이미지 미리보기 섹션 */}
                {profileImg && (
                    <img src={profileImg} alt="Image Preview" style={{ maxWidth: '100px', marginTop: '10px', borderRadius: '50%' }} />
                )}
                <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} />
                <label htmlFor="image-upload" className="profile-custom-file-upload">Choose Image</label>
                <div className="profile-username">
                    <input
                        type="text"
                        className="InputSetting"
                        value={userInfo.username}
                        onChange={(e) => handleInputChange(e, 'username')}
                        required
                    />
                    <div className="underline"></div>
                </div>
            </div>

            {/* 프로필 세부 정보 */}
            <div className={`profile-details ${isDarkMode ? 'dark-mode' : ''}`}>
                {/* ID */}
                <div className="profile-container">
                    <label htmlFor="idInput" className="label">ID</label>
                    <div className='flex1'>
                        <input
                            type="text"
                            id="idInput"
                            className="InputSetting"
                            value={userInfo.id}
                            onChange={(e) => handleInputChange(e, 'id')}
                            required
                        />
                        <div className="underline"></div>
                    </div>
                </div>

                {/* 비밀번호 */}
                <div className="profile-container">
                    <label htmlFor="passwordInput" className="label">PW</label>
                    <div className='flex1'>
                        <input
                            type="password"
                            id="passwordInput"
                            className="InputSetting"
                            value={userInfo.password}
                            onChange={(e) => handleInputChange(e, 'password')}
                            required
                        />
                        <div className="underline"></div>
                    </div>
                </div>

                {/* 이메일 */}
                <div className="profile-container">
                    <label htmlFor="emailInput" className="label">Email</label>
                    <div className='flex1'>
                        <input
                            type="text"
                            id="emailInput"
                            className="InputSetting"
                            value={userInfo.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            required
                        />
                        <div className="underline"></div>
                    </div>
                </div>

                {/* 장르1 */}
                <div className="profile-container">
                    <label htmlFor="genre1Input" className="label">Genre1</label>
                    <div className='flex1'>
                        <select
                            id="genre1Input"
                            className="InputSetting"
                            value={userInfo.genre1}
                            onChange={(e) => handleInputChange(e, 'genre1')}
                            required
                        >
                            {genres.map((genre) => (
                                <option key={genre.GNAME} value={genre.GNAME}>
                                    {genre.GNAME}
                                </option>
                            ))}
                        </select>
                        <div className="underline"></div>
                    </div>
                </div>

                {/* 장르2 */}
                <div className="profile-container">
                    <label htmlFor="genre2Input" className="label">Genre2</label>
                    <div className='flex1'>
                        <select
                            id="genre2Input"
                            className="InputSetting"
                            value={userInfo.genre2}
                            onChange={(e) => handleInputChange(e, 'genre2')}
                            required
                        >
                            {genres.map((genre) => (
                                <option key={genre.GNAME} value={genre.GNAME}>
                                    {genre.GNAME}
                                </option>
                            ))}
                        </select>
                        <div className="underline"></div>
                    </div>
                </div>
            </div>

            <div className='CancelConfirm'>
                <button className='my-button confirm' onClick={handleProfileUpdate} aria-label="Confirm Profile Update">
                    Confirm
                </button>
                <button className='my-button cancel' onClick={navigate('/home')} aria-label="Cancel Update">
                    Cancel
                </button>
                <button className='my-button confirm' onClick={handleImageUpload} aria-label="Upload Profile Image">
                    Upload Image
                </button>
            </div>
        </div>
    );
};

export default Profile;
