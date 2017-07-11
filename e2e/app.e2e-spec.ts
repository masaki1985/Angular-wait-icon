import { WaitIconPage } from './app.po';

describe('wait-icon App', () => {
  let page: WaitIconPage;

  beforeEach(() => {
    page = new WaitIconPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
