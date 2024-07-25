/// <reference types="cypress" />

import HomePage from '../support/pageObjects/HomePage'
import InspectionManagementPage from '../support/pageObjects/InspectionManagementPage'
import ReviewInspectionPage from '../support/pageObjects/ReviewInspectionPage'
const homePage = new HomePage();
const inspectionManagementPage = new InspectionManagementPage();
const reviewInspectionPage = new ReviewInspectionPage();

describe('Repeat review inspection test case', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })
    
    it('Repeat review inspection (SI-TC-42)', () => {
        homePage.getChangeLink().click()
        inspectionManagementPage.getStatusInspectionProgress().should('have.text', 'In Review')
        inspectionManagementPage.getReviewInspectionButton()
          .should('include.text', 'Review').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'check_pages_all')
        
        //Repeat review one step of inspection
        cy.get('[data-step="[4, 5, 6, 8]"]').click()
        cy.get('[data-filter="13"] > .text').should('have.text', 'VIN Number')
        cy.get('[data-filter="13"] > .action').click()
        reviewInspectionPage.getSuccessModalTitle().should('have.text', 'Success!')
        reviewInspectionPage.getOkButton().click()
        reviewInspectionPage.getEndReviewButton().should('include.text', 'End Review').click()
        inspectionManagementPage.getStatusInspection().should('have.text', 'Completed')
        inspectionManagementPage.getStatusInspectionProgress().should('have.text', 'Completed')
    })
})