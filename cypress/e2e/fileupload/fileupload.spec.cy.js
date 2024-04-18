describe('file upload', () => {
  it('successful file upload of png', () => {
    cy.uploadFile('cypress/fixtures/example.png')
  })

  it('successful file upload of pdf', () => {
    cy.uploadFile('cypress/fixtures/example.pdf')
  })

  it('successful file upload of jpg', () => {
    cy.uploadFile('cypress/fixtures/example.jpg')
  })

})

// describe('file upload', () => {
//   it('successful file upload of png', () => {
//     cy.contains('Upload File Demo').should('be.visible').click()
//     cy.get('input[type="file"]').should('exist').selectFile('cypress/fixtures/example.png')
//     cy.contains('File Successfully Uploaded').should('be.visible')
//   })

//   it('successful file upload of pdf', () => {
//     cy.contains('Upload File Demo').should('be.visible').click()
//     cy.get('input[type="file"]').should('exist').selectFile('cypress/fixtures/example.png')
//     cy.contains('File Successfully Uploaded').should('be.visible')
//   })

//   it('successful file upload of jpg', () => {
//     cy.contains('Upload File Demo').should('be.visible').click()
//     cy.get('input[type="file"]').should('exist').selectFile('cypress/fixtures/example.png')
//     cy.contains('File Successfully Uploaded').should('be.visible')
//   })

// })


// Given(/^I click "([^"]*)"$/, (element) => {
// 	cy.clickSpecifiedElement(element)
// });

// When(/^I select the <file formats> for upload$/, () => {
// 	return true;
// });

// When(/^I select the <file formats> for upload$/, () => {
// 	return true;
// });
