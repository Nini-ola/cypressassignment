Cypress.Commands.add('clickSpecifiedElement', (element) => {
    cy.contains(element).should('be.visible').and('exist').click()
})

Cypress.Commands.add('jpgUpload', (element) => {
    cy.get('input[type="file"]').should('exist').selectFile('cypress/fixtures/example.jpg')
})

Cypress.Commands.add('pdfUpload', (element) => {
    cy.get('input[type="file"]').should('exist').selectFile('cypress/fixtures/example.pdf')
})

Cypress.Commands.add('pngUpload', (element) => {
    cy.get('input[type="file"]').should('exist').selectFile('cypress/fixtures/example.png')
})

Cypress.Commands.add('demoUpload', (element) => {
    cy.contains('Upload File Demo').should('be.visible').click()
})

Cypress.Commands.add('uploadFile', (file) => {
    cy.get('input[type="file"]').should('exist').selectFile(file)
    cy.contains('File Successfully Uploaded').should('be.visible')
} )