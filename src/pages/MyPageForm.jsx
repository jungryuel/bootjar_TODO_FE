import React from 'react';
import "../styles/myPage.css";
import Header from "../component/Header.jsx";
// img
import basicProfile from "../assets/images/basicProfile.svg";
import modify from "../assets/images/modifyImg.svg";
import Input from "../component/Input.jsx";
import Checkbox from "../component/Checkbox.jsx";
import back from "../assets/images/back.svg";
import check from "../assets/images/check.svg";

const MyPageForm = () => {
    return (
        <>
            <div className="myPageContainer">
                <Header />
                <div className="myPageFormWrap">
                    <p className="title">내 정보</p>
                    <div className="formContainer">
                        <div className="profileImgForm">
                            <img src={basicProfile} alt={"프로필 사진"} />
                            <button className="chngImg"></button>
                        </div>
                        <div className="inptFormWrap">
                            <Input name="이메일" value={"myurm@naver.com"} readOnly/>
                            <div className="chngPw inptForm">
                                <div className="chngPwHead">
                                    <label>비밀번호</label>
                                    <button>변경하기</button>
                                </div>
                                {/*변경하기 클릭 시 아래 input 활성화*/}
                                {/*<input type="password" placeholder="영어, 숫자, 특수문자 포함 8~20자" />*/}
                                {/*<Input name="비밀번호 확인" type="password" placeholder="비밀번호 확인"/>*/}
                            </div>
                            <Input name="닉네임" placeholder="4~10자로 입력해 주세요"/>
                            <div className="nondisclosureYn">
                                <div className="question">
                                    <p>비공개 계정을 원하시나요?</p>
                                    <Checkbox id={'yn'}/>
                                </div>
                                <p className="description">비공개로 할 경우 친구에게만 내 TODO가 노출됩니다.</p>
                            </div>
                            <div className="signUpBtn">
                                <button className="back"><img src={back} alt="뒤로가기"/></button>
                                <button className="save">저장하기<img src={check} alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPageForm;