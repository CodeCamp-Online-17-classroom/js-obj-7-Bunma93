// write code here
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let total = (obj) =>{
    let total = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let sum = Number(obj[key]);
            total += sum;
        }
    } 
    console.log(total);
}

total(salaries);