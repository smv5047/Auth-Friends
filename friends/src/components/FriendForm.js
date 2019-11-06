import React, {useState} from "react"
import api from "../utils/api"

function FriendForm(props) {

    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange =(e) =>{
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addFriends(e,friend)
        setFriend({
            name: '',
            age: '',
            email: ''
        })

    }

    return (
        <div>
            <form onSubmit={e =>handleSubmit(e)}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={friend.name}
                    onChange={handleChange}
                />
                <br/>
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={friend.age}
                    onChange={handleChange}
                />
                <br/>
                <input
                    type="email"
                    name="email"
                    placeholder="jane@doe.com"
                    value={friend.email}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}

export default FriendForm 