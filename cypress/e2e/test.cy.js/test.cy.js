describe("My First Test", () => {
  it("Sign Up", () => {
    cy.visit("https://demo.capitalise.com/app/ui/signup/business");
  });
});

// Let's create our first e2e test for the Sign Up flow!

// - Create a business user by filling in all the fields of the Sign Up form. 
// - Validate that you are landing on the 'Today' page at the end of the test.

// You are always welcome to discuss the flow and ask questions!