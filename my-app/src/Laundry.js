import React, {useState} from "react";
import {Switch, Button, Typography } from "@material-ui/core";
import { useWasherUserContext, useDryerUserContext
} from "./contextLib";

export default function Laundry() {
        const [washer, setWasher] = useState(false);
        const [dryer, setDryer] = useState(false);
        const {washerUser, setWasherUser} = useWasherUserContext();
        const {dryerUser, setDryerUser} = useDryerUserContext();

        const [CheckedWasher, setCheckedWasher] = useState(false);
        const [CheckedDryer, setCheckedDryer] = useState(false);

        const handleChangeWasher = (event) => {
                setCheckedWasher(event.target.checked);
        };

        const handleChangeDryer = (event) => {
                setCheckedDryer(event.target.checked);
        };
        

        return (
                <div className="Laundry text-center" style={{textAlign: "center", fontFamily: "Arial"}}>
                        <h3>Washer</h3>
                        <Typography>
                                Off 
                                <Switch       
                                checked={CheckedWasher}
                                onChange={handleChangeWasher} 
                                />  
                                On
                        </Typography>
                        <Button
                                disabled
                                size="medium" 
                                color="primary"
                                style={{ 	borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "30%" : "80%",
                                        color: "black", textTransform: "none", border: "none", outline: "none"}}>
                                {CheckedWasher === true? washerUser + " is using" : "Washer is dead" }
                        </Button>
                        <h3>Dryer</h3>
                        <Typography>
                                Off 
                                <Switch       
                                checked={CheckedDryer}
                                onChange={handleChangeDryer} 
                                />  
                                On
                        </Typography>
                        <Button
                                disabled
                                size="medium" 
                                color="primary"
                                style={{ 	borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "30%" : "80%",
                                        color: "black", textTransform: "none", border: "none", outline: "none"}}>
                                {CheckedDryer === true? dryerUser + " is using" : "Dryer is dead" }
                        </Button>

                </div>
        );     
}