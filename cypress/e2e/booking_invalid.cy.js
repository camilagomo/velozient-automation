// cypress/e2e/booking_invalid.cy.js

// Prevent Cypress from failing the test due to uncaught exceptions in the app
Cypress.on('uncaught:exception', () => false);

describe('Booking Form – Invalid Date Range (Negative Test)', () => {
  it('Should allow invalid dates', () => {
    // Visit the homepage
    cy.visit('https://automationintesting.online/');

    const checkInDate = '2025-07-12';
    const checkOutDate = '2025-07-09'; // Invalid range

    // Fill in check-in and check-out dates
    cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
      .clear().type(checkInDate);

    cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
      .clear().type(checkOutDate);

    // Click on the "Check Availability" button
    cy.contains('Check Availability').click();

    // Optional: wait for rooms to try to appear
    cy.wait(1000);

    // Book now is shown (unexpectedly) — this is part of the bug
    cy.contains('Book now').first().click();

    // Validate that the reservation form did NOT load (BUG result)
    cy.get('.col-lg-8 > :nth-child(1) > .fw-bold', { timeout: 3000 }).should('not.exist');
  });
});
