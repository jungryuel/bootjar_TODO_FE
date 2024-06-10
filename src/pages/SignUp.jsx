import React from 'react';
import '../styles/auth.css'
import Input from "../component/Input.jsx";
import Checkbox from "../component/Checkbox.jsx";
// img
import back from "../assets/images/back.svg";
import check from "../assets/images/check.svg";

const SignUp = () => {
    return (
        <>
            <div className="authContainer">
                <p className="title">회원가입</p>
                <div className="signUpForm">
                    <Input name="이메일" placeholder="형식에 맞게 작성해 주세요" />
                    <Input name="비밀번호" type="password" placeholder="영어, 숫자, 특수문자 포함 8~20자" />
                    <Input name="비밀번호 확인" type="password" placeholder="비밀번호 확인" />
                    <Input name="닉네임" placeholder="4~10자로 입력해 주세요" />
                    <div className="nondisclosureYn">
                        <div className="question">
                            <p>비공개 계정을 원하시나요?</p>
                            <Checkbox id={'yn'} />
                        </div>
                        <p className="description">비공개로 할 경우 친구에게만 내 TODO가 노출됩니다.</p>
                    </div>
                    <div className="signUpBtn">
                        <button className="back"><img src={back} alt="뒤로가기" /></button>
                        <button className="signUp">가입하기<img src={check} alt=""/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;