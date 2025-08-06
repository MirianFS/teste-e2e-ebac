/// <reference types="cypress" />
import loginPage from "../support/page_objects/login.page";
import produtosPage from "../support/page_objects/produtos.page";
import checkoutPage from "../support/page_objects/checkout.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  beforeEach(() => {
      loginPage.visitarUrl()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.fixture('perfil').then(dados =>{
        loginPage.preencherLogin(dados.nome, dados.usuario, dados.senha)
        loginPage.clicarComprar()
    })
    cy.fixture('produto').then(dados => {
        produtosPage.visitarUrl()
        produtosPage.buscarProduto(dados.produto)
        cy.get('.product_title').should('contain', dados.produto)
        produtosPage.addProdutoCarrinho(dados.tamanho, dados.cor, dados.quantidade)
        cy.get('.woocommerce-message').should('contain',`“${dados.produto}” foi adicionado no seu carrinho.`)
        produtosPage.clicarCarrinho()
        produtosPage.clicarCheckout()
    })
    cy.fixture('checkout').then(dados => {
        checkoutPage.preencherDetalhesFatura(
            dados.nome, 
            dados.sobrenome, 
            dados.empresa, 
            dados.pais, 
            dados.primeiroEndereco, 
            dados.segundoEndereco, 
            dados.cidade, 
            dados.estado, 
            dados.cep, 
            dados.telefone, 
            dados.email)
        checkoutPage.clicarTermo()
        checkoutPage.clicarFinalizarCompra()
    })
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });

})