import { expect } from "chai";
const modalText =
  "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";

var deliver = {
  name: "Sarah Naiane",
  individualTaxpayerRegistration: "19027889074",
  individualTaxpayerRegistrationDisable: "999999999",
  email: "teste@teste.com",
  whatsapp: "1199999999",

  address: {
    zipCode: "06220082",
    street: "Rua Quênia",
    number: "3G",
    complement: "casa fundo",
    district: "Rochdale",
    cityState: "Osasco/SP",

    cnh: "cnh-digital.jpg",
  },
};

class HomePage {
  VisitPage() {
    cy.viewport(1440, 900);
    cy.visit("/");
    cy.get("#page-home div h1").should(
      "have.text",
      "Seja um parceiro entregador pela Buger Eats"
    );
  }

  clickButton() {
    cy.get('a[href="/deliver"]').wait(600).click();
  }

  acessForm() {
    cy.get("#page-deliver form h1")
      .should("have.text", "Cadastre-se para  fazer entregas")
      .should("be.visible");
  }

  fillData() {
    cy.get('input[name="name"]').type(deliver.name);

    cy.get('input[name="cpf"]').type(deliver.individualTaxpayerRegistration);

    cy.get('input[name="email"]').type(deliver.email);

    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
  }

  FillAdress() {
    cy.get('input[name="postalcode"]').type(deliver.address.zipCode);

    cy.get('input[value="Buscar CEP"]').click().should("be.visible");

    cy.get('input[name="address-number"]').type(deliver.address.number);

    cy.get('input[name="address-details"]').type(deliver.address.complement);

    //validando os campos preenchidos
    cy.get('input[name="address"]').should(
      "have.value",
      deliver.address.street
    );
    cy.get('input[name="district"]').should(
      "have.value",
      deliver.address.district
    );
    cy.get('input[name="city-uf"]').should(
      "have.value",
      deliver.address.cityState
    );
  }

  FillDeliveryMethod() {
    cy.get('img[alt="Moto"]').click();
  }
  /* 
    $: procura o elemento que terminar 

    ^: procura o elemento que começa
   */

  uploadImage() {
    cy.get('input[accept^="image"]')
      .selectFile("cypress/fixtures/cnh-digital.jpg", { force: true })
      .then((input) => {
        expect(input[0].files[0].name).to.equal("cnh-digital.jpg");
      });
  }

  ciclkButtomRegister() {
    cy.get('form button[type="submit"]').click();
  }
  
  modal() {
    cy.get(".swal2-container .swal2-html-container").should(
      "have.text",
      modalText
    );
  }

  individualTaxpayerRegistrationDisable() {
    cy.get('input[name="name"]').type(deliver.name);

    cy.get('input[name="cpf"]').type(
      deliver.individualTaxpayerRegistrationDisable
    );

    cy.get('input[name="email"]').type(deliver.email);

    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
  }

  alertError() {
    cy.get(".alert-error").should("have.text", "Oops! CPF inválido");
  }
}

export default new HomePage();
