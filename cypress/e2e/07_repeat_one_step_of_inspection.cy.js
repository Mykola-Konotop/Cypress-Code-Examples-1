/// <reference types="Cypress" />

import InspectionFlowPage from '../support/pageObjects/InspectionFlowPage'
const inspectionFlowPage = new InspectionFlowPage();

describe("Repeat one step of inspection", () => {
  it("Find an email with specific subject and link in email body and repeat one step of inspection (SI-TC-9, SI-TC-12)", function () {
    cy.task("gmail:get-messages", {
      options: {
        from: "ok@selfinspection.com",
        subject: "Additional Information Required for Your Lyft Vehicle Inspection",
        include_body: true,
        //before: new Date(2024, 4, 1, 12, 0, 0),
        //after: new Date(2024, 3, 1),
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
          "https://lyft.carselfinspection.com/vin/"
        ) >= 0,
        "Found inspection link!"
      );
        
      const link = body.split("href=https://lyft.carselfinspection.com/vin");
      var invitedLink = link[0].match(/\bhttps?:\/\/\S+/);
      invitedLink = invitedLink[0].slice(0, -49).replace('"','');
      cy.visit(invitedLink).viewport('samsung-s10')

      //start page
      inspectionFlowPage.getTitle().should('include.text', 'Self-Inspection')
      inspectionFlowPage.getBigButton().click()

      //The step needs to be redone
      inspectionFlowPage.getStepHintTitle().should('have.text', 'The step needs to be redone')
      cy.get('.description').should('have.text', 'Blurred image, please repeat!')
      inspectionFlowPage.getNextHint().click()
      cy.wait(2000)
      inspectionFlowPage.getTakePhotoButton().click()
      inspectionFlowPage.getUndoButton().click()
      inspectionFlowPage.getTakePhotoButton().click()
      inspectionFlowPage.getNextButton().click()
      cy.wait(2000)
      
      inspectionFlowPage.getCanvasSignature().then($canvas => {
        
        //Get dimension of the canvas
   
        const canvasWidth = $canvas.width();
        const canvasHeight = $canvas.height();
   
        //Divide in half since cursor will be at center of canvas
   
        const canvasCenterX = canvasWidth / 2;
        const canvasCenterY = canvasHeight / 2;

        //Wrap the canvas with the Cypress API, scroll it into view, and click in the location!
   
        cy.wrap($canvas)
          .scrollIntoView()
          .click(canvasCenterX, canvasCenterY)
      });
   
      inspectionFlowPage.getNextButton().click()
      cy.wait(2000)

      inspectionFlowPage.getText().should('include.text', 'Your self-inspection has been submitted.')
    })
  })
})