import { hsbComponentBehaviour, hsbSceneComponent } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';



/** 
 * StartupScene의 UI를 담당하는 컴포넌트
 */
export default class StartupSceneCompo extends hsbComponentBehaviour
{
    //#region 외부로 노출할 이벤트들

    /** 랜더링이 끝나고 외부에 노출할 이벤트 */
    public OnRenderComplete: null | (() => void) = null;
    /** 랜더링이 끝나고 외부에 노출할 이벤트 호출 */
    private OnRenderCompleteCall()
    {
        if (this.OnRenderComplete)
        {
            this.OnRenderComplete();
        }
    }
    //#endregion


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

    public onLateRender = async (): Promise<void> =>
    {
        this.onLateRender_BaseTemplateCycle();


        //메인 네비 영역 저장
        this.MainNav = GlobalHFw.AppDom.querySelector("#navMain");
        //메인 돔 영역 저장
        this.MainDom = GlobalHFw.AppDom.querySelector("#domMain");


        //랜더링 끝남을 외부로 알림
        this.OnRenderCompleteCall();
    }

    public onDestroy(): void
    {
        //네비게이션 메뉴
        //let navMain = GlobalHFw.AppDom.querySelector("#navMain");
        //this.AddComponent(new NavMain({ NavMain: navMain }));
    }
    
     
}
