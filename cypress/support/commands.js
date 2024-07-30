import { shoppingPage } from "./pages/shoppingPage";

Cypress.Commands.add('addProduct', (item) => {

    shoppingPage.menuSearch().click();
    shoppingPage.typeNoAutoComplete('Tablets');
    shoppingPage.clickNoProduct();
    shoppingPage.addToCart();
});

Cypress.Commands.add('fillFormulary', (item) => {

shoppingPage.fillName().click().type(`Sulamita ${Math.floor(Math.random()*(20-10+1))+10}`);
shoppingPage.fillEmail().click().type('sulamita@gmail.com');
shoppingPage.fillPassword().click().type('90f1O@o840Ax');
shoppingPage.confirmPassword().click().type('90f1O@o840Ax');
shoppingPage.markCheckboxAgreement();
shoppingPage.clickRegistration().click();

});