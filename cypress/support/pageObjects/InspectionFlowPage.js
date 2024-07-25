class InspectionFlowPage {

    getTitle()
    {
        return cy.get('.content > .title')
    }

    getBigButton()
    {
        return cy.get('.big_button')
    }

    getTakePhotoButton()
    {
        return cy.get('.block_photo')
    }

    getUndoButton()
    {
        return cy.get('.undo')
    }

    getNextButton()
    {
        return cy.get('.next')
    }

    getNextHint()
    {
        return cy.get('.next_hint')
    }

    getStepHintTitle()
    {
        return cy.get('.step_hint > .title')
    }

    getSlickSlideTitle()
    {
        return cy.get('[id^=slick-slide] > .title')
    }

    getCanvasSignature()
    {
        return cy.get('#canvas_signature')
    }

    getText()
    {
        return cy.get('.text')
    }

}

export default InspectionFlowPage