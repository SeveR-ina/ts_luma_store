class HomePage {
    registerLink = () => cy.get('a[href*="https://magento.softwaretestingboard.com/customer/account/create/"]');
    logInLink = () => cy.get('.panel > .header > .authorization-link > a');
    upperUserMenu = () => cy.get('button[data-action="customer-menu-toggle"]').first();
    logOutLink = () => cy.get('a[href*="https://magento.softwaretestingboard.com/customer/account/logout/"]');
}
export const homePage = new HomePage();