import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";
import OffBulb from "../images/bulb-off..png"
import OnBulb from "../images/bulb-on.png"
import "./modes.css"
const img = document.getElementById("img")

const Modes = () => {

    // bulb Setting
    const [bulb, setBulb] = useState(OffBulb)

    const [onOffText, btnText] = useState("ON")
    const toggleBulbBtn = (e) => {
       
        if (bulb == OffBulb) {
            setBulb(OnBulb)
            btnText("OFF")
        } else {
            setBulb(OffBulb)
            btnText("ON")
        }
    }
    //end



    const [lightMode, setMode] = useState({
        color: "black",
        backgroundColor: "white",
    })

    //btn style
    let btnStyle = {}

    const [btn, setBtn] = useState("Dark Mode")

    //darkMode function
    const toggleBtn = () => {
        if (lightMode.color == "black") {
            setMode({
                color: "white",
                backgroundColor: "#202124",
                transition: "background-color 0.5s ease-in-out"


            })
            setBtn("Light Mode")
        }
        else {
            setMode({
                color: "black",
                backgroundColor: "white",
                transition: "background-color 0.6s ease-in-out"

            })
            setBtn("Dark Mode")
        }
    }
    //end function
    return (
        <div className="BulbDiv" style={lightMode}>

            <header style={lightMode}>
                <h1 style={lightMode}>On Off Bulb</h1>
            </header>
            <section style={lightMode}>
                <img id="img" src={bulb} width="200px" alt="" />
                <button style={lightMode} onClick={() => toggleBulbBtn("ab")}>{onOffText}</button>
            </section>
            <div style={lightMode}>
                <button style={lightMode} onClick={toggleBtn}>{btn}</button>
            </div>
        </div>

    )
}
export default Modes