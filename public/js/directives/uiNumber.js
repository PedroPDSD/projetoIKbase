angular.module('listatelefonica').directive('uiNumber',function(){
    return {
        require: 'ngModel',
        link:(scope, element, atributes, ctrl)=>{
            let formatNumber=(telefone)=>{
                telefone=telefone.replace(/[^0-9'()\-\']+/g, '')
                
            
                return telefone
            }

            element.bind('keyup', ()=>{
                ctrl.$setViewValue(formatNumber(ctrl.$viewValue))
                ctrl.$render()
            })

        }
    }
})