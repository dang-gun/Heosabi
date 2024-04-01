

import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';

import HFwComponent from '@/Faculty/Component/HFwComponent';



/** 
 * 네비게이션 메인
 */
export default class NavMain extends HFwComponent
{

    constructor(domNavMain: HTMLElement)
    {
        super({
            domTarget: domNavMain,
            templateUrl: "/Pages/Startup/NavMain.html"
        });
        
    }


    public onDestroy(): void
    {
    }

    

    
     
}
