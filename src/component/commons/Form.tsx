import React from "react";
import useForm from "../../hook/useForm";
import Input from "./Input";

export default function Form() {
  const { states, result, reversePolish, handleChange } = useForm();
  return (
    <>
      <Input
        handleChange={handleChange}
        label="Calculette"
        value={states.calcule}
        type="text"
        id="calculette"
        htmlfor="calculette"
        name="calculette"
      />
      <button onClick={() => reversePolish(states.calcule)}>Calculez</button>
      <div className="container-result">
        <h2>{result ? "Votre résultat" : "Comment ça marche?"}</h2>
        <p>
          {result
            ? result
            : "Entrez votre formule Reverse Polish Notation. Exemple 5 1 2 + 4 * + 3 -. Puis clickez sur << Calculez >>"}
        </p>
      </div>
    </>
  );
}
