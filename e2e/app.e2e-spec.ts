import { TestRxjsPage } from './app.po';

describe('test-rxjs App', () => {
  let page: TestRxjsPage;

  beforeEach(() => {
    page = new TestRxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
