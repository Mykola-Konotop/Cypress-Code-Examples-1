/// <reference types="cypress" />

import HomePage from '../support/pageObjects/HomePage'
import InspectionManagementPage from '../support/pageObjects/InspectionManagementPage'
import ChangeInspectionPage from '../support/pageObjects/ChangeInspectionPage'
const homePage = new HomePage();
const inspectionManagementPage = new InspectionManagementPage();
const changeInspectionPage = new ChangeInspectionPage();

describe('Change inspection test case', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
    })
    
    it('Change existing inspection after payment (SI-TC-5, SI-TC-46)', () => {
      cy.fixture('example').then(function(data) {
        this.data = data
        homePage.getChangeLink().click()
        inspectionManagementPage.getRequestId().click()
        changeInspectionPage.getVehicleVin().type(this.data.vehicleVin)
        changeInspectionPage.getVehicleMake().type(this.data.vehicleMake)
        changeInspectionPage.getVehicleModel().type(this.data.vehicleModel)
        changeInspectionPage.getVehicleYear().type(this.data.vehicleYear)
        changeInspectionPage.getVehicleColor().type(this.data.vehicleColor)
        changeInspectionPage.getVehicleEngine().type(this.data.vehicleEngine)
        changeInspectionPage.getBodyType().type(this.data.bodyType)
        changeInspectionPage.getTransmission().type(this.data.transmission)
        changeInspectionPage.getMessageForInspector().type(this.data.body)
        changeInspectionPage.getSaveButton().should('have.value', 'Save').click()
        inspectionManagementPage.getSuccessMessage().should('include.text', 'was changed successfully')
        })
    })
})