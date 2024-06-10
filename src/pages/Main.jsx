import React from 'react';
import "../styles/main.css";
import Header from "../component/Header.jsx";
import Checkbox from "../component/Checkbox.jsx";
// img
import basicProfile from "../assets/images/basicProfile.svg";
import notification from "../assets/images/notification.svg";
import comment from "../assets/images/comment.svg";
import move from "../assets/images/move.svg";
import setting from "../assets/images/setting.svg";
import bottom from "../assets/images/bottom.svg";
import done from "../assets/images/done.svg";
import notDone from "../assets/images/notDone.svg";
import commentCount from "../assets/images/commentCount.svg";
import Calendar from "../component/Calendar.jsx";
import FriendList from "../component/FriendList.jsx";

const Main = () => {
    return (
        <>
            <div className="mainContainer">
                <span className="bgLayout"></span>
                <Header/>
                <div className="mainWrap">
                    <div className="calendarContainer">
                        <div className="calendar">
                            <Calendar />
                        </div>
                        <div className="monthRecord">
                            <div className="record">
                                <span className="icon">
                                    <img src={done} alt={"완료"}/>
                                </span>
                                <div className="recordText">
                                    <p>완료</p>
                                    <p className="count">97</p>
                                </div>
                            </div>
                            <div className="record">
                                <span className="icon">
                                    <img src={notDone} alt={"미완료"}/>
                                </span>
                                <div className="recordText">
                                    <p>미완료</p>
                                    <p className="count">2</p>
                                </div>
                            </div>
                            <div className="record">
                                <img src={commentCount} alt={"댓글"}/>
                                <div className="recordText">
                                    <p>댓글</p>
                                    <p className="count">17</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="todoContainer">
                        <div className="userProfile">
                            <div className="userInfo">
                                <img src={basicProfile} alt={"프로필 사진"}/>
                                <p className="nickname">rnirarn</p>
                                <p>TODO</p>
                                <button className="notification on"><img src={notification} alt={"알림"} /></button>
                            </div>
                            <div className="userSetting">
                                <button>내 정보<img src={setting} alt={""} /></button>
                            </div>
                        </div>
                        <div className="todoWrap">
                            <ul className="todoList">
                                <p className="category"><img src={bottom} alt={""} />생활</p>
                                <li className="todo">
                                    {/*id는 todoId 넣으면 됨*/}
                                    <Checkbox id={`1`}/>
                                    <p>방 청소하기</p>
                                    <img src={comment} alt="댓글" className="comment"/>
                                    <button className="move"><img src={move} alt="이동"/></button>
                                </li>
                                <li className="todo done">
                                    <Checkbox id={`2`} check={true}/>
                                    <p>물 마시기</p>
                                    <img src={comment} alt="댓글" className="comment"/>
                                    <button className="move"><img src={move} alt="이동"/></button>
                                </li>
                            </ul>
                            <ul className="todoList">
                                <p className="category"><img src={bottom} alt={""} />운동</p>
                                <li className="todo">
                                    <Checkbox id={`3`}/>
                                    <p>스쿼트 100개</p>
                                    <img src={comment} alt="댓글" className="comment"/>
                                    <button className="move"><img src={move} alt="이동"/></button>
                                </li>
                                <li className="todo done">
                                <Checkbox id={`4`} check={true}/>
                                    <p>준비 운동</p>
                                    <img src={comment} alt="댓글" className="comment" />
                                    <button className="move"><img src={move} alt="이동"/></button>
                                </li>
                            </ul>
                        </div>
                        <FriendList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;