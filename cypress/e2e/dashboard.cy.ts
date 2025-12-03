describe('Dashboard E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/dashboard')
  })

  it('should display dashboard with events', () => {
    cy.contains('Mes évènements').should('be.visible')
    cy.contains('Concert').should('be.visible')
  })

  it('should open modal when clicking add button', () => {
    cy.get('button[aria-label="Ajouter un événement"]').click()
    cy.contains('Ajouter un évènement').should('be.visible')
  })

  it('should close modal when clicking close button', () => {
    cy.get('button[aria-label="Ajouter un événement"]').click()
    cy.contains('Ajouter un évènement').should('be.visible')
    
    cy.get('button[aria-label="Fermer la modale"]').click()
    cy.contains('Ajouter un évènement').should('not.exist')
  })

  it('should fill event form in modal', () => {
    cy.get('button[aria-label="Ajouter un événement"]').click()
    
    cy.get('input[id="event-name-dashboard"]').type('Nouvel événement')
    cy.get('input[id="event-date-dashboard"]').type('2025-12-25')
    
    cy.get('input[id="event-name-dashboard"]').should('have.value', 'Nouvel événement')
    cy.get('input[id="event-date-dashboard"]').should('have.value', '2025-12-25')
  })

  it('should navigate back to landing page', () => {
    cy.contains('Retour Accueil').click()
    cy.url().should('include', '/landing')
  })
})

