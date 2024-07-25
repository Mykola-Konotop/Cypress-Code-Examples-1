/// <reference types="Cypress" />

import InspectionFlowPage from '../support/pageObjects/InspectionFlowPage'
const inspectionFlowPage = new InspectionFlowPage();

describe("Start inspection flow", () => {
  it("Find an email with specific subject and link in email body and start inspection (SI-TC-57, SI-TC-9, SI-TC-12)",
    function () {
      cy.task("gmail:get-messages", {
        options: {
          from: "ok@selfinspection.com",
          subject: "Lyft Vehicle Inspection",
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
      invitedLink = invitedLink[0].slice(0, -62).replace('"','');
      cy.visit(invitedLink).viewport('samsung-s10')
      
      //start page
      cy.fixture('example').then(function(data) {
        this.data = data
      inspectionFlowPage.getTitle().should('include.text', 'Self-Inspection')
      inspectionFlowPage.getBigButton().click()
      cy.wait(2000)

      //from 1 to 5 page
      for (let i = 0; i < 5; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)
        inspectionFlowPage.getTakePhotoButton().click()
        inspectionFlowPage.getNextButton().click()
        cy.wait(2000)
      }

      //6 page
      inspectionFlowPage.getStepHintTitle().should('include.text', 'Start the engine')
      inspectionFlowPage.getNextHint().click()
      cy.wait(2000)

      inspectionFlowPage.getTakePhotoButton().click()
      cy.get('.miles_input_js').type(this.data.miles)
      cy.get('.submit_miles').click()
      inspectionFlowPage.getNextButton().click()
      cy.wait(2000)
      
      //7 page
      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)

      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getNextButton().click()
        cy.wait(2000)

      //8 page
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Turn on hazard lights')
      inspectionFlowPage.getNextHint().click()
      cy.wait(1000)
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Wipers on')
      inspectionFlowPage.getNextHint().click()
      cy.wait(1000)
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Headlights on')
      inspectionFlowPage.getNextHint().click()
      cy.wait(2000)
      
      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)

      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getNextButton().click()
        cy.wait(2000)
      
      //from 9 to 12 page
      inspectionFlowPage.getStepHintTitle().should('include.text', 'Driver side sun visor')
      inspectionFlowPage.getNextHint().click()
      cy.wait(2000)
        
      for (let i = 0; i < 4; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)
        inspectionFlowPage.getTakePhotoButton().click()
        inspectionFlowPage.getNextButton().click()
        cy.wait(2000)
      }

      //13 page
      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)

      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getNextButton().click()
        cy.wait(2000)

      //from 14 to 17 page
      for (let i = 0; i < 4; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)
        inspectionFlowPage.getTakePhotoButton().click()
        inspectionFlowPage.getNextButton().click()
        cy.wait(2000)
      }

      //from 18 to 21 page
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Measure tire tread')
      inspectionFlowPage.getNextHint().click()
      cy.wait(1000)
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Locate the outer tire tread')
      inspectionFlowPage.getNextHint().click()
      cy.wait(1000)
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Insert a coin / penny')
      inspectionFlowPage.getNextHint().click()
      cy.wait(2000)

      for (let i = 0; i < 4; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)
        inspectionFlowPage.getTakePhotoButton().click()
        inspectionFlowPage.getNextButton().click()
        cy.wait(2000)
      }

      //22 page
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Place the phone on the ground')
      inspectionFlowPage.getNextHint().click()
      cy.wait(1000)
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Turn on the left signal')
      inspectionFlowPage.getNextHint().click()
      cy.wait(1000)
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Turn on the right signal')
      inspectionFlowPage.getNextHint().click()
      cy.wait(1000)
      inspectionFlowPage.getSlickSlideTitle().should('include.text', 'Driver in reverse')
      inspectionFlowPage.getNextHint().click()
      cy.wait(2000)

      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)

      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getNextButton().click()
        cy.wait(2000)

      //23 page
      inspectionFlowPage.getStepHintTitle().should('include.text', '360 Video')
      inspectionFlowPage.getNextHint().click()
      cy.wait(2000)

      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
        inspectionFlowPage.getUndoButton().click()
        cy.wait(2000)

      for (let i = 0; i < 2; i++) {
        inspectionFlowPage.getTakePhotoButton().click()
        cy.wait(5000)
      }
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
})