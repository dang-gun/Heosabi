import { hsbComponentBehaviour } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';



/** 
 * 네비게이션 메인
 */
export default class NavMain extends hsbComponentBehaviour
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
