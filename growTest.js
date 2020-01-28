

describe('Test expansion', function() {
    it('Navigates to dashboard', function() {

        //navigates to dashboard login page
        cy.visit('https://app.gogrow.com/dashboard/')

       
        //enters valid email address
        cy.get('.STATIC-logIn-email')
            .type('haiderjordan3@gmail.com')
            .should('have.value', 'haiderjordan3@gmail.com')

       
        //enters password
        cy.get('.STATIC-logIn-password')
            .type('growtest')
            .should('have.value', 'growtest')
       
        //clicks login button
        cy.get('.sign-in').click()

        //hovers so menu button appears
        cy.get('.metricTile---titleBar---2ZRFg').trigger('mouseover')

        //clicks expand button
       cy.get('.metricMenu---expandMetric---nUIeH > .isvg > svg').click()

        //clicks x button
        cy.get('.topBar---closeButton---zyjHJ > .isvg > svg').click()



    })
})