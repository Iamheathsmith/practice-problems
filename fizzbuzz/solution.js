'use strict';


module.exports = new class {
  fizzBuzz(arg) {
    let final =[];
    for(let i = 1; i < arg.length; i++){
      if (i % 3 === 0 && i % 5 === 0) final.push('FizzBuzz');
      else if (i % 3 === 0) final.push('Fizz');
      else if (i % 5 === 0) final.push('Buzz');
      else final.push(i);
    }
    return final;
  }

  fizzBuzzTurn(arg) {
    let final = [];
    for(let i = 1; i < arg.length; i++) {
      (i % 3 === 0 && i % 5 === 0) ?
        final.push('FizzBuzz') :
        (i % 3 === 0) ? final.push('Fizz') :
          (i % 5 === 0) ? final.push('Buzz') :
            final.push(i)
    }
    return final;
  }
}
