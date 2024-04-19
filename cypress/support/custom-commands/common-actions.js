Cypress.Commands.add('clickSpecifiedElement', () => {
    cy.contains('Upload File Demo').should('be.visible').and('exist').click()
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

Cypress.Commands.add('verifyUpload', (element) => {
    cy.contains('File Successfully Uploaded').should('be.visible')
})

Cypress.Commands.add('uploadFile', (file) => {
    cy.get('input[type="file"]').should('exist').selectFile(file)
} )