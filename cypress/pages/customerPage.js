import BasePage from "./basePage";

export default class CustomerPage extends BasePage {

    constructor() {
        super()
    }

    // General info
    CustomerName = "#CustomerName";
    RegistrationNumber = "#RegistrationNumber";
    Street1 = "#Street1";
    Street2 = "#Street2";
    Street3 = "#Street3";
    City = "#City";
    State = "#State";
    Country = "#Country";
    Postcode = "#Postcode";
    MainPhone = "#MainPhone";
    Fax = "#Fax";
    WebUrl = "#WebUrl";
    Email = "#Email";
    Source = "#Source";
    OtherSource = "#OtherSource";
    IndustryType = "#IndustryType";
    
    enterGeneralInfo(customerObject) {
        cy.get(this.CustomerName).type(customerObject.BusinessEntityName, { scrollBehavior: 'center' });
        cy.get(this.RegistrationNumber).type(customerObject.LegalEntityId, { scrollBehavior: 'center' });
        cy.get(this.Street1).type(customerObject.AddrLine1, { scrollBehavior: 'center' });
        cy.get(this.Street2).type(customerObject.AddrLine2, { scrollBehavior: 'center' });
        cy.get(this.Street3).type(customerObject.AddrLine3, { scrollBehavior: 'center' });
        cy.get(this.City).type(customerObject.City, { scrollBehavior: 'center' });
        cy.get(this.State).type(customerObject.State, { scrollBehavior: 'center' });
        cy.get(this.Country).type(customerObject.Country, { scrollBehavior: 'center' });
        cy.get(this.Postcode).type(customerObject.PostCode, { scrollBehavior: 'center' });
        cy.get(this.MainPhone).type(customerObject.MainPhone, { scrollBehavior: 'center' });
        cy.get(this.Fax).type(customerObject.Fax, { scrollBehavior: 'center' });
        cy.get(this.WebUrl).type(customerObject.Website, { scrollBehavior: 'center' });
        cy.get(this.Email).type(customerObject.Email, { scrollBehavior: 'center' });
        cy.get(this.Source).type(customerObject.Source, { scrollBehavior: 'center' });
        cy.get(this.OtherSource).type(customerObject.OtherSource, { scrollBehavior: 'center' });
        cy.get(this.IndustryType).type(customerObject.IndustryType, { scrollBehavior: 'center' });
    }

    // Authorised signatory contact
    PrimaryContactFirstName = "#PrimaryContactFirstName";
    PrimaryContactLastName = "#PrimaryContactLastName";
    PrimaryContactPhone = "#PrimaryContactPhone";
    PrimaryContactJobTitle = "#PrimaryContactJobTitle";
    PrimaryContactEmail = "#PrimaryContactEmail";

    authorisedSignatoryContact(customerObject){
        cy.get(this.PrimaryContactFirstName).type(customerObject.PrimaryContactFirstName, { scrollBehavior: 'center' });
        cy.get(this.PrimaryContactLastName).type(customerObject.PrimaryContactLastName, { scrollBehavior: 'center' });
        cy.get(this.PrimaryContactPhone).type(customerObject.PrimaryDirectPhone, { scrollBehavior: 'center' });
        cy.get(this.PrimaryContactJobTitle).type(customerObject.PrimaryJobTitle, { scrollBehavior: 'center' });
        cy.get(this.PrimaryContactEmail).type(customerObject.UseSameContact, { scrollBehavior: 'center' });
    }

    submit(buttonId) {
        const button = cy.get(buttonId);
        button.click();
    }
}

