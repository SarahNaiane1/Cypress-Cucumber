import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import BugerEatsPage from "../../../pages/BugerEats.page";

Given(/^acesso o site Buger Eats$/, () => {
	BugerEatsPage.VisitPage();
});

And(/^acesso o botão  de Cadastre-se para fazer entregas$/, () => {
	BugerEatsPage.clickButton();
});

And(/^acesso o formulário$/, () => {
	BugerEatsPage.acessForm();
});

And(/^preencho os campos  de dados$/, () => {	
	BugerEatsPage.fillData();
});

And(/^preencho os campos de endereço$/, () => {
	BugerEatsPage.FillAdress();
});

And(/^preencho os campos de metodo de entrega$/, () => {
	BugerEatsPage.FillDeliveryMethod();
	BugerEatsPage.uploadImage();

});

When(/^clico no botão de  cadastra-se para fazer entrega$/, () => {
	BugerEatsPage.ciclkButtomRegister()
});


Then(/^aparece modal informando que foi enviado dados$/, () => {
	BugerEatsPage.modal()
});



Then(/^preencho os campos  de dados com CPF inválido$/, () => {
	BugerEatsPage.individualTaxpayerRegistrationDisable();
	BugerEatsPage.FillAdress();
	BugerEatsPage.uploadImage();
	BugerEatsPage.ciclkButtomRegister();
});


Then(/^aparece mensagem de erro do CPF inválido$/, () => {
	BugerEatsPage.alertError();	
});


