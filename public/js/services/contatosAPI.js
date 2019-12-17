angular.module("projeto").factory("contatosAPI", ($http, config)=>{
    let getContatos=()=>{
        return $http.get(config.baseURL+"/contatos")
    }

    let saveContato=(contato)=>{
        return $http.post(config.baseURL+"/contatos", contato)
    }

    return{getContatos,
    saveContato}
})