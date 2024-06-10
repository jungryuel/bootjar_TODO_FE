import React from 'react';
import "../styles/todo.css";
import Checkbox from "../component/Checkbox.jsx";
// img
import basicProfile from "../assets/images/basicProfile.svg";

const Todo = () => {
    return (
        <>
            <div className="modalContainer">
                <span className="modalOverlay"></span>
                <div className="modalWrap">
                    <div className="modalHeader">
                        <p className="category">생활</p>
                        <button className="menu"></button>
                    </div>
                    <div className="modalBody">
                        <div className="todo">
                            <Checkbox id={`1`} />
                            <p className="title">방 청소하기</p>
                            <p className="date">06/11</p>
                        </div>
                        <p className="todoDesc">컴퓨터방, 침대방 꼼꼼히 청소하기</p>
                    </div>
                    <ul className="todoComment">
                        <li className="comment">
                            <img src={basicProfile} alt={"프로필 사진"} />
                            <div>
                                {/* TODO 댓글부터 */}
                                <p></p>
                                <p></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo;