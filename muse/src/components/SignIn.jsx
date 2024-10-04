import React, { useState } from 'react';
import './css/SignIn.css';
import axios from 'axios';

const SignIn = () => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    axios.post("http://localhost:3000/api/user",{
      responseType: 'json',
      uid:id,
      upw:password,
  })
  .then((Response)=>{
      console.log(Response.data);
      const obj=Response.data[0];

      if(obj.cnt>0){
        //로그인 성공
        console.log('난천재야')
      }
      else{
        //qt
        console.log('난바보야')
      }
      
  });
    // 로그인 로직 구현
    console.log(`ID: ${id}, Password: ${password}`);
  };

  return (
    <div className="sign-in-page">
      <h1 className="TitleLabel">MU:SE</h1>
      <div className="IDPWContainer">
        <div className="signInContainer">
          <label className="FontSetting">ID</label>
          <input
            type="text"
            className="InputSetting"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="signInContainer">
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
        <label className="ForgotPass">이것은 React Project입니다. 그런데 이제 JSP를 곁들인.</label>
      </footer>
    </div>
  );
};

export default SignIn;
