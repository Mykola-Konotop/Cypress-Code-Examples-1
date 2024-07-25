/// <reference types="cypress" />

import HomePage from '../support/pageObjects/HomePage'
import InspectionManagementPage from '../support/pageObjects/InspectionManagementPage'
import DeletePage from '../support/pageObjects/DeletePage'
const homePage = new HomePage();
const inspectionManagementPage = new InspectionManagementPage();
const deletePage = new DeletePage();

describe('Delete inspection test cases', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })
    
    it('Delete the associated payment (SI-TC-60)', () => {
        cy.fixture('example').then(function(data) {
            this.data = data
        homePage.getChangeLink().click()
        inspectionManagementPage.getRequestId().click()
        cy.get('#change_id_order_fk').then(($del) => {
            var link = $del.attr('href')
            link = link.slice(7, -22)
            cy.visit(link)
            })
        cy.get('#id_name').should('have.value', this.data.fullName)
        deletePage.getDeleteLink().click()
        deletePage.getSubmitButton().click()
        inspectionManagementPage.getSuccessMessage().should('include.text', 'was deleted successfully')
        })
    })

    it('Delete an existing inspection (SI-TC-48)', () => {
        cy.fixture('example').then(function(data) {
            this.data = data
        homePage.getChangeLink().click()
        inspectionManagementPage.getRequestId().click()
        deletePage.getDeleteLink().click()
        homePage.getTitle().should('have.text', 'Are you sure?')
        cy.contains(this.data.vehicleVin)
        deletePage.getSubmitButton().should('include.value', 'Yes').click()
        inspectionManagementPage.getSuccessMessage().should('include.text', 'was deleted successfully')
        })
    })
})