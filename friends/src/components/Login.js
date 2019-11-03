import React, {useState }from "react"

function Login(props) {
    const [data, setData] = useState=({
        username: "",
        password: ""
    })


    const handleChange =(e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

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
            <input
                type="password"
                name="password"
                placeholder="password"
                value={data.password}
                onChange={handleChange}
                />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login