import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTable() {
    return element(by.css('app-root mat-advanced-table')).isPresent();
  }
}
