import "./slideswitch.css";

const Slideswitch = (props) => {
    return (
        <>
            <input className="tgl tgl-skewed" id={props.id} type="checkbox" onClick={props.click} />
            <label className="tgl-btn" data-tg-off={props.off} data-tg-on={props.on} htmlFor={props.id}></label>
        </>
    )
}

export default Slideswitch;