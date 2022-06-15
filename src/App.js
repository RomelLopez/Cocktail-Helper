import React from "react";
import Cocktailapi from "./api/Cocktailapi";
import Homepage from "./components/Homepage";
import NonAlcoholic from "./components/NonAlcoholic";
import Card from './components/Card';
import Select from './components/Select';
import RouterURL from "./RouterURL";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <RouterURL />
            </BrowserRouter>

        </div >
    )
}

export default App;