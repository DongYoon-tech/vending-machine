import React from "react"
import { NavLink } from "react-router-dom";
import "./Chips.css"

const Chips = () => {
    return (
        <div className="Chips">
            <h1>Hungry?! Get some Chips!</h1>
            <img
                src="https://media.giphy.com/media/l3vRdRkHrn9Y5PVh6/giphy.gif"
                alt="chips"
            />
            <div className="Chips-link">
                <NavLink exact to="/">
                    Go Back
                </NavLink>
            </div>
        </div>
    )
}

export default Chips;