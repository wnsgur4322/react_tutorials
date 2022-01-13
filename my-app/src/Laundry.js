import React, {useState} from "react";
import {Switch, Button, Typography } from "@material-ui/core";

export default function Laundry() {
        const [washer, setWasher] = useState(false);
        const [dryer, setDryer] = useState(false);

        return (
                <div className="Laundry text-center" style={{textAlign: "center", fontFamily: "Arial"}}>
                        <h3>Washer</h3>
                        <Typography>Off <Switch />  On</Typography>
                        <Button
                                disabled
                                size="medium" 
                                color="primary"
                                style={{ 	borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "30%" : "80%",
                                        color: "black", textTransform: "none", border: "none", outline: "none"}}>
                                Someone is using
                        </Button>
                        <h3>Dryer</h3>
                        <Typography>Off <Switch />  On</Typography>
                        <Button
                                disabled
                                size="medium" 
                                color="primary"
                                style={{ 	borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "30%" : "80%",
                                        color: "black", textTransform: "none", border: "none", outline: "none"}}>
                                Someone is using
                        </Button>

                </div>
        );     
}