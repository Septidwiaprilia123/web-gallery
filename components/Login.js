import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from "./assets/img/CAGicon.png";
import './assets/style.css';
import "./assets/suksesstyle.css";

 
 
const Login = () => {
	
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
	const parameter = { email: email, password:password };
	const headers = { 
					'Authorization': 'Bearer my-token',
					'My-Custom-Header': 'foobar',
					 "Content-Type": "application/json"
					};

    const Auth = async (e) => {
        e.preventDefault();
        try {
			
          	axios.post('http://localhost:5000/login', parameter,{headers}).
			then((response) => {
									setMsg(response.data);
									if (response.data == "Login Sukses") 
									{
										navigate("/dashboard");
									}else{
										alert(response.data);
									}
							  });
			
			
        } catch (error) {
            if (error.response) {
                console.log(error.response);
            }
        }
    }
	
	useEffect(() => {
	   document.title = "Centre Art Gallery"
	}, []);
	
    return (
	<>
	 <div>
		<img style={{width:"7%",height: "auto"}} src={image} alt="logo"/>

		<div className="content">
		<p className="wellcome"> Welcome to </p>
		<p className="centergal"><span>Centre Art Gallery</span></p>
		<p className="par">Where you can view and upload photos <br></br>that can inspire and find new ideas</p>
		 </div>
        <div className="form">
		<form onSubmit={Auth} name="form_input">
		<div className="h3"> <h1>Login Here</h1></div>
		<div className="user"><input type="text" name="username" placeholder="Masukkan Username" required="" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
		<div className="pass"><input type="password" name="password" placeholder="Masukkan Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/></div>
		 <div className="field mt-5">
			<button className="buttonx">LOGIN</button>
		</div>
		</form>
		</div>
	</div>
	</>
		
    );
}
 
export default Login