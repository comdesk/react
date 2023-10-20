import React, {useState} from "react";

const Input = () => {
    const [textValue, setTextValue] = useState("");

    const changeVal = (e) => [
        setTextValue(e.target.value)
    ]

    return (
        <div>
            <input type="text" value={textValue} onChange={changeVal}/><br />
            <p>{textValue}</p>
        </div>
    )
}

export default Input;