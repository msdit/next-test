const fullTest = (res) => () => {
    beforeEach(() => {
        cy.viewport(...res)
        Cypress.Cookies.preserveOnce('token')
    })

    describe("Visit home page and test home page's redirect", () => {
        it('Shuold navigate to Login', () => {
            cy.clearCookie('token')
            cy.visit('/')
            cy.url().should('include', 'login')
        })
    })

    describe("Visit dashboard and test dashboard's redirect", () => {
        it('Shuold navigate to Login', () => {
            cy.visit('/dashboard')
            cy.url().should('include', 'login')
        })
    })

    describe('Test login', () => {
        it('Shuold login with sample data', () => {
            cy.get('#username')
                .type('09120000000')
                .should('have.value', '09120000000')
            cy.get('#password').type('00000').should('have.value', '00000')
            cy.get('button#submitLogin').click()
            cy.url().should('include', 'dashboard')
        })
    })

    describe('Test redux', () => {
        it('Shuold contain sample data', () => {
            cy.get('#data_maghaie148gmailcom').should(
                'contain.text',
                'maghaie148@gmail.com'
            )
        })
    })

    describe('Add user', () => {
        it('Should add new user', () => {
            cy.get('button#addUser').click()
            cy.get('#name')
                .type('This is Name')
                .should('have.value', 'This is Name')
            cy.get('#email')
                .type('test@email.com')
                .should('have.value', 'test@email.com')
            cy.get('button#submitAddUser').click()
            cy.get('#data_testemailcom').should(
                'contain.text',
                'test@email.com'
            )
        })
    })

    describe('Edit user', () => {
        it('Should edit name of test@email.com', () => {
            cy.get('#edit_testemailcom').click()
            cy.get('#name')
                .clear()
                .type('Just Name')
                .should('have.value', 'Just Name')
            cy.get('button#submitEditUser').click()
            cy.get('#data_testemailcom').should('contain.text', 'Just Name')
        })
    })

    describe('Remove user', () => {
        it('Should remove test@email.com', () => {
            cy.get('#remove_testemailcom').click()
            cy.get('#data_testemailcom').should('not.exist')
        })
    })

    describe('Logout', () => {
        it('Should logout and redirect to login', () => {
            cy.get('#logout').click()
            cy.url().should('include', 'login')
        })
    })
}

describe('Test Application', () => {
    context('720px res', fullTest([1280, 720]))
    context('iphone-6 res', fullTest(['iphone-6']))
})
