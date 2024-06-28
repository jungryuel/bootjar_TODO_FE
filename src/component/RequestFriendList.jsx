import React from 'react';
import "../styles/requestFriendList.css";
// img
import accept from "../assets/images/accept.svg";
import refuse from "../assets/images/refuse.svg";

const RequestFriendList = () => {
    return (
        <>
            <ul className="requestFriendList">
                <li className="list">
                    <p className="friend">
                        <button>burndo</button>
                        님이 친구 요청을 보냈습니다.
                    </p>
                    <div className="requestBtn">
                        <button>
                            <img src={accept} alt="수락"/>
                        </button>
                        <button>
                            <img src={refuse} alt="거절"/>
                        </button>
                    </div>
                </li>
                <li className="list">
                    <p className="friend">
                        <button>burndo</button>
                        님이 친구 요청을 보냈습니다.
                    </p>
                    <div className="requestBtn">
                        <button>
                            <img src={accept} alt="수락"/>
                        </button>
                        <button>
                            <img src={refuse} alt="거절"/>
                        </button>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default RequestFriendList;