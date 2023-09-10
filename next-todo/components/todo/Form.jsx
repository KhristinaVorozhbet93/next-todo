import { useState } from "react";
import Button from "./Button";

export default function Form({addItem}) {
    console.debug('Form render');
    const
        [value, setValue] = useState('-');

    return (
        <>
            <fieldset>
                <legend>Form</legend>
                <input value={value} onInput={evt => setValue(evt.target.value)} />
                <Button onClick = {() => addItem(value)}>Add</Button>
            </fieldset>
        </>
    )
}