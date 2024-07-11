import user from "../fixtures/credentials.json";

export function login() {

    cy.visit('/');
    cy.get('#user-name').type(user.standardUser.username);
    cy.get('#password').type(user.standardUser.password);
    cy.get('#login-button').click();

}
