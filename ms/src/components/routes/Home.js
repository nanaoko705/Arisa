import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "./BoardList";

class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/board" element={<BoardList />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Home;