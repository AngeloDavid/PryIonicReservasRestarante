import { CafeteriaPage } from './app.po';

describe('cafeteria App', () => {
  let page: CafeteriaPage;

  beforeEach(() => {
    page = new CafeteriaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
