import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';


export default class NotFound extends hsbSceneComponent
{
    constructor()
    {
        super();
    }

    public render = async (): Promise<void> =>
    {
        GlobalHFw.StartupPage.MainDom.innerHTML = `
          <div>
              <h1>404 - Error</h1>
              <p>페이지를 찾을 수 없습니다.</p>
          </div>
      `;
    }
}
