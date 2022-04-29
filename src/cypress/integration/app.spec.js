describe('Test Application', () => {
    context('720px res', () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
        })
        describe('Visit Home', () => {
            it('Shuold navigate to Home page', () => {
                cy.visit('/')
            })
        })
    })
})
