import React, { useState } from 'react';
import "../styles/header.css";
// img
import logo from "../assets/images/logo.svg";
import friendRequest from "../assets/images/friendRequest.svg";
import { useNavigate } from "react-router-dom";
import RequestFriendList from "./RequestFriendList.jsx";

const Header = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && searchValue.trim() !== '') {
            navigate(`/search?query=${encodeURIComponent(searchValue.trim())}`);
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
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
                    <button className="friendRequest"><img src={friendRequest} alt={"친구요청"}/>
                        <RequestFriendList></RequestFriendList>
                    </button>
                    <input
                        type="text"
                        className="search"
                        placeholder="친구 검색"
                        value={searchValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                    />
                    <button className="logout">로그아웃</button>
                </div>
            </div>
        </>
    );
}

export default Header;
