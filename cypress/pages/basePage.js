export default class BasePage {

    baseUrl = "https://dev-rhipe-signup.azurewebsites.net";

    navigate(path) {
        cy.visit(this.baseUrl + path)
    }

    getPageTitle() {
        return cy.title()
    }

}