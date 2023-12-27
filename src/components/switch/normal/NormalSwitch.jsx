import "./normalswitch.css";

const Normalswitch = (props) => {
    return (
        <>
            <label class="switch">
                <input type="checkbox" onClick={props.click} />
                <span class="slider"></span>
            </label>
        </>
    )
}

export default Normalswitch;