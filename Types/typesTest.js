function checkType(variable) {
    console.log(typeof variable);
}

var gfd;

checkType("abc"); 
checkType(23);
checkType(true);
checkType({});
checkType([]);
checkType(gfd);
checkType(["abs", 123]);
checkType(function () { });
checkType({ "asd": 123 });
checkType(null);
checkType(NaN);