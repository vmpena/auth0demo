import { Auth0DemoPage } from './app.po';

describe('auth0-demo App', () => {
  let page: Auth0DemoPage;

  beforeEach(() => {
    page = new Auth0DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
