class ShoppingPage {
  visit(url = 'https://advantageonlineshopping.com/#/') {
    cy.visit(url);
  }

  menuSearch() {
    return cy.get('#menuSearch');
  }

  typeNoAutoComplete(searchTerm) {
    cy.get('#autoComplete').wait(100).type(searchTerm);
  }

  clickViewAll() {
    return cy.get('.viewAll').click();
  }

  selectElement() {
    return cy.get('.select');
  }

  clickNoProduct() {
    return cy.get('[href="#/product/16"] > img').click();
  }

  addToCart() {
    return cy.get('[name=save_to_cart]').click();
  }

  checkProduct() {
    return cy.get('#product');
  }

  checkColorSection() {
    return cy.get('.Colors').should('exist');
  }

  increaseQuantity() {
    return cy.get('.smoolMargin > .Quantity').click();
  }

  clickNoCartMenu() {
    return cy.get('#menuCart').click();
  }

  getEditElement() {
    return cy.get('.edit');
  }

  clickNoButtonRemove() {
    return cy.get('.remove');
  }

  selectButton() {
    return cy.get('.a-button');
  }

  clickNoButtonCheckout() {
    return cy.get('#checkOutButton');
  }

  ButtonRegistration() {
    return cy.get('#registration_btn');
  }
  

  clickRegistration() {
    return cy.get('#register_btn');
  }

  checkElementSticky() {
    return cy.get('.sticky');
  }

  fillName(name) {
    return cy.get('[name="usernameRegisterPage"]');
  }

  fillEmail(email) {
    return cy.get('[sec-name="userEmail"]');
  }

  fillPassword(password) {
    return cy.get('[name="passwordRegisterPage"]');
  }

  confirmPassword(password) {
    return cy.get('[name="confirm_passwordRegisterPage"]');
  }

  markCheckboxAgreement() {
    return cy.get('[name="i_agree"]').check();
  }

  clickNoButtonRegistration() {
    return cy.get('#register_btn').click();
  }

  nextBtn() {
    return cy.get('.mobileBtnHandler > #next_btn');
  }

  nextButton() {
    return cy.get('#next_btn');
  }


  userName() {
    return cy.get('[name="username"]');
  }

  password() {
    return cy.get('[name="password"]');
  }

  remember() {
    return cy.get('[name="remember_me"]');
  }

  signBtn() {
    return cy.get('#sign_in_btn');
  }

  validateButtonCheckout() {
    return cy.get('#pay_now_btn_SAFEPAY').should('be.disabled');
  }

  safepayButton() {
    return cy.get('#pay_now_btn_SAFEPAY').click();
  }

  getSenderElement() {
    return cy.get('.sec.sender-a.ng-scope.invalid');
  }

  menuUser() {
    return cy.get('#menuUser');
  }
  
  blueLink() {
    return cy.get('[data-ng-show="!userDetailsEditMode"] > .blueLink > .ng-scope');
  }

  lastName() {
    return cy.get('[name="last_name"]');
  }

  firstName() {
    return cy.get('[a-hint="SafePay username"] > .inputContainer > .ng-pristine');
  }

  passwordChekout() {
    return cy.get('[a-hint="SafePay password"] > .inputContainer > .ng-pristine');
  }
   
  buttonLogin() {
    return cy.get('#login_btn');
  }

  fillUserName() {
    return cy.get(':nth-child(1) > .secForm > [a-hint="Username"] > .inputContainer > .ng-pristine');
  }

  fillPasswordPayment() {
    return cy.get(':nth-child(1) > .secForm > [a-hint="Password"] > .inputContainer > .ng-pristine');
  }

  buttonNextPayment() {
    return cy.get(':nth-child(1) > .secForm > [a-hint="Password"] > .inputContainer > .ng-pristine');
  }
}



export const shoppingPage = new ShoppingPage();
