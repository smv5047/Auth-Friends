import React, { useState }from "react"
import api from "../utils/api"


function Login(props) {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)


    const handleChange =(e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
       
        api()
            .post("/api/login", data)
            .then(res => {
                console.log(res.data.payload)
                localStorage.setItem("token", res.data.payload)
                props.history.push("/account")
            })
            .catch(err => {
                console.log(err)
            })

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="username" 
                name="username"
                placeholder="username"
                value={data.username}
                onChange={handleChange}
                />
            <br/>
            <input
                type="password"
                name="password"
                placeholder="password"
                value={data.password}
                onChange={handleChange}
                />
            <br/>
            <br/>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login