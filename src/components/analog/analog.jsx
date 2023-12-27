import { useState } from "react";
import { useEffect } from "react";
import "./analog.css";

const Analog = () => {

    const [needle, setNeedle] = useState({hh:"00", mm:"00", ss:"00"});

    useEffect(() => {
        setTimeout(() => {
            let date = new Date(); 
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let copyObj = {...needle};
            copyObj.hh = `${30 * hours + minutes/2}deg`;
            copyObj.mm = `${6 * minutes}deg`;
            copyObj.ss = `${6 * seconds}deg`;
            setNeedle(copyObj);
            console.log(hours, minutes, seconds)
            
        }, 1000);

    //     h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
    // m.style.transform = `rotate(${6 * minutes}deg)`;
    // s.style.transform = `rotate(${6 * seconds}deg)`;
    });

    return (
        <div className="clock">
            
            <div className="needle hr" style={{"--h":"60px", "--clr":"red", "rotate": needle.hh}}><span></span></div>
            <div className="needle mn" style={{"--h":"80px", "--clr":"blue", "rotate": needle.mm}}><span></span></div>
            <div className="needle ss" style={{"--h":"100px", "--clr":"white", "rotate": needle.ss}}><span></span></div>
            <ul>
                <li style={{"--i":"1"}}><span>1</span></li>
                <li style={{"--i":"2"}}><span>2</span></li>
                <li style={{"--i":"3"}}><span>3</span></li>
                <li style={{"--i":"4"}}><span>4</span></li>
                <li style={{"--i":"5"}}><span>5</span></li>
                <li style={{"--i":"6"}}><span>6</span></li>
                <li style={{"--i":"7"}}><span>7</span></li>
                <li style={{"--i":"8"}}><span>8</span></li>
                <li style={{"--i":"9"}}><span>9</span></li>
                <li style={{"--i":"10"}}><span>10</span></li>
                <li style={{"--i":"11"}}><span>11</span></li>
                <li style={{"--i":"12"}}><span>12</span></li>
            </ul>
            
        </div>
    );
}

export default Analog;