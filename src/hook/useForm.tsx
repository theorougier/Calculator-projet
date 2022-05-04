import { useState } from "react";

export default function useForm() {

    const [states, setStates] = useState({
        calcule:'',
    })
    const [result, setResult] = useState('')

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        setStates({
          ...states,
          calcule: e.target.value,
        });
    };
      

    const reversePolish = (newExpr: string) => {
        let expr:any = newExpr.split(" ");
        let stack:Array<any> =[];
      
        for(let i=0; i<expr.length; i++) {
          if(!isNaN(expr[i]) && isFinite(expr[i])) {
            stack.push(expr[i]);
      
          }else {
            let a = stack.pop();
            let b = stack.pop();
            if(expr[i] === "+") {
              stack.push(parseInt(a) + parseInt(b));
            } else if(expr[i] === "-") {
                stack.push(parseInt(b) - parseInt(a));
              } else if(expr[i] === "*") {
                  stack.push(parseInt(a) * parseInt(b));
              } else if(expr[i] === "/") {
                  stack.push(parseInt(b) / parseInt(a));
              } else if(expr[i] === "^") {
                  stack.push(Math.pow(parseInt(b), parseInt(a)));
              }
          }
        }


        if(stack.length > 1) {
           setResult("Le calcule n'est pas correct")
        }else {
           setResult(stack[0])
        }
      }

      
      return {
        states,
        result,
        reversePolish,
        handleChange,
      }
}

