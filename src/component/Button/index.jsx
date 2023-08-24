import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ onClick }) => {
    return (
        <Button variant="contained" onClick={onClick} >Submit</Button>
    )
}

export default CustomButton;
