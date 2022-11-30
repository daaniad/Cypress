/// <reference types="cypress" />

describe("Alerts & Popups", function () {
  it("Alerts", function () {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(1) > button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am a JS Alert");
    });
  });

  it("Confirm", function () {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(2) > button").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am a JS Confirm");
    });
  });

  it("New tab", function () {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example a").invoke("removeAttr", "target").click(); //en lugar de abrir una pestaña, 
    //sustituye la pestaña actual por la que tendría que haberse abierto en blanco, 
    //ya que cypress solo puede trabajar en una pestaña a la vez

    cy.url().should("include", "new"); //muestra la dirección actual
    cy.go("back"); //permite ir adelante o atras en el ordenador
    cy.url().should("not.include", "new");
  });
});
