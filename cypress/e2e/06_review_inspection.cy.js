/// <reference types="cypress" />

import HomePage from '../support/pageObjects/HomePage'
import InspectionManagementPage from '../support/pageObjects/InspectionManagementPage'
import ReviewInspectionPage from '../support/pageObjects/ReviewInspectionPage'
const homePage = new HomePage();
const inspectionManagementPage = new InspectionManagementPage();
const reviewInspectionPage = new ReviewInspectionPage();

describe('Review inspection test case', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })
    
    it('Review inspection (SI-TC-17, SI-TC-19, SI-TC-33, SI-TC-34, SI-TC-35, SI-TC-51)', () => {
        homePage.getChangeLink().click()
        inspectionManagementPage.getStatusInspectionProgress().should('have.text', 'In Review')
        inspectionManagementPage.getReviewInspectionButton()
          .should('include.text', 'Review').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'check_pages_all')
        
        //All page
        cy.get('[data-filter="3"] > .settings-menu > .dropdown-menu > [data-type="mark_as_damage"]')
          .should('include.text', 'Mark as damage').click({force: true})
        cy.get('[data-filter="4"] > .settings-menu > .dropdown-menu > [data-type="hidden_report"]')
          .should('include.text', 'Hide in report').click({force: true})
        cy.get('[data-filter="5"] > .settings-menu > .dropdown-menu > [data-type="callback"]')
          .should('include.text', 'Mark as failed').click({force: true})
        cy.get('[data-filter="5"] > .step_info > .hidden > .value_info').type('Blurred image, please repeat!')
        cy.get('[data-filter="5"] > .step_info > .hidden > .save_comment')
          .should('have.text', 'Save comment').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().should('have.text', 'OK').click()
        reviewInspectionPage.getBurgerButton().click()
        cy.get('[data-step="[23]"] > .text').should('have.text', 'Rear Lights')
        cy.get('[data-step="[9]"] > .text').should('have.text', 'Windshield & Wipers')
        cy.get('[data-step="[2]"] > .text').should('have.text', '360 Video')
        cy.get('[data-step="[4, 5, 6, 8]"] > .text').should('have.text', 'Verification')
        cy.get('[data-step="[10, 12, 16]"] > .text').should('have.text', 'Seats')
        cy.get('[data-step="[11, 13, 15]"] > .text').should('have.text', 'Seats Belt')
        cy.get('[data-step="[19, 20, 21, 22]"] > .text').should('have.text', 'Tire Tread')
        cy.get('[data-step="[24]"] > .text').should('have.text', 'Horn sound')
        cy.get('[data-step="[14]"] > .text').should('have.text', 'Exhaust')
        cy.get('[data-step="[3, 7, 10]"] > .text').should('have.text', 'Mirrors')
        cy.get('[data-step="[17, 18]"] > .text').should('have.text', 'Headlights')
        reviewInspectionPage.getBurgerButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Rear Lights page
        cy.get('[data-filter="1"] > .text').should('have.text', 'Foot Brakes')
        cy.get('[data-filter="1"] > .action').click()
        cy.get('[data-filter="2"] > .text').should('have.text', 'Stop Lights')
        cy.get('[data-filter="2"] > .action').click()
        cy.get('[data-filter="3"] > .text').should('have.text', 'Tail Lights')
        cy.get('[data-filter="3"] > .action').click()
        cy.get('[data-filter="4"] > .text').should('have.text', 'Emergency Lights')
        cy.get('[data-filter="4"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Windshield & Wipers page
        cy.get('[data-filter="5"] > .text').should('have.text', 'Windshield')
        cy.get('[data-filter="5"] > .action').click()
        cy.get('[data-filter="6"] > .text').should('have.text', 'Windshield Wipers')
        cy.get('[data-filter="6"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //360 Video
        cy.get('[data-filter="7"] > .text').should('have.text', 'Windshield')
        cy.get('[data-filter="7"] > .action').click()
        cy.get('[data-filter="8"] > .text').should('have.text', 'Rear Window and other glass')
        cy.get('[data-filter="8"] > .action').click()
        cy.get('[data-filter="9"] > .text').should('have.text', 'Turn indicator lights')
        cy.get('[data-filter="9"] > .action').click()
        cy.get('[data-filter="10"] > .text').should('have.text', 'Bumpers')
        cy.get('[data-filter="10"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Verification page
        cy.get('[data-filter="11"] > .text').should('have.text', 'Registration')
        cy.get('[data-filter="11"] > .action').click()
        cy.get('[data-filter="12"] > .text').should('have.text', 'License Plate')
        cy.get('[data-filter="12"] > .action').click()
        cy.get('[data-filter="13"] > .text').should('have.text', 'VIN Number')
        cy.get('[data-filter="14"] > .text').should('have.text', 'Miles')
        cy.get('[data-filter="14"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Seats page
        cy.get('[data-filter="15"] > .text').should('have.text', 'Driver Seat Adjustment')
        cy.get('[data-filter="15"] > .action').click()
        cy.get('[data-filter="16"] > .text').should('have.text', 'Passenger Seat Adjustment')
        cy.get('[data-filter="16"] > .action').click()
        cy.get('[data-filter="17"] > .text').should('have.text', 'Sun visors')
        cy.get('[data-filter="17"] > .action').click()
        cy.get('[data-filter="18"] > .text').should('have.text', 'Foot brake')
        cy.get('[data-filter="18"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Seats Belt page
        cy.get('[data-filter="19"] > .text').should('have.text', 'Driver seat belt')
        cy.get('[data-filter="19"] > .action').click()
        cy.get('[data-filter="20"] > .text').should('have.text', 'Passenger seat belt')
        cy.get('[data-filter="20"] > .action').click()
        cy.get('[data-filter="21"] > .text').should('have.text', 'Rear seat belt')
        cy.get('[data-filter="21"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Tire Tread page
        cy.get('[data-filter="22"] > .text').should('have.text', 'Left front  Tire tread')
        cy.get('[data-filter="22"] > .action').click()
        cy.get('[data-filter="23"] > .text').should('have.text', 'Left Rear  Tire Tread')
        cy.get('[data-filter="23"] > .action').click()
        cy.get('[data-filter="24"] > .text').should('have.text', 'Right  Front  Tire Tread')
        cy.get('[data-filter="24"] > .action').click()
        cy.get('[data-filter="25"] > .text').should('have.text', 'Right  Rear  Tire Tread')
        cy.get('[data-filter="25"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Horn sound page
        cy.get('[data-filter="26"] > .text').should('have.text', 'Horn')
        cy.get('[data-filter="26"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Exhaust page
        cy.get('[data-filter="27"] > .text').should('have.text', 'Exhaust')
        cy.get('[data-filter="27"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getNextButton().click()
        
        //Mirrors page
        cy.get('[data-filter="28"] > .text').should('have.text', 'Exterior and interior rear view mirrors')
        reviewInspectionPage.getNextButton().should('include.text', 'Next').click()
        
        //Headlights page
        cy.get('[data-filter="29"] > .text').should('have.text', 'Headlights')
        cy.get('[data-filter="29"] > .action').click()
        reviewInspectionPage.getPrevButton().should('include.text', 'Prev').click()
        reviewInspectionPage.getEndReviewButton().should('include.text', 'End Review').click()
        
        inspectionManagementPage.getStatusInspection().should('have.text', 'Sent for revision')
        inspectionManagementPage.getStatusInspectionProgress().should('have.text', 'In Progress')
    })
})