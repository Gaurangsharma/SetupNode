module.exports=(l,b,callback)=> { 
    if (l<=0 || b<=0){ 
        setTimeout(()=>
            callback(new Error("Enter value greater than zero"),
            null),
            2000);
        
    }
    else{
        setTimeout(()=>
        callback(null,{
            perimeter: () => (2*(l+b)),
            Area: () => (l*b)
        }),
            2000);
      
    }
}; 