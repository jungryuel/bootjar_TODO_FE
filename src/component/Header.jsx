import React from 'react';
import "../styles/header.css";
import logo from "../assets/images/logo.svg";
import friendRequest from "../assets/images/friendRequest.svg";
import RequestFriendList from "./RequestFriendList.jsx";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            <div className="headerContainer">
                <div className="logo">
                    <img src={logo} alt="YOU & I TODO" className="logoImg"/>
                    <div className="logoTxt">
                        <p>you & i</p>
                        <p>todo</p>
                    </div>
                </div>
                <div className="headerOption">
                    <button className="friendRequest">
                        <img src={friendRequest} alt={"친구요청"}/>
                        <RequestFriendList></RequestFriendList>
                    </button>
                    <input type="text" className="search" placeholder="친구 검색"/>
                    <button className="logout" onClick={logout}>로그아웃</button>
                </div>
            </div>
        </>
    )
}

export default Header;