function testAdd(num1, num2){
    return result= num1+num2;
}
let expected =6;
if(result !==expected){
    throw new Error(`${result} is noy equal to ${expected}`);
}