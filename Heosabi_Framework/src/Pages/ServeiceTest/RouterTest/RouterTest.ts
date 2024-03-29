import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';

export default class RouterTest extends hsbSceneComponent
{
    private userId: string = "";
    private name: string = "";

    constructor(props?: any)
    {
        super();

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
        GlobalHFw.StartupPage.getMainDom().innerHTML = `
        <div>
            <h1>RouterTest</h1>
            userId : ${this.userId}<br />
            name : ${this.name}<br />
        </div>
    `;
    }
}
