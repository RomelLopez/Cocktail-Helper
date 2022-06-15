import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Homepage from "./components/Homepage";
import NonAlcoholic from "./components/NonAlcoholic";
import Alcoholic from "./components/Alcoholic";
import Surprise from './components/Surprise'
export default class routerURL extends Component {
    render() {
        return (
            <Routes>
                <Route path={process.env.PUBLIC_URL} element={<Homepage />} />
                <Route path="/NonAlcoholic" element={<NonAlcoholic />} />
                <Route path='/Alcoholic' element={<Alcoholic />} />
                <Route path='/Surprise' element={<Surprise />} />
            </Routes>
        );
    }
}