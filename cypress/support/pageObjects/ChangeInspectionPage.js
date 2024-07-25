class ChangeInspectionPage {

    getVehicleVin()
    {
        return cy.get('#id_vehicle_vin')
    }

    getVehicleMake()
    {
        return cy.get('#id_vehicle_make')
    }

    getVehicleModel()
    {
        return cy.get('#id_vehicle_model')
    }

    getVehicleYear()
    {
        return cy.get('#id_vehicle_year')
    }

    getVehicleColor()
    {
        return cy.get('#id_vehicle_color')
    }

    getVehicleEngine()
    {
        return cy.get('#id_engine')
    }

    getBodyType()
    {
        return cy.get('#id_body_type')
    }

    getTransmission()
    {
        return cy.get('#id_transmission')
    }

    getMessageForInspector()
    {
        return cy.get('#id_message_for_inspector')
    }

    getSaveButton()
    {
        return cy.get('.default')
    }

}

export default ChangeInspectionPage