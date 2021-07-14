describe('SignUp form tests', () => {
    it('verify that we can type some in login', () => {
        cy.visit('https://ita-social-projects.github.io/GreenCityClient/#/');
        cy.url().should('include', 'https://ita-social-projects.github.io/GreenCityClient');

        cy.get(`[class="header_sign-up-btn secondary-global-button"]`)
            .click();
        cy.get( `[class="primary-global-button"]` )
            .should('be.visible');
        cy.get( `[id="email"]` )
            .type('afaa@adasfaf.afasf')
            .should('have.value','afaa@adasfaf.afasf');
    })

    it('verify that we can type some in password', () => {
        cy.visit('https://ita-social-projects.github.io/GreenCityClient/#/');
        cy.url().should('include', 'https://ita-social-projects.github.io/GreenCityClient');

        cy.get(`[class="header_sign-up-btn secondary-global-button"]`)
            .click();
        cy.get( `[class="primary-global-button"]` )
            .should('be.visible');
        cy.get( `[id="email"]` )
            .type('afaa@adasfaf.afasf')
            .should('have.value','afaa@adasfaf.afasf');
    })
})