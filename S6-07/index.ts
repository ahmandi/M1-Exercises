const add = (a, b) => {
    return a + b 
  };

function multiply(a, b){
    let x = 0
    for(let i = 1; i <= b; i++){
        x = add(a,x)
    }
    return x
}

function power(a,n){
     let x = 1
     for(let i = 1; i <= n; i++) {
        x = multiply(a,x)
     }
     return x
}

function factorial(a){
    let x = a
    for(let i = a - 1; i >= 1; i--){
        x = multiply(x, i)
    }
    return x
}

function fibonacci(n){
    let a = 0
    let b = 1
    let x = 0
    for(let i = 0; i < n -1 ; i++){
        x = add(a,b)
        a = b
        b = x
    }
    return x
}

export enum Operation { Add, Subtract, Multiply, Divide };

// em caso de erro vamos retornar null
export type OptionalNumber = number | null;

// Repare que os tipos Operand e Expression são mutuamente recursivos
export type Operand = OptionalNumber | Expression;

// lhs - left-hand side => lado esquerdo da operação
// rhs - right-hand side => lado direito da operação
export interface Expression {
  operation : Operation,
  lhs : Operand,
  rhs : Operand
}

export interface SimpleExpression extends Expression {
  operation : Operation,
  lhs : OptionalNumber,
  rhs : OptionalNumber
}


export function calculateSimpleExpression(simpleExpression: SimpleExpression): OptionalNumber {
    // TODO: Implementar as quatro operações básicas
    // - se qualquer um dos operandos for null o resultado deve ser null
    // - no caso da divisão tome cuidado com o denominador zero
    switch (simpleExpression.operation){
      case Operation.Add:
        return + 
        break;
      case Operation.Subtract:
        return - ab
        break;
      case Operation.Multiply:
        let x = 0
        for(let i = 1; i <= b; i++){
            x = + ab
        }
        return x
        break;
      case Operation.Divide:
        if (simpleExpression === null) {
            return null
        }
        return / ab
        break;
    }
  }