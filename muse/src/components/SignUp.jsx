import React, { useState } from 'react';
import './css/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
    genre1: 'banana',
    genre2: 'banana',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    // 회원가입 로직 구현
    console.log(formData);
  };

  return (
    <div className="sign-up-page">
      <h1 className="TitleLabel">MU:SE</h1>
      <div className="ContentContainer">
        <div className="Spread">
          <label>ID</label>
          <input
            type="text"
            className="InputSetting"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="Spread">
          <label>PW</label>
          <input
            type="password"
            className="InputSetting"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="Spread">
          <label>PW Confirm</label>
          <input
            type="password"
            className="InputSetting"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="Spread">
          <label className="Email">Email</label>
          <input
            type="email"
            className="InputSetting"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="Spread">
          <label>Name</label>
          <input
            type="text"
            className="InputSetting"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="Spread">
          <label>Favorite Genre 1</label>
          <select
            id="genre1"
            name="genre1"
            className="InputSetting"
            value={formData.genre1}
            onChange={handleChange}
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
          </select>
        </div>
        <div className="Spread">
          <label>Favorite Genre 2</label>
          <select
            id="genre2"
            name="genre2"
            className="InputSetting"
            value={formData.genre2}
            onChange={handleChange}
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
      <button className="ConfirmButton" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
