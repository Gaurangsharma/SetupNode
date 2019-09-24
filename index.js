var rectange=require("./rect");
function solveRact(l,b){
    console.log("length"+l+"breath"+b);

    rectange(l,b,(err,rectange)=>{
        if (err){
            console.log("Error:"+err.message);
        }
        else{
            console.log("Area: "+rectange.Area()+"  Peremeter: "+rectange.perimeter());
        }
    });
    console.log("Afer the execution");
     
};


solveRact(3,2);
solveRact(4,6);
solveRact(-3,8);
solveRact(0,8);
