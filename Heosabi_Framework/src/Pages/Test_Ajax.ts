import GlobalHFw from "../Global/GlobalHFw";

/**
 * 아작스 테스트
 */
export default class Test_Ajax
{
    constructor(props?: any)
    {
        
        if (GlobalHFw.MainDom)
        {
            GlobalHFw.MainDom.innerHTML = '';
            GlobalHFw.MainDom.innerHTML = this.render();
        }

        if (props)
        {
            console.log(props);
        }
    }

    public render(): string
    {
        return `
        <div>
            <h1>About</h1>
        <div>
            <a href="#/">home</a>
            <a href="#/about">about</a>
            <a href="#/about/1">user</a>
            <a href="#/user/1/hello">mypage</a>
            <a href="#/awefwaefwe">notFound</a>
        </div>
        </div>
    `;
    }
}
