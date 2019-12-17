angular.module("projeto").service("operadorasAPI", function($http, config){
    this.getOperadoras=()=>{
        return $http.get(config.baseURL+"/operadoras")
    }
})