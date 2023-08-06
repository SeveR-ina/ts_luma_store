class CustomerPage {
    accInfo = () => cy.get('.box-content');
}
export const customerPage = new CustomerPage();