function fullName(fstName="", secName=""){
    return fstName+ " "+ secName;    
}
let test1=fullName("seema","dsouza");

let expected = "Seema DSouza";
if (test1 !== expected){
    throw new (`${test1}  is not equal to  ${expected}`);
}


//total amount
function totalAmount(amount="", taxRate=""){
    return amount(amount*taxRate);
}