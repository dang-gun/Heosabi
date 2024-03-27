import { hsbComponentBehaviour } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';
import PageBase from '@Faculty/PageBase';


/** 
 * 프로젝트 메인
 * 라우터는 메인을 걸쳐서 이동해야 한다.
 * 
 * 페이지의 공통 영역은 여기서 컨트롤 되야 한다.
 */
export default class NavMain extends hsbComponentBehaviour
{
    private NavMainDom: HTMLElement;

    constructor(props?: any)
    {
        super();
        
        if (props.NavMain)
        {
            this.NavMainDom = props.NavMain;
        }
    }

    public async render(): Promise<void>
    {
        this.NavMainDom.innerHTML = `
<div>
    <div>
        <a href="#/">home</a>
        <a href="#/awefwaefwe">notFound</a><br />
        <br />
        <a href="#/test/router">test router</a>
        <a href="#/test/router/1">test router uid</a>
        <a href="#/test/router/1/hello">test router name</a>
    </div>
</div>
        `;
    }

    public destroy(): void
    {
        this.NavMainDom = null;
    }
    
     
}
