let x="9", y=3;

let oper = '%';
let z;
switch(oper){
    case '%': 
                if(typeof x != Number) 
                    throw "Not a number"
                else
                    z=x%y;
                break;
    case '+': z=x+y;
                break;
    case '%': z=x%y;
                break;
}