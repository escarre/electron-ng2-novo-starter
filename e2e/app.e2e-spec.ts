import { ElectronNg2NovoStarterPage } from './app.po';

describe('electron-ng2-novo-starter App', function() {
  let page: ElectronNg2NovoStarterPage;

  beforeEach(() => {
    page = new ElectronNg2NovoStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
