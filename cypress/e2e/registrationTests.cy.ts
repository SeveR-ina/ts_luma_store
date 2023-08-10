import { homePage } from "../pages/HomePage";
import { registrationPage } from "../pages/RegistrationPage";
import { customerPage } from "../pages/CustomerPage";
const { faker } = require('@faker-js/faker');

describe.only('Registration tests for magento.softwaretestingboard.com', () => {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let email = faker.internet.email();
    let password = faker.internet.password({ length: 9, pattern: /[A-Z]/, prefix: 'a1 ' });

    beforeEach(() => {
        cy.visit(Cypress.env('host'));
    });

    it('User registration', () => {
        homePage.registerLink().first().click();
        cy.validateUrl('customer/account/create/');
        cy.fillRegisterInfo(firstName, lastName, email, password);
        registrationPage.registerButton().click();
        cy.wait(2000);
        customerPage.accInfo().should("contain", email);
        cy.validateUrl('customer/account/');
    });

    it('User registration with empty fields', () => {
        homePage.registerLink().first().click();
        cy.validateUrl('customer/account/create/');
        cy.fillEmptyRegisterInfo();
        registrationPage.registerButton().click();
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.validateUrl('customer/account/create/');
    });
});