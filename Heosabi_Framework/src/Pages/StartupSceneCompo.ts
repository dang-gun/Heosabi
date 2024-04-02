import { hsbComponentBehaviour, hsbSceneComponent } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';

import HFwComponent from '@/Faculty/Component/HFwComponent';


/** 
 * StartupScene의 UI를 담당하는 컴포넌트
 */
export default class StartupSceneCompo extends HFwComponent
{
    
    /** 이 컴포넌트를 가지고 있는 부모 */
    private ParentScene: hsbSceneComponent;



    /** 'navMain'으로 지정된 영역*/
    public MainNav: HTMLElement | null = null;

    /** 'domMain'으로 지정된 영역*/
    public MainDom: HTMLElement | null = null;

    constructor(sceneParent: hsbSceneComponent)
    {
        super({
            domTarget: GlobalHFw.AppDom,
            templateString: `
<div>
    <header></header>

    <nav id="navMain">
    </nav>

    <main id="domMain" aria-live="polite">

    </main>

    <footer></footer>
</div>
            `,
        });

        //부모 개체 저장
        this.ParentScene = sceneParent;
    }

    public async onLateRenderComplete(): Promise<void>
    {
        
        //메인 네비 영역 저장
        this.MainNav = GlobalHFw.AppDom.querySelector("#navMain");
        //메인 돔 영역 저장
        this.MainDom = GlobalHFw.AppDom.querySelector("#domMain");


        //랜더링 끝남을 외부로 알림
        this.OnRenderCompleteCall();
    }

    public onDestroy(): void
    {
        this.OnRenderComplete = null;

        this.ParentScene = null;

        this.MainNav = null;
        this.MainDom = null;
    }

    //public aa()
    //{

    //}
     
}
