import React from "react"
import { Link } from "react-router-dom";
import "./Chocolate.css"

const Chocolate = () => {
    return (
        <div className="Chocolate">
            <h1>Low Sugar?! Chocolate Time!</h1>
            <img
                src="https://media.giphy.com/media/133l9lMseIxhfy/giphy.gif"
                alt="chocolate"
            />
            <div className="Chocolate-link">
                <Link exact to="/">
                    Go Back
                </Link>
            </div>
        </div>
    )
}

export default Chocolate;