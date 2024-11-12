import "../UIContainer/LoginForm";
import LoginForm from "../UIContainer/LoginForm";
import React, { useEffect, useState } from 'react';
import * as loginService from "../../Services/LoginService";
import * as tokenHandler from "../../Utils/TokenHandler";


const LoginFormContainer = () => {
    const [company, setCompany] = useState(1)
    const [role, setRole] = useState("NV")
    const [userName, setUsername] = useState('')
    const [password, setPassWord] = useState('')

    const handleSubmit = async() => {
        const data = await loginService.Login({company:company, role:role, username:userName, password:password});
        if(data.isSuccess){
            tokenHandler.saveAccessToken(data.data.data.access_token);
        }else{
            alert('Đăng nhập thất bại');
        }
    }

    return (
        <LoginForm 
            setCompany={setCompany} 
            setRole={setRole} 
            userName={userName} 
            setUsername={setUsername} 
            password={password}
            setPassword={setPassWord}
            handleSubmit={handleSubmit}
        />
    )
}

export default LoginFormContainer;