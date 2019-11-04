import React from "react"

import FriendForm from "./FriendForm"
import FriendsList from "./FriendsList"

function Account(props) {

    return(
        <div>
            <FriendForm/>
            <FriendsList/>
        </div>
    )
}

export default Account