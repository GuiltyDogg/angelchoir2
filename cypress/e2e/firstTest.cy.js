describe("Smoke Test", () => {
  it("should allow the user to enter additional user info and find events", () => {
    cy.viewport("iphone-x");

    cy.visit("http://localhost:3000");

    cy.get("input").eq(1).type("testuser");

    cy.get("textarea").type("This is my additional user info");

    cy.getDataTest("location-checkbox").click();

    cy.get("button").contains("Find Event").click();

    cy.url().should("include", "/Events");
  });
});
