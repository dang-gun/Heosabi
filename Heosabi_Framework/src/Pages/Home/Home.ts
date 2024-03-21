import GlobalHFw from '@/Global/GlobalHFw';
import PageBase from '@Faculty/PageBase';

export default class Home implements PageBase
{
    constructor()
    {
        this.initialize();
    }

    initialize = async () =>
    {
    };

    public async render(): Promise<void>
    {
        console.log("홈 바인딩");
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
