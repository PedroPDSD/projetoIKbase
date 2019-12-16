angular.module("listatelefonica").provider("serialGenerator", function(){
    let tamanho=10
    this.getLength=()=>{
        return tamanho
    }
    this.setLength=(length)=>{
        tamanho=length
    }

    this.$get=()=>{
        return{
            generate: ()=>{
                let serial=""
                while(serial.length<tamanho){
                    serial+=String.fromCharCode(Math.round(Math.random()*64)+32)
                }
                return serial
            }
        }
    }
})