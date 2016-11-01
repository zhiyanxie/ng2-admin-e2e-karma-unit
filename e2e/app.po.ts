import { browser, element, by } from 'protractor';

export class Demo1Page {
  navigateTo() {
    return browser.get('/#/pages/new');
  }

  getParagraphText() {
    return element(by.css('new p')).getText();
  }
}
