import React, {useState, useEffect} from "react";
import {Switch, Button, Typography } from "@material-ui/core";
import Amplify, { API } from "aws-amplify";
import config from "./aws-exports.js";

Amplify.configure(config);

export default function Laundry() {
        const [washerWho, setWasherWho] = useState(new Array());
        const [dryerWho, setDryerWho] = useState(new Array());

        useEffect(() => {
                async function fetchData() {
                        await API.get("laundryapi", "/laundry/object")
                        .then((res) => {
                                console.log(res);
                                setWasherWho([res[0].who, res[0].isOn]);
                                setDryerWho([res[1].who, res[1].isOn]);
                        });
                }
                fetchData();
        }, []);

        const handleChangeWasher = () => {
                if (washerWho[1] === true){
                        API.put("laundryapi", "/laundry", {
                                body: {
                                        user: "admin",
                                        id: 0,
                                        machine: "Washer",
                                        isOn: false,
                                        who: "none"
                                } 
                        })
                        .then(response => {
                                // Add your code here
                                console.log(response);
                                setWasherWho(["none", false]);
                              })
                              .catch(error => {
                                console.log(error.response);
                        });    
                }
                else {
                        API.put("laundryapi", "/laundry", {
                                body: {
                                        user: "admin",
                                        id: 0,
                                        machine: "Washer",
                                        isOn: true,
                                        who: localStorage.getItem("user")
                                } 
                        })
                        .then(response => {
                                // Add your code here
                                console.log(response);
                                setWasherWho([localStorage.getItem("user"), true]);
                              })
                              .catch(error => {
                                console.log(error.response);
                        });
                }
        };

        const handleChangeDryer = () => {
                if (dryerWho[1] === true){
                        API.put("laundryapi", "/laundry", {
                                body: {
                                        user: "admin",
                                        id: 1,
                                        machine: "Dryer",
                                        isOn: false,
                                        who: "none"
                                } 
                        })
                        .then(response => {
                                // Add your code here
                                console.log(response);
                                setDryerWho(["none", false]);
                              })
                              .catch(error => {
                                console.log(error.response);
                        });
                }
                else {
                        API.put("laundryapi", "/laundry", {
                                body: {
                                        user: "admin",
                                        id: 1,
                                        machine: "Dryer",
                                        isOn: true,
                                        who: localStorage.getItem("user")
                                } 
                        })
                        .then(response => {
                                // Add your code here
                                console.log(response);
                                setDryerWho([localStorage.getItem("user"), true]);
                              })
                              .catch(error => {
                                console.log(error.response);
                        });
                }
        };
        

        return (
                <div className="Laundry text-center" style={{textAlign: "center", fontFamily: "Arial"}}>
                        <h3>Washer</h3>
                        <Typography>
                                Off 
                                <Switch
                                key={0}       
                                checked={washerWho[1] === true}
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
                                {washerWho[1] === true? washerWho[0] + " is using" : "Washer is dead" }
                        </Button>
                        <h3>Dryer</h3>
                        <Typography>
                                Off 
                                <Switch
                                key={1}       
                                checked={dryerWho[1] === true}
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
                                {dryerWho[1] === true? dryerWho[0] + " is using" : "Dryer is dead" }
                        </Button>

                </div>
        );     
}