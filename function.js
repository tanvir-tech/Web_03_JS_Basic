var num1 = parseInt(prompt("Enter num1 :"));
var num2 = parseInt(prompt("Enter num2 :"));

function biggest(x,y){

    if(x>y)
        alert("Num1 is biggest");
    else if(x<y)
        alert("Num2 is biggest")
    else
        alert("Both are same");


}

biggest(num1,num2);


