import { TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import "./style.css"

const CustomeTextfield = ({ label, onChange, value, type, handleVisibility, visibility }) => {
    return (
        <div>
            <TextField 
                className="field"
                label={label}
                onChange={onChange}
                value={value}
                type={type}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        {label==="password" ? (
                            <IconButton onClick={() => handleVisibility()}>
                                {visibility ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                            ) : (
                            <AccountCircleIcon />
                        )}
                        </InputAdornment>
                    )
                }} 
            />
        </div>
    )
};

export default CustomeTextfield;
