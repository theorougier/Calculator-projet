import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useState } from "react";

function Input(){
  const [states, setStates] = useState({
    calcule:'',
  })

  const handleChange = (
      e
    ) => {
      setStates({
        ...states,
        calcule: e.target.value,
      });
  };

  return (
      <div className="from-input">
          <label htmlFor={"example"}>{"example"}</label>
          <input value={states.calcule} type={"text"} name={"example"} id={"example"} onChange={handleChange}/>
      </div>
  )
}

const setup = () => {
  const utils = render(<Input/>)
  const input = utils.getByLabelText('example')
  return {
    input,
    ...utils,
  }
}


it('Check if Input handleChange work', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: '23'}})
  expect(input.value).toBe('23')
});
