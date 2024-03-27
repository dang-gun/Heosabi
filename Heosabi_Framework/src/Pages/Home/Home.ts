import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';
import PageBase from '@Faculty/PageBase';

export default class Home extends hsbSceneComponent
{
    constructor()
    {
        super();

        this.initialize();
    }

    initialize = async () =>
    {
    };

    public async render(): Promise<void>
    {
        GlobalHFw.StartupPage.MainDom.innerHTML = `
        <div>
            <h1>Home</h1>
            <div>
                홈입니다!!!
            </div>
        </div>
        `;

     
    }
    
}
