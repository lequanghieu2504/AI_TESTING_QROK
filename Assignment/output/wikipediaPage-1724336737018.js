const {
  I
} = inject();

module.exports = {

  // Setting locators
  mainMenu: locate('nav').withText('Main menu'),
  contentsSection: locate('h2').withText('Contents'),
  searchInput: '#searchInput',
  searchButton: 'button[type="submit"]',
  editSectionButton: locate('a').withText('Edit section:'),
  currentEventsLink: locate('a').withText('Articles related to current events'),
  randomArticleLink: locate('a').withText('Visit a randomly selected article'),
  helpLink: locate('a').withText('Guidance on how to use and edit Wikipedia'),
  aboutLink: locate('a').withText('Learn about Wikipedia and how it works'),

  // Additional locators (as needed)
  languageDropdown: '#p-lang-btn',
  userMenuDropdown: '#vector-user-links-dropdown',
  tocOriginsLink: locate('a').withText('Origins'),
  tocPrehistoryLink: locate('a').withText('Prehistory'),

  // Setting methods
  searchFor(query) {
    I.fillField(this.searchInput, query);
    I.click(this.searchButton);
  },

  clickCurrentEvents() {
    I.click(this.currentEventsLink);
  },

  clickRandomArticle() {
    I.click(this.randomArticleLink);
  },

  openHelpSection() {
    I.click(this.helpLink);
  },

  openUserMenu() {
    I.click(this.userMenuDropdown);
  },

  openLanguageDropdown() {
    I.click(this.languageDropdown);
  },

  navigateToOrigins() {
    I.click(this.tocOriginsLink);
  },

  navigateToPrehistory() {
    I.click(this.tocPrehistoryLink);
  },

  editSection(section) {
    I.click(locate('a').withText(`Edit section: ${section}`));
  },

  // Additional methods can be added as needed
}