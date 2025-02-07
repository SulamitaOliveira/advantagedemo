/// <reference types="cypress" />

import { shoppingPage } from "../../support/pages/shoppingPage";

describe('AdvantageDemo Shoppings', () => {
    beforeEach(() => {
        cy.viewport(1400, 768);
        cy.visit('https://advantageonlineshopping.com/#/');
    });

   
    it('Validando a busca de um produto', () => {
        shoppingPage.menuSearch().click();
        shoppingPage.typeAutoComplete('Tablets');
        shoppingPage.clickViewAll();
        shoppingPage.selectElement();
    });

    
    it('Validando a opção "cor" do produto', () => {
        shoppingPage.menuSearch().click();
        shoppingPage.typeAutoComplete('Tablets');
        shoppingPage.clickProduct();
        shoppingPage.checkColorSection();
        shoppingPage.addToCart();
        shoppingPage.checkProduct();
    });

   
    it('Validando a opção "quantidade" de itens', () => {
        shoppingPage.menuSearch().click();
        shoppingPage.typeAutoComplete('Tablets');
        shoppingPage.clickProduct();
        shoppingPage.increaseQuantity();
        shoppingPage.addToCart();
        shoppingPage.checkProduct();
    });

    it('Validando o botão "Adicionar ao carrinho"', () => {
        cy.addProduct();
        shoppingPage.checkProduct();
    });


    it('Validando a opção "editar" no carrinho de compras', () => {
        cy.addProduct();
        shoppingPage.clickCartMenu();
        shoppingPage.getEditElement();
        shoppingPage.selectElement();
    });

  
    it('Validando a opção "remover" no carrinho de compras com sucesso', () => {
        cy.addProduct();
        shoppingPage.clickCartMenu();
        shoppingPage.clickButtonRemove().click();
        shoppingPage.selectButton();
    });

    
    it('Validando cadastro de novo usuário', () => {
        cy.addProduct();
        shoppingPage.clickCartMenu();
        shoppingPage.clickButtonCheckout().click();
        shoppingPage.ButtonRegistration().click();
        cy.fillFormulary();

    });

    it('Validando login de novo usuário', () => {
        shoppingPage.menuUser().click();
        shoppingPage.userName().click().type('Sulamita');
        shoppingPage.password().click().type('90f1O@o840Ax');
        shoppingPage.remember().check();
        shoppingPage.signBtn().click();
    });

 

    it('Validando compra de usuário já cadastrado', () => {
        shoppingPage.menuUser().click();
        shoppingPage.userName().click().type('Sulamita');
        shoppingPage.password().click().type('90f1O@o840Ax');
        shoppingPage.remember().check();
        shoppingPage.signBtn().click();
        cy.addProduct();
        shoppingPage.clickCartMenu();
        shoppingPage.clickButtonCheckout().click();
        shoppingPage.nextBtn().click();
        shoppingPage.firstName();
        shoppingPage.passwordChekout();
        shoppingPage.safepayButton().click();
    });


    it('Validando a opção Editar detalhes de envio', () => {
        cy.addProduct();
        shoppingPage.clickCartMenu();
        shoppingPage.clickButtonCheckout().click();
        shoppingPage.fillUserName().click().type('Sulamita');
        shoppingPage.fillPasswordPayment().click().type('90f1O@o840Ax');
        shoppingPage.buttonLogin().click();
        shoppingPage.blueLink().click();
        shoppingPage.lastName().click().type('Souza');
        shoppingPage.buttonOrderPayment().click();
    });


    

});
