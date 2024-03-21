import GlobalHFw from '@/Global/GlobalHFw';

export default class About
{
    constructor(props?: any)
    {
        
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
