import { hsbComponentBehaviour, hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';

import HFwComponent from '@/Faculty/Component/HFwComponent';

/** 홈씬  */
export default class HomeScene extends hsbSceneComponent
{
    /** 
     * UI담당 컴포넌트
     */
    private UiCompo: HomeSceneCompo;

    public UiTargetReset = (target: HTMLElement) =>
    {
        this.UiCompo.TargetReset(target);
    }

    constructor()
    {
        super();

        let objThis = this;

        //씬용 UI 생성
        objThis.UiCompo = new HomeSceneCompo(objThis);
        //씬용 UI가 완료되었을때 이벤트
        objThis.UiCompo.OnRenderComplete = () =>
        {
        };

        super.SceneComponent = objThis.UiCompo;

        this.initialize();
    }

    initialize = async () =>
    {
    };

}

/**
 * HomeScene의 UI를 담당하는 컴포넌트
 */
class HomeSceneCompo extends HFwComponent
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

    constructor(sceneParent: hsbSceneComponent)
    {
        //console.log("□□□□□□□");
        //console.log(GlobalHFw.StartupPage.getMainDom());
        super({
            domTarget: GlobalHFw.StartupPage.MainDom,
            templateString: `
<div>
    <h1>Home</h1>
    <div>
        홈입니다!!!
    </div>
</div>
        `
        });


        //부모 개체 저장
        this.ParentScene = sceneParent;
    }

    public async onLateRender (): Promise<void>
    {
        super.onLateRender();



        //랜더링 끝남을 외부로 알림
        this.OnRenderCompleteCall();
    }

    public onDestroy(): void
    {
        this.OnRenderComplete = null;

        this.ParentScene = null;
    }
}
