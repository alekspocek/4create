describe('Invoice testing', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login()
    })

    it('Can create an invoice', () => {
        cy.get('.css-sa76sr').click()
        cy.get('.right > .permission_create').click()
        cy.get('.i_new_invoice').click()

        cy.get('.title > input').type('Invoice')
        cy.get('.statement_description > textarea').type('A description')
        cy.get('.address > [data-validate="required"]').click()
        cy.get('.autocomplete-suggestion').click()

        cy.get('.item_textarea').type('Item 1')
        cy.get('.quantity_input > input').type('3')
        cy.get('[name="statement[item_rate]"]').type('10.00')
        cy.get('.right > .dropdown-toggle').click()
        cy.get(':nth-child(1) > .permission_create').click()

        cy.get('.alert').contains('Invoice added')
    })

    it('Fails to create an invoice due to missing/incorrect data', () => {
        cy.get('.css-sa76sr').click()
        cy.get('.right > .permission_create').click()
        cy.get('.i_new_invoice').click()

        cy.get('.title > input').type('Invoice')
        cy.get('.statement_description > textarea').type('A description')

        cy.get('.item_textarea').type('Item 1')
        cy.get('.quantity_input > input').type('3')
        cy.get('[name="statement[item_rate]"]').type('10.00')
        cy.get('.right > .dropdown-toggle').click()
        cy.get(':nth-child(1) > .permission_create').click()

        cy.get('.alert').contains('Please specify a client/vendor.')
    })
})