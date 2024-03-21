import GlobalHFw from '@/Global/GlobalHFw';
import PageBase from '@Faculty/PageBase';

export default class NotFound implements PageBase
{
    constructor()
    {
    }

    public async render(): Promise<void>
    {
        GlobalHFw.StartupPage.MainDom.innerHTML = `
          <div>
              <h1>404 - Error</h1>
              <p>페이지를 찾을 수 없습니다.</p>
          </div>
      `;
    }
}
