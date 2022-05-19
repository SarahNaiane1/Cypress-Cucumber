var deliver = {
  name: "Sarah Naiane",
  individualTaxpayerRegistration: "19027889074",
  individualTaxpayerRegistrationDisable: "999999999",
  email: "teste@teste200.com",
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

class ValidationError {
  alertError() {
    cy.get(".alert-error");
  }

  unfilledIndividualTaxpayerRegistration() {
    cy.get('input[name="name"]').type(deliver.name);

    cy.get('input[name="email"]').type(deliver.email);

    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
  }

  alertErrorIndividualTaxpayerRegistration() {
    cy.get(".alert-error").should("have.text", "É necessário informar o CPF");
  }

  unfilledName() {
    cy.get('input[name="cpf"]').type(deliver.individualTaxpayerRegistration);

    cy.get('input[name="email"]').type(deliver.email);

    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
  }

  alertMensageName() {
    cy.get(".alert-error").should("have.text", "É necessário informar o nome");
  }
  alertMensageEmail() {
    cy.get(".alert-error").should("have.text", "É necessário informar o email");
  }

  unfilledEmail() {
    cy.get('input[name="cpf"]').type(deliver.individualTaxpayerRegistration);

    cy.get('input[name="name"]').type(deliver.name);

    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
  }

  unfilledZipCode() {
    cy.get('input[value="Buscar CEP"]').click().should("be.visible");

    cy.get('input[name="address-number"]').type(deliver.address.number);

    cy.get('input[name="address-details"]').type(deliver.address.complement);
  }

  alertErrorZipCode() {
    cy.get(".alert-error").should("have.text", "É necessário informar o CEP");
  }

  unfilledNumber() {
    cy.get('input[name="postalcode"]').type(deliver.address.zipCode);

    cy.get('input[value="Buscar CEP"]').click().should("be.visible");

    cy.get('input[name="address-details"]').type(deliver.address.complement);
  }

  alertErrorNumber() {
    cy.get(".alert-error").should(
      "have.text", "É necessário informar o número do endereço"
    );
  }

  alertErrorSelectMethod() {
    cy.get(".alert-error").should("have.text", "Selecione o método de entrega");
  }

  alertErrorUploadDriverLicense() {
    cy.get("#page-deliver > form > span").should("have.text", "Adicione uma foto da sua CNH");
  }
}

export default new ValidationError();
