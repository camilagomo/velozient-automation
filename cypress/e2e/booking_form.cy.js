// Prevent Cypress from failing the test due to uncaught exceptions in the app
Cypress.on('uncaught:exception', () => false);

describe('Booking room Selection and API Validation', () => {
  it('Should select valid dates and validate API calls', () => {
    // Visit the homepage
    cy.visit('https://automationintesting.online/');

    const checkInDate = '2025-07-12';
    const checkOutDate = '2025-07-14';

    // Intercept only the actual calls you confirmed
    cy.intercept('GET', '**/room**').as('getRooms');
    cy.intercept('GET', '**/branding**').as('getBranding');

    // Fill in check-in and check-out dates
    cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
      .clear().type(checkInDate);
    cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
      .clear().type(checkOutDate);

    // Click on the "Check Availability" button
    cy.contains('Check Availability').click();

    // Wait for those
    cy.wait('@getRooms');
    cy.wait('@getBranding');

    // Click on the first available "Book now" button
    cy.contains('Book now', { timeout: 10000 }).should('exist');
    cy.contains('Book now').should('exist').first().click();

    // Assert that the user is redirected to the reservation page
    cy.url().should('include', '/reservation/');
  });
});
