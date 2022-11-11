function checkWordCase(str){
    regexp =/^[A-Z]/;
    if(regexp.test(str)){
        console.log("Thats uppercase");
    }
    else{
        console.log("thats lowercase");
    }
}
checkWordCase('sss');
//thats lowercase
checkWordCase('SUFSHSJKFHSFJKSH');
//thats uppercase