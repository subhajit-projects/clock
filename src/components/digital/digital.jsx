import { useState } from "react";
import "./digital.css";
import { useEffect } from "react";
import common from "../../common/common";
import Slideswitch from "../switch/slide/SlideSwitch";

const Digital = () => {

    const [timeAll, setTimeAll] = useState({hh:"00", mm:"00", ss:"00", ampm: "--"});
    const [timeType, setTimeType] = useState(false); // Train time

    useEffect(() => {
        setTimeout(() => {
            let date = new Date(); 
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let copyObj = {...timeAll};
            copyObj.hh = timeType?common.makeZero(hours):common.makeZero(hours%12);
            copyObj.mm = common.makeZero(minutes);
            copyObj.ss = common.makeZero(seconds);
            copyObj.ampm = (!timeType)?common.makeAmPm(hours):"";
            setTimeAll(copyObj);
            console.log(hours, minutes, seconds)
            
        }, 1000);
    });

    const changeTimeType = () => { 
        setTimeType(!timeType)
        let copyObj = {...timeAll};
        copyObj.hh = "00";
        copyObj.mm = "00";
        copyObj.ss = "00";
        copyObj.ampm = "--";
        setTimeAll(copyObj);
    }

    return (
        <>
            <div className="digital_clock">
                <div className="dhr">{timeAll.hh}</div>
                <div className="dot">:</div>
                <div className="dmn">{timeAll.mm}</div>
                <div className="dot">:</div>
                <div className="dss">{timeAll.ss}</div>
                {(timeAll.ampm === "")? "" : <div className="dampm">{timeAll.ampm}</div>}
            </div>
            <div className="time_format_change"><Slideswitch off="Train Time" on="Normal Time" id="time_type" click={changeTimeType} /></div>
        </>
    )
}

export default Digital