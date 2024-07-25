class InspectionManagementPage {

    getRequestId()
    {
        return cy.get(':nth-child(1) > .field-request_id > a')
    }

    getSuccessMessage()
    {
        return cy.get('.success')
    }

    getStatusInspectionProgress()
    {
        return cy.get(':nth-child(1) > .field-status_inspection_progress')
    }

    getStatusInspection()
    {
        return cy.get(':nth-child(1) > .field-status_inspection')
    }

    getReviewInspectionButton()
    {
        return cy.get(':nth-child(1) > .field-review_inspection > .button_inspection')
    }

}

export default InspectionManagementPage