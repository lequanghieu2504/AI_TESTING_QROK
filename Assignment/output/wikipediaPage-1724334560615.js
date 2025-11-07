const {
  I
} = inject();

module.exports = {

  // setting locators
  tocHeader: locate('h2').withText('Contents'),
  tocOrigins: locate('li').withText('Origins'),
  tocPrehistory: locate('li').withText('Prehistory'),
  searchInput: '#searchInput',
  searchButton: 'button[type="submit"]',
  mainPageLink: locate('a').withText('Visit the main page'),
  loginLink: locate('a').withText("You're encouraged to log in; however, it's not mandatory."),
  aboutSiteLink: locate('a').withText('Learn about Wikipedia and how it works'),
  contactPageLink: locate('a').withText('How to contact Wikipedia'),

  // Methods to interact with page elements
  clickTOCOrigins() {
    I.click(this.tocOrigins);
  },

  clickTOCPrehistory() {
    I.click(this.tocPrehistory);
  },

  searchWikipedia(query) {
    I.fillField(this.searchInput, query);
    I.click(this.searchButton);
  },

  visitMainPage() {
    I.click(this.mainPageLink);
  },

  login() {
    I.click(this.loginLink);
  },

  learnAboutSite() {
    I.click(this.aboutSiteLink);
  },

  contactWikipedia() {
    I.click(this.contactPageLink);
  }
}