
import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';

import HFwComponent from '@/Faculty/Component/HFwComponent';



/** 
 * 네비게이션 메인
 */
export default class NavMain extends HFwComponent
{

    /**
     * 
     * @param sceneParent 부모가될 씬
     */
    constructor(
        sceneParent: hsbSceneComponent
        , domNavMain: HTMLElement)
    {
        super(
            sceneParent
            , {
                domTarget: domNavMain,
                templateUrl: "/Pages/Startup/NavMain.html"
            });
        
    }


    public onDestroy(): void
    {
    }

    

    
     
}
