class ReviewInspectionPage {

    getBurgerButton()
    {
        return cy.get('.menu-toggle')
    }

    getNextButton()
    {
        return cy.get('.next-button')
    }

    getPrevButton()
    {
        return cy.get('.prev-button')
    }

    getEndReviewButton()
    {
        return cy.get('.end_inspection')
    }

    getSuccessModalTitle()
    {
        return cy.get('.swal-title')
    }

    getOkButton()
    {
        return cy.get('.swal-button')
    }

}

export default ReviewInspectionPage