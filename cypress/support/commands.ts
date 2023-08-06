/// <reference types="cypress" />
import { registrationPage } from '../pages/RegistrationPage';
import { homePage } from '../pages/HomePage';
import { loginPage } from '../pages/LoginPage';
import { customerPage } from '../pages/CustomerPage';

Cypress.Commands.add('login' as any, (email: string, password: string) => {
	loginPage.emailInput().type(email);
	loginPage.passwordInput().type(password);
	loginPage.signInButton().click();
});

Cypress.Commands.add('logOut' as any, () => {
	homePage.upperUserMenu().pause().first().click();
	homePage.logOutLink().pause().first().click();
});

Cypress.Commands.add(
	'fillRegisterInfo' as any,
	(
		firstName: string,
		lastName: string,
		email: string,
		password: string
	) => {
		registrationPage.firstNameInput().type(firstName);
		registrationPage.lastNameInput().type(lastName);
		registrationPage.emailInput().type(email);
		registrationPage.passwordInput().type(password);
		registrationPage.repeatPasswordInput().type(password);
	}
);

Cypress.Commands.add('validateUrl' as any, (url) => {
	cy.url().should('include', url);
});