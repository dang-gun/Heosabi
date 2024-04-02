import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';

import HFwComponent from '@/Faculty/Component/HFwComponent';

export default class ComponentTestScene extends hsbSceneComponent
{
    constructor()
    {
        super();

        //console.log("ComponentTestScene");

        let objThis = this;

        //씬용 UI 생성
        let UiCompo: ComponentTestSceneCompo = new ComponentTestSceneCompo(objThis);
        super.SceneUiComponent = UiCompo;

        this.initialize();
    }

    initialize = async () =>
    {
    };
}


/**
 * ComponentTestScene의 UI를 담당하는 컴포넌트
 */
class ComponentTestSceneCompo extends HFwComponent
{
    private TestMenuCompo: null | HFwComponent;

    /**
     * 
     * @param sceneParent 부모가될 씬
     */
    constructor(sceneParent: hsbSceneComponent)
    {
        super(
            sceneParent
            , {
                domTarget: GlobalHFw.StartupPage.MainDom,
                templateUrl: "/Pages/ComponentTest/ComponentTestScene.html"
            });
    }

    public async onLateRenderComplete(): Promise<void>
    {
        //console.log("ComponentTestSceneCompo : onLateRenderComplete");

        //테스트메뉴 컴포넌트 생성
        this.TestMenuCompo
            = new ComponentTestMenuCompo(
                //super.ParentScene
                this.ParentScene
                , super.DomQuery("#idMenu")
            );


        this.OnRenderCompleteCall();
    }
}

/**
 * 컴포넌트 테스트용 메뉴 컴포넌트
 */
class ComponentTestMenuCompo extends HFwComponent
{
    private ButtonList: HTMLButtonElement[] = [];

    /**
     * 
     * @param sceneParent 부모가될 씬
     */
    constructor(
        sceneParent: hsbSceneComponent
        , targetDom: HTMLElement)
    {
        super(
            sceneParent
            , {
                domTarget: targetDom,
                templateString: `<div></div>`
            });
    }

    public async onLateRenderComplete(): Promise<void>
    {
        //console.log("ComponentTestMenuCompo : onLateRenderComplete");



        for (let i = 0; i < 10; ++i)
        {
            let btnItem = document.createElement("button");
            btnItem.innerHTML = "버튼" + i;
            btnItem.onclick = (event) => { alert("버튼" + i) };

            this.ButtonList.push(btnItem);

            super.SettingData_domTarget.appendChild(btnItem);
        }

        


        this.OnRenderCompleteCall();
    }

    public onDestroy(): void
    {
        super.onDestroy();

        this.ButtonList = null;
    }

    public AddButton(sTitle: string, func: ((event) => void))
    {

    }
}