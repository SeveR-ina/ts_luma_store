class LoginPage {
    emailInput = () => cy.get('#email');
    passwordInput = () => cy.get('#pass');
    signInButton = () => cy.get('#send2');
}
export const loginPage = new LoginPage();