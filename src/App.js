import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import injectContext from "./store/Context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Detail from "./views/Detail";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/:type/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
};

export default injectContext(App);
