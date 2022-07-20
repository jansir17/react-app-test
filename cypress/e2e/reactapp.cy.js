/// <reference types= "cypress" />

describe("React Testing", () => {
  it("Sign UP", () => {
    cy.visit("https://react-redux.realworld.io/");
    // cy.viewport("mackbook-15");
    cy.get("a").contains("Sign up").click();
    cy.get('input[placeholder="Username"]').type(USERID());
    cy.get('input[placeholder="Email"]').type(USERID() + "@gmail.com");
    cy.get('input[placeholder="Password"]').type(USERID() + "776625");
    cy.get("button").contains("Sign in").click();
    cy.get("a").contains("Home").should("have.text", "Home");
    cy.wait(3000);
  });
  //fucntion to create random username/gmail/password
  function USERID() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  it("test2", () => {
    cy.get(".ion-compose").click();
    cy.get('input[placeholder="Article Title"]').type("TestDemo#1234");
    cy.get("#main> div fieldset:nth-child(2)>input").type(USERID());
    cy.get("#main> div fieldset:nth-child(3)>textarea").type("daasdadad");
    cy.get("button").contains("Publish Article").click();
    cy.get(".container h1").should("have.text", "TestDemo#1234");
  });
});
