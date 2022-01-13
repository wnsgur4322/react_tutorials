
import React from "react";
import { Route, Routes } from "react-router-dom";
import Laundry from "./Laundry.js";
import Home from "./Home.js";

export default function Routing() {

        return (
                <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/laundry-info' element={<Laundry/>} />
                </Routes>
        );
}