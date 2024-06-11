import React from 'react';
import "../styles/search.css";
import Header from "../component/Header.jsx";
// img
import basicProfile from "../assets/images/basicProfile.svg";
import nondisclosure from "../assets/images/nondisclosure.svg";
import publicAcc from "../assets/images/public.svg";

const Search = () => {
    return (
        <>
            <div className="searchContainer">
                <Header />
                <div className="searchWrap">
                    <p className="searchResult"><span>do</span>검색 결과</p>
                    <ul className="searchList">
                        <li className="list">
                            <img src={basicProfile} alt={"프로필 사진"}/>
                            <p className="nickname">burndo</p>
                            <div className="account">
                                <p>공개 계정</p>
                                {/*<img src={nondisclosure} alt={"비공개"}/>*/}
                                <img src={publicAcc} alt={"공개"}/>
                            </div>
                        </li>
                        <li className="list">
                            <img src={basicProfile} alt={"프로필 사진"}/>
                            <p className="nickname">boondo95</p>
                            <div className="account">
                                <p>공개 계정</p>
                                {/*<img src={nondisclosure} alt={"비공개"}/>*/}
                                <img src={publicAcc} alt={"공개"}/>
                            </div>
                        </li>
                        <li className="list">
                            <img src={basicProfile} alt={"프로필 사진"}/>
                            <p className="nickname">dokdo</p>
                            <div className="account">
                                <p>공개 계정</p>
                                {/*<img src={nondisclosure} alt={"비공개"}/>*/}
                                <img src={publicAcc} alt={"공개"}/>
                            </div>
                        </li>
                        <li className="list">
                            <img src={basicProfile} alt={"프로필 사진"}/>
                            <p className="nickname">bundo</p>
                            <div className="account">
                                <p>공개 계정</p>
                                {/*<img src={nondisclosure} alt={"비공개"}/>*/}
                                <img src={publicAcc} alt={"공개"}/>
                            </div>
                        </li>
                        <li className="list">
                            <img src={basicProfile} alt={"프로필 사진"}/>
                            <p className="nickname">Ulleungdo</p>
                            <div className="account">
                                <p>비공개 계정</p>
                                <img src={nondisclosure} alt={"비공개"}/>
                                {/*<img src={publicAcc} alt={"공개"}/>*/}
                            </div>
                        </li>
                        <li className="list">
                            <img src={basicProfile} alt={"프로필 사진"}/>
                            <p className="nickname">sudo</p>
                            <div className="account">
                                <p>비공개 계정</p>
                                <img src={nondisclosure} alt={"비공개"}/>
                                {/*<img src={publicAcc} alt={"공개"}/>*/}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Search;