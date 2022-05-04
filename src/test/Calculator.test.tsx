import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "../component/commons/Form";

export default function Caculator() {
  return (
    <section className="calculator-container">
      <h1>Calculator</h1>
      <div>
        <Form />
      </div>
    </section>
  );
}

it("Check if Home page displayed", () => {
  render(<Caculator />);

  screen.getByText("Calculator");
  screen.getByLabelText("Calculette");
  screen.getByText("Calculez");
  screen.getByText("Comment ça marche?");
  screen.getByText(
    "Entrez votre formule Reverse Polish Notation. Exemple 5 1 2 + 4 * + 3 -. Puis clickez sur << Calculez >>"
  );
});
