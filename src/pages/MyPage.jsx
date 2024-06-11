import React from 'react';
import "../styles/myPage.css";
import Header from "../component/Header.jsx";
// img
import basicProfile from "../assets/images/basicProfile.svg";
import nondisclosure from "../assets/images/nondisclosure.svg";
import publicAcc from "../assets/images/public.svg";
import back from "../assets/images/back.svg";
import modify from "../assets/images/modify.svg";

const MyPage = () => {
    return (
        <>
            <div className="myPageContainer">
                <Header />
                <div className="myPageWrap">
                    <p className="title">내 정보</p>
                    <img src={basicProfile} alt={"프로필 사진"} className="profileImg" />
                    <p className="nickname">rnirarn</p>
                    <p className="email">myurm@naver.com</p>
                    <div className="account">
                        <p>비공개 계정</p>
                        <img src={nondisclosure} alt={"비공개"}/>
                        {/*<img src={publicAcc} alt={"공개"} />*/}
                    </div>
                    <div className="myPageBtn">
                        <button className="back"><img src={back} alt="뒤로가기"/></button>
                        <button className="mdf">수정하기<img src={modify} alt=""/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPage;