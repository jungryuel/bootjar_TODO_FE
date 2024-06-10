import React from 'react';
import '../styles/auth.css'
//img
import logo from '../assets/images/logo.svg'

const SignIn = () => {
    return (
        <>
            <div className="authContainer">
                <div className="logo">
                    <img src={logo} alt="YOU & I TODO" className="logoImg" />
                    <div className="logoTxt">
                        <p>you & i</p>
                        <p>todo</p>
                    </div>
                </div>
                <div className="loginForm">
                    <input type="text" placeholder="닉네임" />
                    <input type="password" placeholder="비밀번호" />
                    <div className="signInUp">
                        <div className="signUp">
                            <p>아직 회원이 아니신가요?</p>
                            <button>회원가입</button>
                        </div>
                        <button className="signIn">LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;