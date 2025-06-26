/// <reference types="cypress" />

describe("Teste de funcionalidade da página", () => {
    beforeEach(() =>{
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://agenda-contatos-react.vercel.app/');
    })

    //teste adicionando item a lista
    it('Deve incluir informações no formulario e adicionar na lista', () => {
        cy.get('input[type="text"]').type('Jhonatan willians')
        cy.get('input[type="email"]').type('Jhonatan.willians@ebac.com')
        cy.get('input[type="tel"]').type('11912345678')
        cy.get('.adicionar').click()
        cy.screenshot('Teste-adicionar')
    })
    //Teste editando um item da lista
    it('Deve editar corretamente as informações da lista', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Jonas ferreira')
        cy.get('input[type="email"]').clear().type('Jonas.ferreiras@ebac.com')
        cy.get('input[type="tel"]').clear().type('11987654321')
        cy.get('.alterar').click()
        cy.screenshot('Teste-edição')
    })
    //Teste removendo item da lista
    it('Deve remover um item da lista corretamente', () => {
        cy.get(":nth-child(5) > .sc-gueYoa > .delete").click();
        cy.screenshot('Teste-Remoção')
    })
})