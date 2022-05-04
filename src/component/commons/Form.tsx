import React from "react";
import useForm from "../../hook/useForm";
import Input from "./Input";

export default function Form() {
    const {states,result, reversePolish, handleChange} = useForm()
    return(
        <>
        <form onSubmit={reversePolish(states.calcule)}>
            <Input handleChange={handleChange} label="Calculette" value={states.calcule} type="text" id="calculette" htmlfor="calculette" name="calculette"/>
            <button type="submit">submit</button>
        </form>
        <div>{result}</div>
        </>
    )
}