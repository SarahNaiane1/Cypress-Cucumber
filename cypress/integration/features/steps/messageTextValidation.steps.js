import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import BugerEatsPage from "../../../pages/bugerEats.page";
import validationErrorPage from "../../../pages//messageTextValidation.page";
import bugerEatsPage from "../../../pages/bugerEats.page";

Given("acesso o site Buger Eats", () => {
  BugerEatsPage.VisitPage();
});

And("acesso o botão  de Cadastre-se para fazer entregas", () => {
  BugerEatsPage.clickButton();
});

And("acesso o formulário", () => {
  BugerEatsPage.acessForm();
});

When("clico no botão de  cadastra-se para fazer entrega", () => {
  BugerEatsPage.ciclkButtomRegister();
});

Then("aparece mensagems de erros dos campos que não foram preenchidos", () => {
  validationErrorPage.alertError();
});

//SCENARIO  SEM PREENCHIMENTO DE CPF

And("preencho os campos  de dados sem preencher CPF", () => {
  validationErrorPage.unfilledIndividualTaxpayerRegistration();
});

And("preencho os campos de endereço", () => {
  BugerEatsPage.FillAdress();
});

And("preencho os campos de metodo de entrega", () => {
  BugerEatsPage.FillDeliveryMethod();
  BugerEatsPage.uploadImage();
});

Then("aparece  mensagem de erro do compo do cpf", () => {
  validationErrorPage.alertErrorIndividualTaxpayerRegistration();
});

//SCENARIO SEM PREENCHIMENTO DE NOME

And("preencho os campos  de dados sem preencher o nome", () => {
  validationErrorPage.unfilledName();
});

Then("aparece  mensagem de erro do compo do nome", () => {
  validationErrorPage.alertMensageName();
});

//SCENARIO SEM PREENCHIMENTO DE E-MAIL

And("preencho os campos  de dados", () => {
  BugerEatsPage.fillData();
});

And("preencho os campos  de dados sem preencher o email", () => {
  validationErrorPage.unfilledEmail();
});

Then("aparece  mensagem de erro do compo do email", () => {
  validationErrorPage.alertMensageEmail();
});

//SCENARIO  SEM PREENCHIMENTO DE CEP

And("preencho os campos de endereço sem preencher o cep", () => {
  validationErrorPage.unfilledZipCode();
});

Then("aparece  mensagem de erro do compo do cep", () => {
  validationErrorPage.alertErrorZipCode();
});

And("preencho os campos de endereço sem o número do endereço", () => {
  validationErrorPage.unfilledNumber();
});

//SCENARIO  SEM PREENCHIMENTO DO NUMERO DE ENDEREÇO

And("faço upload da CNH", () => {
  BugerEatsPage.uploadImage();
});
Then("aparece  mensagem de erro do compo número do endereço", () => {
  validationErrorPage.alertErrorNumber();
});

//SCENARIO SEM ESCOLHER MÉTODO DE ENTREGA

Then("aparece  mensagem de erro  para selecionar método de entrega", () => {
  validationErrorPage.alertErrorSelectMethod();
});

And("faço upload da CNH", () => {
  BugerEatsPage.uploadImage();
});
//SCENARIO  SEM FAZER O UPLOAD DA SNH

And("clico no metodo de entrega", () => {
  validationErrorPage.unfilledUploadDriverLicense();
});

Then("aparece  mensagem  para poder fazer upload da cnh", () => {
  validationErrorPage.alertErrorUploadDriverLicense();
});

//SCENARIO SLECIONAR TRÊS TIPOS DE MÉTODOS DE ENTREGA

But('clico em tres tipos de metodo de entrega', () => {
  validationErrorPage.clickOnThreeTypes();
});

Then('aparece  mensagem de erro  para selecionar um método de entrega', () => {
    validationErrorPage.alertErrorClickOnTypes();
  }
);

//SCENARIO SLECIONAR DOIS TIPOS DE MÉTODOS DE ENTREGA
But('clico em dois tipos de metodo de entrega', () => {
  validationErrorPage.clickOnTwoTypes();
});

Then('aparece  mensagem de erro  para selecionar um método de entrega', () => {
    validationErrorPage.alertErrorClickOnTypes();
  }
);