

angular.module('listatelefonica').directive('uiAccordion', function(){
    return{
        template:`
            <div class='ui-accordion-title' ng-click='open()'>
                {{title}}
            </div>
            <div class='ui-accordion-content' ng-transclude ng-show='isOpened'>

            </div>
        `,
        transclude:true,
        restrict:'E',
        scope:{
            title:'@'
        },
        link: (scope, element, attrs, ctrl)=>{
            scope.open=()=>{
                scope.isOpened=!scope.isOpened
            }
        }
    }
})