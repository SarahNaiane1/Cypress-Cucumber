Feature: Cadastrar Usuários para se tornar entregador

    Scenario: Preencher campos de dados
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados   
        And preencho os campos de endereço   
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece modal informando que foi enviado dados



        Scenario: CPF inválido
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados com CPF inválido
        And preencho os campos de endereço   
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece mensagem de erro do CPF inválido





    
