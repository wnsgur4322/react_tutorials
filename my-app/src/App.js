import React, {useState, useEffect} from "react";
import './App.css';
import Routing from "./Routes";
import Amplify, { API } from "aws-amplify";
import config from "./aws-exports.js";

Amplify.configure(config);

function App() {

        useEffect(() => {
                async function fetchData() {
                        await API.get("laundryapi", "/laundry/object")
                        .then((res) => {
                                console.log(res);
                        });
                }
                fetchData();

        }, []);

        const handleSubmit = e => {
                e.preventDefault();
                // API.post("laundryapi", "/laundry", {
                //         body: {
                //                 id: 0,
                //                 machine: "Washer",
                //                 isOn: false,
                //                 user: "none" 
                //         }
                // })
                // API.post("laundryapi", "/laundry", {
                //         body: {
                //                 id: 1,
                //                 machine: "Dryer",
                //                 isOn: false,
                //                 user: "none" 
                //         }
                // })
                API.put("laundryapi", "/laundry", {
                        body: {
                                user: "admin",
                                id: 0,
                                machine: "Washer",
                                isOn: true,
                                who: "Kimchi"
                        } 
                })
                .then(response => {
                        // Add your code here
                        console.log(response)
                      })
                      .catch(error => {
                        console.log(error.response);
                });
                // API.del("laundryapi", "/laundry/object/Washer/none")
                // .then((res) => console.log(res));
        }

	return (
    	<div className="App">
                <Routing />
    	</div>
  	);
}

export default App;