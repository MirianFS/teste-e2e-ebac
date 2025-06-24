class ProdutosPage {

    visitarUrl(){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.products > .row')
        .contais(nomeProduto)
        .click()
    }
    
    visitarProduto(nomeProduto){
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.wait(15);
        cy.get(`.button-variable-item-${tamanho}`).dblclick()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    clicarCarrinho(){
        cy.wait(15);
        cy.get('.dropdown-toggle > .text-skin').click()
    }

    clicarCheckout(){
        cy.wait(15)
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    }

}

export default new ProdutosPage()