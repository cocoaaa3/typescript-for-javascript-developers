export{} ; 

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: any = kansu();

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10;
