import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/homePage.page";



Given(/^acesso o site Buger Eats$/, () => {
	HomePage.VisitPage();
});

When(/^acesso o botão  de Cadastre-se para fazer entregas$/, () => {
	HomePage.clickButton();
	
});

Then(/^acesso o formulário$/, () => {
	return true;
});
