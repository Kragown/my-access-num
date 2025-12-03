describe('Landing Page E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/landing')
  })

  it('should display the main heading', () => {
    cy.contains('Transformez votre façon de travailler').should('be.visible')
  })

  it('should navigate to dashboard when clicking "Commencer" button', () => {
    cy.contains('Commencer').click()
    cy.url().should('include', '/dashboard')
  })

  it('should display carousel items', () => {
    cy.viewport(1280, 720)
    cy.get('#carousel-desktop').should('be.visible')
    
    cy.get('#carousel-desktop').within(() => {
      cy.contains('Optimisez votre flux de travail').should('exist')
      cy.contains('Collaboration en temps réel').should('exist')
      cy.contains('Analyses détaillées').should('exist')
      cy.contains('Réunions productives').should('exist')
    })
  })

  it('should have a working contact form', () => {
    cy.contains('Contactez-nous').should('be.visible')
    cy.get('input[name="nom"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('textarea[name="message"]').should('be.visible')
    cy.contains('Envoyer').should('be.visible')
  })

  it('should fill and submit contact form', () => {
    cy.get('input[name="nom"]').type('Test User')
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('textarea[name="message"]').type('Ceci est un message de test')
    
    cy.get('input[name="nom"]').should('have.value', 'Test User')
    cy.get('input[name="email"]').should('have.value', 'test@example.com')
    cy.get('textarea[name="message"]').should('have.value', 'Ceci est un message de test')
  })

  it('should have responsive navigation menu', () => {
    cy.viewport(375, 667)
    cy.get('button[aria-label*="menu" i]').should('be.visible')
    
    cy.viewport(1280, 720)
    cy.contains('Accueil').should('be.visible')
    cy.contains('Fonctionnalités').should('be.visible')
    cy.contains('Contact').should('be.visible')
  })
})

