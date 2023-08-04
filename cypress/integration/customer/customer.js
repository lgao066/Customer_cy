import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CustomerPage from '../../pages/customerPage'

const customerPage = new CustomerPage();

Given('I am on the sign-up page as a {string}', (client) => {
    if (client == "program officer") {
        customerPage.navigate('/');
    } else {
        // TODO
        // Extend for more user permissions
    } 
});

When('I enter the following details:', (dataTable) => {
    const customerObject = convertTestDataToCustomerObject(dataTable)
    customerPage.enterGeneralInfo(customerObject);
    customerPage.authorisedSignatoryContact(customerObject);

    // TODO
    // Click on submit

});

Then('I should sign up a customer successfully', () => {
    // TODO
    // Pending validation and submission
})

// Function to convert test data into a customerObject
function convertTestDataToCustomerObject(testData) {
    const customerObject = {};
  
    // Loop through each row of the test data table
    testData.hashes().forEach((row) => {
      const field = row.Field;
      const value = row.Value;
  
      // Add each field-value pair to the customerObject
      customerObject[field] = value;
    });
  
    return customerObject;
}






