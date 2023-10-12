describe("Checkbox test", () => {
  it("checks the checkbox", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("[data-testid='checkbox'] input[type='checkbox']")
      .check()
      .should("be.checked");
  });
});
