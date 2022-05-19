Feature: Cadastrar Usuários para se tornar entregador
   

    Scenario: Cadastrar Dados Pessoais, Endereço e Método de entrega

        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados   
        And preencho os campos de endereço   
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece modal informando que foi enviado dados

    





    
