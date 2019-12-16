angular.module("listatelefonica").filter("limiteNome", function(){
    return (input, size)=>{
        if(input.length<=size){
            return input
        }
        let output=input.substring(0, (size||4))+'...'
        return output
    }
})