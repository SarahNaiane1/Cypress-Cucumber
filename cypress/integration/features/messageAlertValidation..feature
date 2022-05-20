Feature: Validar mensagem de erros
    Background:
        Given acesso o site Buger Eats
        And acesso o botão  de Cadastre-se para fazer entregas
        And acesso o formulário

    
    Scenario: Clicar no botão de Cadastra-se sem preencher formularío com nenhum dado
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece mensagems de erros dos campos que não foram preenchidos

  
    Scenario: Cadastrar entregar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de CPF
        And preencho os campos  de dados sem preencher CPF
        And preencho os campos de endereço
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo do cpf


    Scenario: Cadastrar entregar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de Nome
        And preencho os campos  de dados sem preencher o nome
        And preencho os campos de endereço
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo do nome


    Scenario: Cadastrar entregar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de E-mail
        And preencho os campos  de dados sem preencher o email
        And preencho os campos de endereço
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo do email


    Scenario: Cadastrar entregar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de CEP
        And preencho os campos  de dados
        And preencho os campos de endereço sem preencher o cep
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo do cep



    Scenario: Cadastrar com  Dados Pessoais, Endereço e Método de entrega sem preencher o campo de Número do Endereço
        And preencho os campos  de dados
        And preencho os campos de endereço sem o número do endereço
        And preencho os campos de metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro do compo número do endereço


    Scenario:Cadastrar com  Dados Pessoais , Endereço, fazer  Upload de CNH e não escolher Metódo de Entrega
        And preencho os campos  de dados
        And preencho os campos de endereço
        And faço upload da CNH
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro  para selecionar método de entrega


    Scenario: Cadastrar entregador com  Dados Pessoais, Endereço e Método de entrega sem fazer upload da CNH
        And preencho os campos  de dados
        And preencho os campos de endereço
        And clico no metodo de entrega
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem  para poder fazer upload da cnh


    Scenario: Selecionar três tipos de Métodos de entrega
        And preencho os campos  de dados
        And preencho os campos de endereço
        But clico em tres tipos de metodo de entrega
        And faço upload da CNH
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro  para selecionar um método de entrega


    Scenario: Selecionar dois tipos de Métodos de entrega
        And preencho os campos  de dados
        And preencho os campos de endereço
        But clico em dois tipos de metodo de entrega
        And faço upload da CNH
        When clico no botão de  cadastra-se para fazer entrega
        Then aparece  mensagem de erro  para selecionar um método de entrega



