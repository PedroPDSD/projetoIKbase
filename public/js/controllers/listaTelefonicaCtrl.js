angular.module("listatelefonica").controller("listatelefonicaCtrl", ($scope, contatosAPI, operadorasAPI, serialGenerator) =>{
    console.log(serialGenerator.generate())
    $scope.contatos=[];
    $scope.operadoras=[];

    const carregarContatos=()=>{
        contatosAPI.getContatos().then((res)=>{
            $scope.contatos=res.data
        }).catch(()=>{
            $scope.error='Não foi possivel carregar os dados!'
        })
    }

    const carregarOperadoras=()=>{
        operadorasAPI.getOperadoras().then((res,)=>{
            $scope.operadoras=res.data
        })
    }
    
    $scope.addContato=(contato)=>{
        contato.serial=serialGenerator.generate();
        contatosAPI.saveContato(contato).then(()=>{
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        }).catch(function(err){
            $scope.error=err
          });
    };

    $scope.removeContatos=(contatos)=>{
        $scope.contatos=contatos.filter((contato)=>{
            return (!contato.selecionado)
        });
    };

    $scope.isContatoSelecionado=(contatos)=>{
        return contatos.some((contato)=>{
            return contato.selecionado;
        });
    };

    $scope.ordenarPor=(atributo)=>{
        $scope.criterioDeOrdenacao=atributo;
        $scope.ordem=!$scope.ordem;
    };

    carregarContatos();
    carregarOperadoras();
});