import { homePage } from "../pages/HomePage";
import { registrationPage } from "../pages/RegistrationPage";
import { customerPage } from "../pages/CustomerPage";
//const { userData } = require("../fixtures/example.json");
import * as userData from "../fixtures/userData.json";
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

    it('Login with created user', () => {
        homePage.logInLink().click();
        cy.login(userData.email, userData.password);
        cy.wait(2000);
        cy.contains(`Welcome, ${userData.fullName}!`);
    });

    it('Log out', () => {
        //cy.login(email, password);
        homePage.logInLink().click();
        cy.login(userData.email, userData.password);
        cy.validateUrl('https://magento.softwaretestingboard.com/');
        cy.logOut();
        cy.contains('You are signed out');
        cy.validateUrl('/logoutSuccess/');
    });

});