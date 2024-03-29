import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';


export default class HomeScene extends hsbSceneComponent
{
    constructor()
    {
        super();

        this.initialize();
    }

    initialize = async () =>
    {
    };

    public render = async (): Promise<void> =>
    {
        GlobalHFw.StartupPage.getMainDom().innerHTML = `
        <div>
            <h1>Home</h1>
            <div>
                홈입니다!!!
            </div>
        </div>
        `;

     
    }
    
}
