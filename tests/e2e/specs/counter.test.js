// https://docs.cypress.io/api/introduction/api.html

describe("Counter", () => {
  it("Should have title", () => {
    cy.visit("");
    cy.contains("h1", "Spočítám ti průměrnou výši půjček pro daný rating");
  });
  it("Should have list of ratings in selector", () => {
    cy.get("input").click();
    cy.contains("AAAA");
  });
  it("Should start load result", () => {
    cy.get("input").click();
    cy.contains("AAAA").click();
    cy.contains("NAČÍTÁNÍ");
    cy.contains("Průměrně se půjčuje:");
  });
  it("Should change result", () => {
    cy.get("input").click();
    cy.contains("B").click();
    cy.contains("NAČÍTÁNÍ");
    cy.contains("Průměrně se půjčuje:");
  });
  it("Should clean selector", () => {
    cy.get("button").click();
    cy.contains("Zvol si rating");
  });
  it("Should say nonexisting rating", () => {
    cy.get("input")
      .click()
      .type("CC");
    cy.contains("Takový rating neexistuje :'(");
  });
});
