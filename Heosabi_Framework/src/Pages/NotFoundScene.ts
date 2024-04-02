import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';

import HFwComponent from '@/Faculty/Component/HFwComponent';

/** 페이지를 찾지 못했을 때 표시될 씬 */
export default class NotFoundScene extends hsbSceneComponent
{

    constructor()
    {
        super();

        console.log("NotFoundScene");

        let objThis = this;

        //씬용 UI 생성
        let UiCompo: NotFoundSceneCompo = new NotFoundSceneCompo(objThis);
        super.SceneUiComponent = UiCompo;
    }
}


/**
 * HomeScene의 UI를 담당하는 컴포넌트
 */
class NotFoundSceneCompo extends HFwComponent
{

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
    <h1>404 - Error</h1>
    <p>페이지를 찾을 수 없습니다.</p>
</div>
        `
        });


        //부모 개체 저장
        this.ParentScene = sceneParent;
    }

    public async onLateRender(): Promise<void>
    {
        super.onLateRender();


        //랜더링 끝남을 외부로 알림
        super.OnRenderCompleteCall();
    }

    public onDestroy(): void
    {
        super.OnRenderComplete = null;

        this.ParentScene = null;
    }
}
