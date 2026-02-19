const fs=require('fs');
fs.readFile('foo.text',function(err,data){
   if(err){
    console.log(err);
   }
   else{
    console.log(data.toString());
   }
});

fs.readFile('foo.text',function(err,data){
    if(err){
     console.log(err);
     
    }
    else{
        console.log(data.toString());
    }
}
);