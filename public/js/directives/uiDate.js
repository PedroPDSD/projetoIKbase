angular.module('listatelefonica').directive('uiDate', function($filter){
    return{
        require: 'ngModel',
        link:(scope, element, atributes, ctrl)=>{
            
            let formatDate=(data)=>{
                data=data.replace(/[^0-9'/']+/g, '')
                if(data.length===3 && data.charAt(2)!=='/'){
                    data=data.substring(0,2)+'/'+data.substring(2)
                }
                if(data.length===6 && data.charAt(5)!=='/'){
                    data=data.substring(0,5)+'/'+data.substring(5)
                }
                if(data.length>10){
                    data=data.substring(0,10)
                }
                return data
            }

            element.bind('keyup', ()=>{
                ctrl.$setViewValue(formatDate(ctrl.$viewValue))
                ctrl.$render()
            })

            ctrl.$parsers.push((value)=>{
                if(value.length===10){
                    let arrayData=value.split('/')
                    return new Date(arrayData[2], arrayData[1]-1, arrayData[0]).getTime()
                }
            })

            ctrl.$formatters.push((value)=>{
                return $filter('date')(value, 'dd/MM/yyyy')
            })
        }

    }
})