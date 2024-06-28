import React, {useState, useEffect} from 'react';
import basicProfile from "../assets/images/basicProfile.svg";
import {getFriends} from "../api_f/friend.js";

const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const token = 'your-auth-token'; // 수정해야 함

    const getFriendList = async () => {
        try {
            const res = await getFriends(token);
            if (res.status === 200) {
                setFriends(res.data); // Assuming the API response structure has the friend list in res.data
            }
        } catch (error) {
            console.error("Error fetching friend list", error);
        }
    };

    useEffect(() => {
        getFriendList();
    }, []);

    return (
        <div className="friendListWrap">
            <p className="friendListTitle">내 친구</p>
            <ul className="friendList">
                {friends.map(friend => (
                    <li key={friend.userId} className="friend">
                        <img src={friend.userImage === "default" ? basicProfile : friend.userImage} alt="프로필 사진"/>
                        <p>{friend.userNickname}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FriendList;
