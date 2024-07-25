/// <reference types="cypress" />

import HomePage from '../support/pageObjects/HomePage'
import InspectionManagementPage from '../support/pageObjects/InspectionManagementPage'
const homePage = new HomePage();
const inspectionManagementPage = new InspectionManagementPage();

describe('Pay inspection and check invitation status test cases', () => {
    it('Pay new inspection (SI-TC-55)', () => {
        Cypress.on('uncaught:exception', (err) => {
          expect(err.message).to.include('of undefined')
            
            return false;
          });
        cy.visit('https://www.selfinspection.com/lyft-inspection')
        cy.get('[id^=tm-button-] > .tm-button > .button-text')
          .eq(0).should('include.text', 'Get Started Today')
        cy.get('[id^=tm-button-] > a').eq(0)
          .invoke('removeAttr', 'target').click()
        cy.origin('https://buy.stripe.com', () => {
          Cypress.on('uncaught:exception', (e) => {
            if (e.message.includes('Illegal invocation'))

            return false
          })
            cy.visit('/test_5kA8zD2GBalYdLa002')
            cy.url().should('include', 'test_5kA8zD2GBalYdLa002')
            cy.fixture('example').then(function(data) {
                this.data = data
            cy.get('#email').type(Cypress.env('email'), { log: false })
            cy.wait(2000)
            cy.get('.LinkVerificationHeader > .LinkActionButton').click()
            cy.get('.PhoneNumberCountryCodeSelect-select')
              .select('United States (+1)').should('have.value', 'US')
            cy.get('#phoneNumber').type(this.data.phone)
            cy.get('#cardNumber').type(this.data.cardNumber)
            cy.get('#cardExpiry').type(this.data.cardExpiry)
            cy.get('#cardCvc').type(this.data.cvc)
            cy.get('#billingName').type(this.data.fullName)
            cy.get('#billingCountry').select('United States').should('have.value', 'US')
            cy.get('#billingAddressLine1').type(this.data.address)
            cy.get('#billingLocality').type(this.data.city)
            cy.get('#billingPostalCode').type(this.data.zip)
            cy.get(".SubmitButton").should(($div) => {
                expect($div.text()).to.include("Pay")
                })
                cy.wait(2000)
                cy.get(".SubmitButton").click()
                cy.get(".SubmitButton").should(($div) => {
                    expect($div.text()).to.include("Processing")
                })
                cy.wait(10000)
                cy.url().should('include', 'buy.stripe.com/c/pay/')
                cy.get('.PaymentSuccess-customMessage > .Text')
                  .should('include.text', 'Thank you for your payment!')
            })
        })
    })
    
    it('Check invitation status (SI-TC-1, SI-TC-56)', () => {
        cy.login().then(function() {
            cy.visit('/')
            homePage.getChangeLink().click()
            inspectionManagementPage.getStatusInspectionProgress()
              .should('include.text', 'Invitation Sent   Ago')
        })
    })
})