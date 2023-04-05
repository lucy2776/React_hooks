import { useState } from "react";

const UseInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (event) => {
        console.log(event.target)

        const value = event.target.value
        // const { target: { value } } = event // ES6 구문

        let willUpdate = true

        if (typeof validator === "function") {
            willUpdate = validator(value)
        }

        if (willUpdate) {
            setValue(value)
        }
    }

    return { value, onChange }
}

const HookUseInput = () => {
    const maxLen = (value) => value.length <= 10 // 조건

    const name = UseInput("JE", maxLen)

    return (
        <div className="HookUseInput">
            <h1>HookUseInput</h1>
            <input placeholder="Name" {...name} />
            {/* {...name} == vale={name.value} onChange={onChange.value} */}
        </div>
    );
};

export default HookUseInput;