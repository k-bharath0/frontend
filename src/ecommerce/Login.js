import React, { Component } from 'react'

export default class Login extends Component {
    state={
        username:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
    }   
    send=()=>{
        //console.log(this.state.username)
        //axios.post("url",{us:this.s.u})
        fetch("https://backend-09h3.onrender.com/store",
        {method:'POST',
        headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ username: this.state.username, password: this.state.password })
        })
        // .then((res)=>{
        // console.log(res)
        // })
        this.setState({
          username:"",
          password:""
        })
        alert("successfull login")
    }
  render() {
    return (
      <div>
       <p> <input name='username' value={this.state.username} onChange={this.handleChange} placeholder='Username'/></p>
        <p> <input name='password' value={this.state.password} onChange={this.handleChange} placeholder='Password'/></p>
        <button onClick={this.send}>Login</button>
      </div>
    )
  }
}
