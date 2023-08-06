class RegistrationPage {
    firstNameInput = () => cy.get('#firstname');
    lastNameInput = () => cy.get('#lastname');
    emailInput = () => cy.get('#email_address');
    passwordInput = () => cy.get('#password');
    repeatPasswordInput = () => cy.get('#password-confirmation');
    registerButton = () => cy.get('#form-validate > .actions-toolbar > div.primary > .action > span');
}
export const registrationPage = new RegistrationPage();