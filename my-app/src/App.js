import React, {useState, useEffect} from "react";
import './App.css';
import Routing from "./Routes";
import Amplify, { API } from "aws-amplify";
import config from "./aws-exports.js";
import { WasherUserContext, DryerUserContext
      } from "./contextLib";

Amplify.configure(config);

function App() {
        const [washerUser, setWasherUser] = useState("");
        const [dryerUser, setDryerUser] = useState("");

        useEffect(() => {
                API.get("laundryapi", "/laundry/object")
                .then((laundryRes) => console.log(laundryRes));

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
                                user: "none",
                                id: 0,
                                machine: "Washer",
                                isOn: true
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
                <WasherUserContext.Provider value={{ washerUser, setWasherUser }}>
                        <DryerUserContext.Provider value={{ dryerUser, setDryerUser }}>
      		                <Routing />
                                      <button onClick={handleSubmit}>submit</button>
                        </DryerUserContext.Provider>
                </WasherUserContext.Provider>
    	</div>
  	);
}

export default App;