import React, { useState } from 'react';
import './css/SignIn.css';

const SignIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // 로그인 로직 구현
    console.log(`ID: ${id}, Password: ${password}`);
  };

  return (
    <div className="sign-in-page">
      <h1 className="TitleLabel">MU:SE</h1>
      <div className="IDPWContainer">
        <div className="ContentContainer">
          <label className="FontSetting">ID</label>
          <input
            type="text"
            className="InputSetting"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="ContentContainer">
          <label className="FontSetting">PW</label>
          <input
            type="password"
            className="InputSetting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button className="SignInButton" onClick={handleSignIn}>
        Sign In
      </button>
      <footer>
        <label className="ForgotPass">Forgot Password?</label>
      </footer>
    </div>
  );
};

export default SignIn;
