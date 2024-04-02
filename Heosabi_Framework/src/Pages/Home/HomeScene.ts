import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';

import HFwComponent from '@/Faculty/Component/HFwComponent';

/** 홈씬  */
export default class HomeScene extends hsbSceneComponent
{

    constructor()
    {
        super();

        //console.log("HomeScene");

        let objThis = this;

        //씬용 UI 생성
        let UiCompo: HomeSceneCompo = new HomeSceneCompo(objThis);
        super.SceneUiComponent = UiCompo;

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

    /**
     * 
     * @param sceneParent 부모가될 씬
     */
    constructor(sceneParent: hsbSceneComponent)
    {
        //console.log("□□□□□□□");
        //console.log(GlobalHFw.StartupPage.getMainDom());
        super(
            sceneParent
            , {
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
    }

    
    public onDestroy(): void
    {
        super.OnRenderComplete = null;

        this.ParentScene = null;
    }
}
