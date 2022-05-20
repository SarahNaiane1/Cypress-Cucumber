Feature: Validar mensagem de erros
     

    Scenario: Clicar no botão de Cadastra-se sem preencher formularío com nenhum dado
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece mensagems de erros dos campos que não foram preenchidos    


    Scenario: Cadastrar entregar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de CPF

        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados sem preencher CPF  
        And preencho os campos de endereço   
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo do cpf


   Scenario: Cadastrar entregar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de Nome
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados sem preencher o nome
        And preencho os campos de endereço   
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo do nome


  Scenario: Cadastrar entregar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de E-mail
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados sem preencher o email
        And preencho os campos de endereço   
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo do email


 Scenario: Cadastrar entregar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de CEP
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados 
        And preencho os campos de endereço sem preencher o cep
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo do cep



 Scenario: Cadastrar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de Número do Endereço
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados 
        And preencho os campos de endereço sem o número do endereço
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo número do endereço


  Scenario:Cadastrar com  Dados Pessoais , Endereço, fazer  Upload de CNH e não escolher Metódo de Entrega
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados 
        And preencho os campos de endereço
        And faço upload da CNH
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro  para selecionar método de entrega 


   Scenario: Cadastrar entregador com  Dados Pessoais, Endereço e Método de entrega sem fazer upload da CNH
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário 
        And preencho os campos  de dados 
        And preencho os campos de endereço
        And clico no metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem  para poder fazer upload da cnh