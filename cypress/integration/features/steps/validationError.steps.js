import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import BugerEatsPage from "../../../pages/BugerEats.page";
import validationErrorPage from "../../../pages/validationError.page";

Given('acesso o site Buger Eats', () => {
	BugerEatsPage.VisitPage();
});

And('acesso o botão  de Cadastre-se para fazer entregas', () => {
	BugerEatsPage.clickButton();
});

And('acesso o formulário', () => {
	BugerEatsPage.acessForm();
});


When('clico no botão de  cadastra-se para fazer entrega', () => {
    BugerEatsPage.ciclkButtomRegister()

});

Then('aparece mensagems de erros dos campos que não foram preenchidos', () => {
    validationErrorPage.alertError()

});
//CENÁRIO 2: SEM PREENCHIMENTO DE CPF

And('preencho os campos  de dados sem preencher CPF', () => {
    validationErrorPage.unfilledIndividualTaxpayerRegistration();    
});

And('preencho os campos de endereço', () => {
	BugerEatsPage.FillAdress();
});

And('preencho os campos de metodo de entrega', () => {
	BugerEatsPage.FillDeliveryMethod();
	BugerEatsPage.uploadImage();

});

Then('aparece  mensagem de erro do compo do cpf', () => {
    validationErrorPage.alertErrorIndividualTaxpayerRegistration()
});


//CENÁRIO 3: SEM PREENCHIMENTO DE NOME
And('preencho os campos  de dados sem preencher o nome', () => {
	validationErrorPage.unfilledName()
});

Then('aparece  mensagem de erro do compo do nome', () => {
	validationErrorPage.alertMensageName()
});


//CENÁRIO 4: SEM PREENCHIMENTO DE E-MAIL

And('preencho os campos  de dados', () => {	
	BugerEatsPage.fillData();
});

And ('preencho os campos  de dados sem preencher o email', () => {
  validationErrorPage.unfilledEmail();
});

Then('aparece  mensagem de erro do compo do email', () => {
	validationErrorPage.alertMensageEmail()
});

//CENÁRIO 5: SEM PREENCHIMENTO DE CEP


And('preencho os campos de endereço sem preencher o cep', () => {
validationErrorPage.unfilledZipCode();
});


Then('aparece  mensagem de erro do compo do cep', () => {
    validationErrorPage.alertErrorZipCode();
});


And('preencho os campos de endereço sem o número do endereço', () => {
    validationErrorPage.unfilledNumber();
});

//CENÁRIO 6: SEM PREENCHIMENTO DO NUMERO DE ENDEREÇO
And('faço upload da CNH', () => {
     BugerEatsPage.uploadImage();
});
Then('aparece  mensagem de erro do compo número do endereço', () => {
	validationErrorPage.alertErrorNumber();
});

//CENÁRIO 6: SEM ESCOLHER MÉTODO DE ENTREGA
Then('aparece  mensagem de erro  para selecionar método de entrega', () => {
	validationErrorPage.alertErrorSelectMethod();
});


Then('aparece  mensagem  para poder fazer upload da cnh', () => {
    validationErrorPage.alertErrorUploadDriverLicense();
});

