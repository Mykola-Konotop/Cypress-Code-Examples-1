/// <reference types="Cypress" />

describe("Completed inspection flow", () => {
  it("Find an email with specific subject and link in email body and view report (SI-TC-43)", function () {
    cy.task("gmail:get-messages", {
      options: {
        from: "ok@selfinspection.com",
        subject: "Lyft Vehicle Inspection Completed",
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
          "https://lyft.carselfinspection.com/report/"
        ) >= 0,
        "Found inspection link!"
      );
        
      const link = body.split("href=https://lyft.carselfinspection.com/report");
      var invitedLink = link[0].match(/\bhttps?:\/\/\S+/);
      invitedLink = invitedLink[0].slice(0, -52).replace('"','');
      cy.visit(invitedLink).viewport('samsung-s10')
      cy.url().should('include', 'report')

      cy.fixture('example').then(function(data) {
        this.data = data
      cy.get('.center > .text').should('include.text', 'Inspection Report')
      cy.get(':nth-child(1) > .title').should('include.text', this.data.vehicleYear)
        .should('include.text', this.data.vehicleMake).should('include.text', this.data.vehicleModel)
      cy.get(':nth-child(3) > :nth-child(2) > .value').should('include.text', this.data.zip)
        .should('include.text', this.data.city)
      cy.get(':nth-child(1) > :nth-child(3) > .value').should('have.text', this.data.vehicleVin)
      cy.get(':nth-child(1) > :nth-child(4) > .value').should('have.text', this.data.miles)
      cy.get('.info_car > :nth-child(2) > :nth-child(1) > .value').should('have.text', this.data.bodyType)
      cy.get('.info_car > :nth-child(2) > :nth-child(2) > .value').should('include.text', 'N/A')
      cy.get('.pointer_hint').click()
      cy.get('.slide').should('have.attr', 'src').should('include', '.webp')

      cy.get(':nth-child(5) > .media-path > .media-block > .picture_step').should('have.attr', 'src').should('include', '.mp4')
      cy.get(':nth-child(5) > .question-path > :nth-child(1) > .name').should('have.text', 'Foot Brakes')
      cy.get(':nth-child(5) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(5) > .question-path > :nth-child(2) > .name').should('have.text', 'Stop Lights')
      cy.get(':nth-child(5) > .question-path > :nth-child(2) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(5) > .question-path > :nth-child(3) > .name').should('have.text', 'Tail Lights')
      cy.get(':nth-child(5) > .question-path > :nth-child(3) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(6) > .media-path > .media-block > .picture_step').should('have.attr', 'src').should('include', '.mp4')
      cy.get(':nth-child(6) > .question-path > :nth-child(1) > .name').should('have.text', 'Windshield')
      cy.get(':nth-child(6) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(6) > .question-path > :nth-child(2) > .name').should('have.text', 'Windshield Wipers')
      cy.get(':nth-child(6) > .question-path > :nth-child(2) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(7) > .media-path > .media-block > .picture_step').should('have.attr', 'src').should('include', '.mp4')
      cy.get(':nth-child(7) > .question-path > :nth-child(1) > .name').should('have.text', 'Windshield')
      cy.get(':nth-child(7) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(7) > .question-path > :nth-child(2) > .name').should('have.text', 'Rear Window and other glass')
      cy.get(':nth-child(7) > .question-path > :nth-child(2) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(7) > .question-path > :nth-child(3) > .name').should('have.text', 'Turn indicator lights')
      cy.get(':nth-child(7) > .question-path > :nth-child(3) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(7) > .question-path > :nth-child(4) > .name').should('have.text', 'Bumpers')
      cy.get(':nth-child(7) > .question-path > :nth-child(4) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(8) > .media-path > :nth-child(1) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(8) > .media-path > :nth-child(2) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(8) > .media-path > :nth-child(3) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(8) > .media-path > :nth-child(4) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(8) > .question-path > :nth-child(1) > .name').should('have.text', 'Registration')
      cy.get(':nth-child(8) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(8) > .question-path > :nth-child(2) > .name').should('have.text', 'License Plate')
      cy.get(':nth-child(8) > .question-path > :nth-child(2) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(8) > .question-path > :nth-child(3) > .name').should('have.text', 'VIN Number')
      cy.get(':nth-child(8) > .question-path > :nth-child(3) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(8) > .question-path > :nth-child(4) > .name').should('have.text', 'Miles')
      cy.get(':nth-child(8) > .question-path > :nth-child(4) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(9) > .media-path > :nth-child(1) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(9) > .media-path > :nth-child(2) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(9) > .media-path > :nth-child(3) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(9) > .question-path > :nth-child(1) > .name').should('have.text', 'Driver Seat Adjustment')
      cy.get(':nth-child(9) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(9) > .question-path > :nth-child(2) > .name').should('have.text', 'Passenger Seat Adjustment')
      cy.get(':nth-child(9) > .question-path > :nth-child(2) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(9) > .question-path > :nth-child(3) > .name').should('have.text', 'Sun visors')
      cy.get(':nth-child(9) > .question-path > :nth-child(3) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(9) > .question-path > :nth-child(4) > .name').should('have.text', 'Foot brake')
      cy.get(':nth-child(9) > .question-path > :nth-child(4) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(10) > .media-path > :nth-child(1) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(10) > .media-path > :nth-child(2) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(10) > .media-path > :nth-child(3) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(10) > .question-path > :nth-child(1) > .name').should('have.text', 'Driver seat belt')
      cy.get(':nth-child(10) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(10) > .question-path > :nth-child(2) > .name').should('have.text', 'Passenger seat belt')
      cy.get(':nth-child(10) > .question-path > :nth-child(2) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(10) > .question-path > :nth-child(3) > .name').should('have.text', 'Rear seat belt')
      cy.get(':nth-child(10) > .question-path > :nth-child(3) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(11) > .media-path > :nth-child(1) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(11) > .media-path > :nth-child(2) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(11) > .media-path > :nth-child(3) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(11) > .media-path > :nth-child(4) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(11) > .question-path > :nth-child(1) > .name').should('have.text', 'Left front  Tire tread')
      cy.get(':nth-child(11) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(11) > .question-path > :nth-child(2) > .name').should('have.text', 'Left Rear  Tire Tread')
      cy.get(':nth-child(11) > .question-path > :nth-child(2) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(11) > .question-path > :nth-child(3) > .name').should('have.text', 'Right  Front  Tire Tread')
      cy.get(':nth-child(11) > .question-path > :nth-child(3) > .value').should('have.text', 'Pass')
      cy.get(':nth-child(11) > .question-path > :nth-child(4) > .name').should('have.text', 'Right  Rear  Tire Tread')
      cy.get(':nth-child(11) > .question-path > :nth-child(4) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(12) > .media-path > .media-block > .picture_step').should('have.attr', 'src').should('include', '.mp4')
      cy.get(':nth-child(12) > .question-path > .information-row > .name').should('have.text', 'Horn')
      cy.get(':nth-child(12) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(13) > .media-path > .media-block > .picture_step').should('have.attr', 'src').should('include', '.mp4')
      cy.get(':nth-child(13) > .question-path > .information-row > .name').should('have.text', 'Exhaust')
      cy.get(':nth-child(13) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')

      cy.get(':nth-child(14) > .media-path > :nth-child(1) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(14) > .media-path > :nth-child(2) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(14) > .media-path > :nth-child(3) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(14) > .question-path > .information-row > .name')
        .should('have.text', 'Exterior and interior rear view mirrors')
      cy.get(':nth-child(14) > .question-path > :nth-child(1) > .value').should('have.text', 'Fail')

      cy.get(':nth-child(15) > .media-path > :nth-child(1) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(15) > .media-path > :nth-child(2) > a > picture > .picture_step').should('have.attr', 'src').should('include', '.webp')
      cy.get(':nth-child(15) > .question-path > .information-row > .name').should('have.text', 'Headlights')
      cy.get(':nth-child(15) > .question-path > :nth-child(1) > .value').should('have.text', 'Pass')
      })
    })
  })
})