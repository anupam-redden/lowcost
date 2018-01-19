import { LowcostPage } from './app.po';

describe('lowcost App', () => {
  let page: LowcostPage;

  beforeEach(() => {
    page = new LowcostPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
