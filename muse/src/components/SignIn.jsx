import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SignIn.css';
import axios from 'axios';

const SignIn = () => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSignIn = () => {
    axios.post("http://113.198.238.115:3000/api/user/signin", {
      uid: id,
      upw: password,
    })
      .then((Response) => {
        console.log(Response.data);
        const obj = Response.data[0];
        console.log(obj)
        if (obj) {
          //로그인 성공
          sessionStorage.setItem("idKey", JSON.stringify(obj))
          if (sessionStorage.getItem("idKey")) {
            navigate("/home")
          }

        }
        else {
          //qt
          console.log('난바보야');
          alert('Invalid username or password');
        }

      });
    // 로그인 로직 구현
    console.log(`ID: ${id}, Password: ${password}`);
  };

  return (
    <div className="sign-in-page">
      <div className='sign-in-content-container'>
        <h1 className="TitleLabel">MU:SE</h1>
        <div className="IDPWContainer">
          <div className="signInContainer">
            <div className="input-container">
              <input
                type="text"
                id="input"
                className="InputSetting"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
              <label for="input" className="label">ID</label>
              <div className="underline"></div>
            </div>
          </div>
          <div className="signInContainer">
            <div className="input-container">
              <input
                type="password"
                id="input"
                className="InputSetting"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label for="input" className="label">PW</label>
              <div className="underline"></div>
            </div>
          </div>
        </div>
        <button className="SignInButton" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
      <footer>
        <label className="ForgotPass">이것은 React Project입니다. 그런데 이제 JSP를 곁들인.</label>
      </footer>
    </div>
  );
};

export default SignIn;
