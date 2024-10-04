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
      <div className="signUpConatainer">
        <div className="Spread">
          <div className="input-container">
            <input 
              type="text" 
              name="id" 
              className="InputSetting" 
              value={formData.id} 
              onChange={handleChange} 
              required 
            />
            <label for="input" className="label">ID</label>
            <div className="underline"></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <input 
              type="password" 
              name="password"
              className="InputSetting" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <label for="input" className="label">PW</label>
            <div className="underline"></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <input 
              type="password" 
              name="confirmPassword"
              className="InputSetting" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
            />
            <label for="input" className="label">PW Confirm</label>
            <div className="underline"></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <input 
              type="email" 
              name="email"
              className="InputSetting" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <label for="input" className="label">Email</label>
            <div className="underline"></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <input 
              type="text" 
              name="name"
              className="InputSetting" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <label for="input" className="label">Name</label>
            <div className="underline"></div>
          </div>
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
