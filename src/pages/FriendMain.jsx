import React from 'react';
import "../styles/main.css";
import Header from "../component/Header.jsx";
import Checkbox from "../component/Checkbox.jsx";
// img
import basicProfile from "../assets/images/basicProfile.svg";
import comment from "../assets/images/comment.svg";
import move from "../assets/images/move.svg";
import deleteFriend from "../assets/images/delete.svg";
import bottom from "../assets/images/bottom.svg";
import done from "../assets/images/done.svg";
import notDone from "../assets/images/notDone.svg";
import commentCount from "../assets/images/commentCount.svg";
import Calendar from "../component/Calendar.jsx";
import FriendList from "../component/FriendList.jsx";

const FriendMain = () => {
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
                                    <p className="count">0</p>
                                </div>
                            </div>
                            <div className="record">
                                <span className="icon">
                                    <img src={notDone} alt={"미완료"}/>
                                </span>
                                <div className="recordText">
                                    <p>미완료</p>
                                    <p className="count">1</p>
                                </div>
                            </div>
                            <div className="record">
                                <span className="icon commentIcon">
                                    <img src={commentCount} alt={"댓글"}/>
                                </span>
                                <div className="recordText">
                                    <p>댓글</p>
                                    <p className="count">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="todoContainer">
                        <div className="userProfile">
                            <div className="userInfo">
                                <img src={basicProfile} alt={"프로필 사진"}/>
                                <p className="nickname">burndo</p>
                                <p>TODO</p>
                                <button className="request">친구 요청</button>
                            </div>
                            <div className="delete">
                                <button><img src={deleteFriend} alt={""} /></button>
                            </div>
                        </div>
                        <div className="todoWrap friendTodo">
                            <ul className="todoList">
                                <p className="category"><img src={bottom} alt={""} />일반</p>
                                <li className="todo">
                                    {/*id는 todoId 넣으면 됨*/}
                                    <Checkbox id={`11`}/>
                                    <p>지각하기</p>
                                    <img src={comment} alt="댓글" className="comment"/>
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

export default FriendMain;