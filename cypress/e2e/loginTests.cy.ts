import { homePage } from "../pages/HomePage";
import * as userData from "../fixtures/userData.json";

describe.only('Login tests for magento.softwaretestingboard.com', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('host'));
    });

    it('Login with existing user', () => {
        homePage.logInLink().click();
        cy.login(userData.email, userData.password);
        cy.wait(5000);
        cy.contains(`Welcome, ${userData.fullName}!`);
    });

    it('Login with non-existent user', () => {
        homePage.logInLink().click();
        cy.login(userData.email, userData.fullName);
        cy.wait(4000);
        cy.contains(`incorrect or your account is disabled`);
    });

    it.skip('Log out', () => {
        homePage.logInLink().click();
        cy.login(userData.email, userData.password);
        cy.validateUrl('https://magento.softwaretestingboard.com/');
        cy.logOut();
        cy.contains('You are signed out');
        cy.validateUrl('/logoutSuccess/');
    });
});