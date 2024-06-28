import React, {useState} from 'react';
import "../styles/todo.css";
import Checkbox from "../component/Checkbox.jsx";
// img
import basicProfile from "../assets/images/basicProfile.svg";
import deleteComment from "../assets/images/deleteComment.svg";
import mdfComment from "../assets/images/mdfComment.svg";

const Todo = () => {
    return (
        <>
            <div className="modalContainer">
                <span className="modalOverlay"></span>
                <div className="modalWrap">
                    <div className="modalHeader">
                        <p className="category">생활</p>
                        <button className="menu">
                        <div className="menuBtn">
                            <button>수정하기</button>
                            <button>삭제하기</button>
                        </div>
                    </button>
                    </div>
                    <div className="modalBody">
                        <div className="todo">
                            <Checkbox id={`1`} />
                            <p className="todoTitle">방 청소하기</p>
                            <p className="date">06/11</p>
                        </div>
                        <p className="todoDesc">컴퓨터방, 침대방 꼼꼼히 청소하기</p>
                    </div>
                    <ul className="todoComment">
                        <li className="comment">
                            <img src={basicProfile} alt={"프로필 사진"}/>
                            <div className="commentInfo">
                                {/* TODO 댓글부터 */}
                                <div className="commentHead">
                                    <p className="nickname">bootjar</p>
                                    <p className="date">2024-06-11</p>
                                </div>
                                <p className="text">아 몰라앙!</p>
                            </div>
                            <div className="commentBtn">
                                <button>
                                    <img src={mdfComment} alt="수정"/>
                                </button>
                                <button>
                                    <img src={deleteComment} alt="삭제"/>
                                </button>
                            </div>
                        </li>
                        <li className="comment">
                            <img src={basicProfile} alt={"프로필 사진"}/>
                            <div className="commentInfo">
                                {/* TODO 댓글부터 */}
                                <div className="commentHead">
                                    <p className="nickname">sort</p>
                                    <p className="date">2024-06-11</p>
                                </div>
                                <p className="text">미람아,</p>
                            </div>
                            <div className="commentBtn">
                                <button>
                                    <img src={mdfComment} alt="수정"/>
                                </button>
                                <button>
                                    <img src={deleteComment} alt="삭제"/>
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div className="postComment">
                        <input type="text" placeholder="댓글 입력"/>
                        <button className="send"></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;