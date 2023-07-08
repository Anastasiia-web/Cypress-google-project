/// < reference types="Cypress" />

describe("google translator test", () => {
  it("translates to spanish", () => {
    // cy.visit("http://localhost:5173/");
    cy.visit("https://www.google.es/");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get("#APjFqb").type("Hi").type("{enter}");
    cy.get(".FPdoLc > center > .gNO89b").click();
    cy.get("#tw-target-text > .Y2IQFc").should("contain", "Hola");
  });
});
