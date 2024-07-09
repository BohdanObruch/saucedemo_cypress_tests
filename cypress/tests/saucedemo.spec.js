import {login} from "../support/shared";

describe('SauceDemo Tests', () => {
    beforeEach(() => {
        login();
    });

    it('Test 1 - Perform Login', () => {
        cy.get('[data-test="title"]').should('be.visible');
        cy.get('[data-test="shopping-cart-link"]').should('be.visible');
        cy.get('[data-test="inventory-item"]').should('have.length.greaterThan', 0);
    });

    it('Test 2 - Add product to the cart and remove it', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
        cy.get('[data-test="inventory-item-desc"]').should('have.text', 'carry.allTheThings() with' +
            ' the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99');
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.removed_cart_item').should('not.be.visible');
    });
});
