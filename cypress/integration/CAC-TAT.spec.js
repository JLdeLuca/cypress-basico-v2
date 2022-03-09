// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios', function() {
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('de Luca')
        cy.get('#email').type('joao.luca@exemplo.com')
        cy.get('#open-text-area').type('Teste')
//        cy.get('.button').click
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
})
