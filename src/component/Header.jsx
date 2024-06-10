import React from 'react';
import "../styles/header.css";
// img
import logo from "../assets/images/logo.svg";
import friendRequest from "../assets/images/friendRequest.svg";

const Header = () => {
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
                    <button className="friendRequest"><img src={friendRequest} alt={"친구요청"}/></button>
                    <input type="text" className="search" placeholder="친구 검색"/>
                    <button className="logout">로그아웃</button>
                </div>
            </div>
        </>
    )
}

export default Header;