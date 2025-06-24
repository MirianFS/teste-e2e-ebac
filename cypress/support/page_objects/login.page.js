class LoginPage {

    visitarUrl(){
        cy.visit('minha-cont')
    }

    clicarComprar(){
        cy.get('#primary-menu > .menu-item-629 > a')
    }

    preencherLogin(nome, usuario, senha){
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain',
             `Olá, ${nome} (não é ${nome}? Sair)`)
    }

}

export default new LoginPage()