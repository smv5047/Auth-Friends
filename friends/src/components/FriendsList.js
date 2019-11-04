import React, {useState, useEffect} from "react"

import api from "../utils/api"

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

    return(
        <div>
            {friends && friends.map((friend,i) =>(
                <div key={i}>
                    <h1>{friend.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default FriendsList