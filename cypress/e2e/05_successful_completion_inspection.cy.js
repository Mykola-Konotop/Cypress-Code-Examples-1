/// <reference types="cypress" />

describe('Successful completion inspection', () => {
  it("Find an email with specific subject and specific text in email body (SI-TC-16)", () => {
    cy.task("gmail:get-messages", {
      options: {
        from: "ok@selfinspection.com",
        subject: "Lyft Vehicle Inspection - submitted for review",
        include_body: true,
        //before: new Date(2024, 3, 2, 12, 0, 0),
        //after: new Date(2024, 2, 1),
      },
    }).then((emails) => {
      assert.isAtLeast(
        emails.length,
        1,
        "Expected to find at least one email, but none were found!"
      );
      const body = emails[0].body.html;
      assert.isTrue(
        body.indexOf(
          "Thank you for completing a Lyft vehicle self inspection"
        ) >= 0,
        "Found specific text"
      );
    })
  })
})