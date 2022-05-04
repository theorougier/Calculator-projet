import React from "react";

export default function Input({label, value, type, htmlfor, name, id, handleChange}: {
    label: string,
    value: string,
    type: string,
    htmlfor: string,
    name: string,
    id: string,
    handleChange: (e:any) => any,
}) {
    return (
        <div>
            <label htmlFor={htmlfor}>{label}</label>
            <input value={value} type={type} name={name} id={id} onChange={(e) => handleChange(e)}/>
        </div>
    )
}