import GlobalHFw from '@/Global/GlobalHFw';
import PageBase from '@Faculty/PageBase';

export default class RouterTest implements PageBase
{
    private userId: string = "";
    private name: string = "";

    constructor(props?: any)
    {
        if (props)
        {//데이터가 있다.

            if (props["userId"])
            {
                this.userId = props["userId"] as string;
            }
            if (props["name"])
            {
                this.name = props["name"] as string;
            }

        }
    }

    public render = async (): Promise<void> =>
    {
        GlobalHFw.StartupPage.MainDom.innerHTML = `
        <div>
            <h1>RouterTest</h1>
            userId : ${this.userId}<br />
            name : ${this.name}<br />
        </div>
    `;
    }
}
