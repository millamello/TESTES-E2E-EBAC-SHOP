// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('adicionarProduto', (produto) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.contains(produto).click()
    cy.get('.button-variable-item-XS').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').click()

})

Cypress.Commands.add('adicionarProduto2', (produto) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.contains(produto).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()


})

Cypress.Commands.add('adicionarProduto3', (produto) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.contains(produto).click()
    cy.get('.button-variable-item-32').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('adicionarProduto4', (produto) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.contains(produto).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('EnderecoFaturamento', (endereco) => {

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').type('Camila')
        cy.get('#billing_last_name_field > label').type('Mello')
        cy.get('#billing_company').type('Tecnoset')
        cy.get('#billing_country_field > label').click()     
        cy.get('#billing_address_1').type('Av. Independencia')
        cy.get('#billing_city').type('Sorocaba')
        cy.get('#billing_postcode').type('18031-180')
        cy.get('#billing_phone').type('(15)981518407')
        cy.get('#billing_email').type('camila@teste.com.br')
        cy.get('#terms').click()
        cy.get('#place_order').click({force:true})
    })
