import React, { useState } from "react";

import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import {
    Navigate,
    useNavigate
  } from "react-router-dom";

import { CustomeTextfield, CustomButton } from "../../component";
import { loginAPI } from "../../api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibility] = useState(false);
    const navigate = useNavigate();


    const onClickHandler = async () => {
        try {
            const response = await loginAPI(email, password);
            const { data: data } = response;
            const { status, data: { token } } = data;
            if (status === 200) {
                const tokens= localStorage.setItem("token", token);
                navigate("/home")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleVisibility = () => {
        setVisibility(!visibility)
    }

    return (
        <>
            <Container>
            <Box>
                <Typography color="voilet">Login</Typography>
                <CustomeTextfield label="email" onChange={handleEmailChange} value={email} type="text" />
                <CustomeTextfield 
                    label="password" 
                    onChange={handlePasswordChange} 
                    value={password} 
                    type={ visibility ? "text" : "password"}
                    handleVisibility={handleVisibility}
                    visibility={visibility}
                />
                <span>Don't have an account? Sign up.</span>
                <br/>
                <CustomButton onClick={onClickHandler} />
            </Box>
        </Container>
        </>
    )
}

export default Login;