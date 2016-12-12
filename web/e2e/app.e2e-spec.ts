import { TajmikPage } from './app.po';

describe('tajmik App', function() {
  let page: TajmikPage;

  beforeEach(() => {
    page = new TajmikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
