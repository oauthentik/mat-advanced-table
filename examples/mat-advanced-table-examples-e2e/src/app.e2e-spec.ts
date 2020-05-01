import { AppPage } from './app.po';

describe('App Should intitialize a table of MatAdvancedTable', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the mat-advanced-table', () => {
    page.navigateTo();
    expect(page.getTable()).toBeTruthy();
  });
});
