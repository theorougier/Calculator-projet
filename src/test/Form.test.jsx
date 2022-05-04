import React from "react";
import useForm from "../hook/useForm";
import Input from "../component/commons/Input";
import { render, fireEvent, screen } from '@testing-library/react';

export default function Form() {
    const {states,result, reversePolish, handleChange} = useForm()
    return(
        <>
            <Input handleChange={handleChange} label="Calculette" value={states.calcule} type="text" id="calculette" htmlfor="calculette" name="calculette"/>
            <button onClick={() =>reversePolish(states.calcule)}>Calculez</button>
            <div className="container-result">
                <h2>
                    {
                        result?
                            'Votre résultat'
                        :
                            'Comment ça marche?'
                    }
                </h2>
                <p>
                    {
                        result?
                         result
                         :
                         'Entrez votre formule Reverse Polish Notation. Exemple 5 1 2 + 4 * + 3 -. Puis clickez sur << Calculez >>'
                    }
                </p>
            </div>
        </>
    )
}

const setup = () => {
    const utils = render(<Form/>)
    const input = utils.getByLabelText('Calculette')
    return {
        input,
        ...utils,
    }
}


it('Check if text was change after calcule', () => {
    const {input} = setup()
    screen.getByText('Comment ça marche?')
    screen.getByText('Entrez votre formule Reverse Polish Notation. Exemple 5 1 2 + 4 * + 3 -. Puis clickez sur << Calculez >>')
    fireEvent.change(input, {target: {value: '5 1 2 + 4 * + 3 -'}})
    fireEvent.click(document.querySelector('button'))
    screen.getByText("Votre résultat")
    screen.getByText("14")
});

it('Check if try calculate nAn', () => {
    const {input} = setup()
    screen.getByText('Comment ça marche?')
    screen.getByText('Entrez votre formule Reverse Polish Notation. Exemple 5 1 2 + 4 * + 3 -. Puis clickez sur << Calculez >>')
    fireEvent.change(input, {target: {value: 'qzdqzdzdq'}})
    fireEvent.click(document.querySelector('button'))
    screen.getByText('Comment ça marche?')
    screen.getByText('Entrez votre formule Reverse Polish Notation. Exemple 5 1 2 + 4 * + 3 -. Puis clickez sur << Calculez >>')
});

it('Check if try calculate with synthax error', () => {
    const {input} = setup()
    screen.getByText('Comment ça marche?')
    screen.getByText('Entrez votre formule Reverse Polish Notation. Exemple 5 1 2 + 4 * + 3 -. Puis clickez sur << Calculez >>')
    fireEvent.change(input, {target: {value: '+ 5 1 2 + 4 * + 3 -'}})
    fireEvent.click(document.querySelector('button'))
    screen.getByText("Votre résultat")
    screen.getByText("Le calcule n'est pas correct")
});