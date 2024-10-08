import React, { useState } from 'react';
import './css/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
    genre1: '',
    genre2: 'banana',
  });

  // 에러 상태 관리
  const [formErrors, setFormErrors] = useState({
    idError: false,
    passwordError: false,
    confirmPasswordError: false,
    emailError: false,
    nameError: false,
    genre1Error: false,
    genre2Error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });



    // 입력 변경 시 에러 해제
    setFormErrors({
      ...formErrors,
      [`${name}Error`]: false,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
};

  const handleSignUp = () => {
    let hasError = false;
    const errors = {
      idError: formData.id === "",
      passwordError: formData.password === "",
      confirmPasswordError: formData.confirmPassword === "" || formData.password !== formData.confirmPassword,
      emailError: formData.email === "",
      nameError: formData.name === "",
      genre1Error: formData.genre1 === "",
      genre2Error: formData.genre2 === "",
    };

    setFormErrors(errors);

    // 빈칸이 있으면 focus를 첫 번째 에러 항목으로 이동
    if (errors.idError) {
      document.querySelector('input[name="id"]').focus();
      hasError = true;
    } else if (errors.passwordError) {
      document.querySelector('input[name="password"]').focus();
      hasError = true;
    } else if (errors.confirmPasswordError) {
      document.querySelector('input[name="confirmPassword"]').focus();
      hasError = true;
    } else if (errors.emailError) {
      document.querySelector('input[name="email"]').focus();
      hasError = true;
    } else if (errors.nameError) {
      document.querySelector('input[name="name"]').focus();
      hasError = true;
    } else if (errors.genre1Error) {
      document.querySelector('select[name="genre1"]').scrollIntoView(); // 포커스 대신 스크롤 이동
      hasError = true;
    } else if (errors.genre2Error) {
      document.querySelector('select[name="genre2"]').scrollIntoView(); // 포커스 대신 스크롤 이동
      hasError = true;
    }

    if (hasError) return; // 에러가 있으면 함수 종료

    // 회원가입 로직 구현

    //여기 pw confirm 구현 '해줘'
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
              className={`InputSetting ${formErrors.idError ? 'error' : ''}`}
              value={formData.id} 
              onChange={handleChange} 
              onBlur={(e) => handleBlur(e, 'username', e.target.value)}
              required 
            />
            <label htmlFor="input" className="label">ID</label>
            <div className={`underline ${formErrors.idError ? 'error' : ''}`}></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <input 
              type="password" 
              name="password"
              className={`InputSetting ${formErrors.passwordError ? 'error' : ''}`}
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="input" className="label">PW</label>
            <div className={`underline ${formErrors.passwordError ? 'error' : ''}`}></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <input 
              type="password" 
              name="confirmPassword"
              className={`InputSetting ${formErrors.confirmPasswordError ? 'error' : ''}`}
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="input" className="label">PW Confirm</label>
            <div className={`underline ${formErrors.confirmPasswordError ? 'error' : ''}`}></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <input 
              type="text" 
              name="email"
              className={`InputSetting ${formErrors.emailError ? 'error' : ''}`}
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="input" className="label">Email</label>
            <div className={`underline ${formErrors.emailError ? 'error' : ''}`}></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <input 
              type="text" 
              name="name"
              className={`InputSetting ${formErrors.nameError ? 'error' : ''}`}
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="input" className="label">Name</label>
            <div className={`underline ${formErrors.nameError ? 'error' : ''}`}></div>
          </div>
        </div>
        <div className="Spread">
          <div className="input-container">
            <select
              id="text"
              name="genre1"
              className={`InputSetting ${formErrors.genre1Error ? 'error' : ''}`}
              value={formData.genre1}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
              <option value="date">Date</option>
            </select>
            <label htmlFor="genre1" className="label">Favorite Genre 1</label>
            <div className={`underline ${formErrors.genre1Error ? 'error' : ''}`}></div>
          </div>
        </div>
        <div className="Spread">
        <div className="input-container">
            <select
              id="text"
              name="genre2"
              className={`InputSetting ${formErrors.genre2Error ? 'error' : ''}`}
              value={formData.genre2}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
              <option value="date">Date</option>
            </select>
            <label htmlFor="genre2" className="label">Favorite Genre 2</label>
            <div className={`underline ${formErrors.genre2Error ? 'error' : ''}`}></div>
          </div>
        </div>
      </div>
      <button className="ConfirmButton" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
