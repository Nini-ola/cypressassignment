import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
// describe('file upload', () => {
//   it('successful file upload of png', () => {
//     cy.uploadFile('cypress/fixtures/example.png')
//   })

//   it('successful file upload of pdf', () => {
//     cy.uploadFile('cypress/fixtures/example.pdf')
//   })

//   it('successful file upload of jpg', () => {
//     cy.uploadFile('cypress/fixtures/example.jpg')
//   })

// })




Given(/^I click file upload Demo$/, () => {
	cy.clickSpecifiedElement()
});

When(/^I upload the "([^"]*)"$/, (file) => {
	cy.uploadFile(`cypress/fixtures/example${file}`)
});

Then(/^the file upload should be successful$/, () => {
	cy.verifyUpload()
});
