import { faker } from '@faker-js/faker';

class CheckoutPage {

    visitarUrl(){
        cy.visit('checkout')
    }

    preencherDetalhesFatura(nome, sobrenome, empresa, pais, primeiroEndereco, segundoEndereco, cidade, estado, cep, telefone, email){
       cy.get('#billing_first_name').clear().type(nome)
       cy.get('#billing_last_name').clear().type(sobrenome)
       cy.get('#billing_company').clear().type(empresa)
       cy.get('#select2-billing_country-container').click()
            .contains(pais).click()
       cy.get('#billing_address_1').clear().type(primeiroEndereco)
       cy.get('#billing_address_2').clear().type(segundoEndereco)
       cy.get('#billing_city').clear().type(cidade)
       cy.get('#select2-billing_state-container').click()
            .contains(estado).click()
       cy.get('#billing_postcode').clear().type(cep)
       cy.get('#billing_phone').clear().type(telefone)
       cy.get('#billing_email').clear().type(email)
       cy.get('#order_comments').clear().type(faker.lorem.lines())
    }

    clicarTermo(){
        cy.get('#terms').click()
    }

    clicarFinalizarCompra(){
        cy.get('#place_order').click()
    }

}

export default new CheckoutPage()