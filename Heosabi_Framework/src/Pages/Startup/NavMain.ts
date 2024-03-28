import { hsbComponentBehaviour } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';



/** 
 * 네비게이션 메인
 */
export default class NavMain extends hsbComponentBehaviour
{

    constructor(props?: any)
    {
        //타겟으로 사용할 돔
        let domNavMain: HTMLElement;
        if (props.NavMain)
        {
            domNavMain = props.NavMain;
        }

        super({
            domTarget: props.NavMain,
            templateString: `
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
        ` });
        
    }


    public onDestroy(): void
    {
    }
    
     
}
