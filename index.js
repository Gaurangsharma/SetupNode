var rect=require("./rect");
function solveRact(l,b){
    console.log("length"+l+"breath"+b);

    if (l<=0 || b<=0){
        console.log("Enter value greater than zero");
    }
    else{
    console.log("Area:"+rect.Area(l,b)+"Perimeter:"+rect.perimeter(l,b));
    }
};

solveRact(3,2);
solveRact(4,6);
solveRact(-3,8);
solveRact(0,8);
