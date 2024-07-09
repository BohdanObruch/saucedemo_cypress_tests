import standard_user from "../fixtures/credentials.json";

export function login() {

    cy.visit('/');
    cy.get('#user-name').type(standard_user.username);
    cy.get('#password').type(standard_user.password);
    cy.get('#login-button').click();

}
