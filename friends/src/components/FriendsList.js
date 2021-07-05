import React, {useState, useEffect} from "react"

import api from "../utils/api"
import FriendForm from "./FriendForm"

function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        api().get('/api/friends')
            .then(res =>{
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const addFriends = (e, friend) => {
        e.preventDefault();
        api().post("/api/friends", friend)
            .then(res => {
                setFriends(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    return(
        <div>
            <div>
                <FriendForm addFriends={addFriends}/>
            </div>
            <div className="friendsList">
                {friends && friends.map((friend,i) =>(
                    <div key={i} className="friendCard">
                        <h1>{friend.name}</h1>
                        <h2>{friend.age}</h2>
                        <h2>{friend.email}</h2>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default FriendsList