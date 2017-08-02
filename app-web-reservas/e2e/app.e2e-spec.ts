import { AppWebReservasPage } from './app.po';

describe('app-web-reservas App', () => {
  let page: AppWebReservasPage;

  beforeEach(() => {
    page = new AppWebReservasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
