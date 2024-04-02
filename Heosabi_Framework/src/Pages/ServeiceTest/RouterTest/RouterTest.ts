import { hsbSceneComponent } from '@H_Fnd/Heosabi';

import GlobalHFw from '@/Global/GlobalHFw';

import HFwComponent from '@/Faculty/Component/HFwComponent';

export default class RouterTest extends hsbSceneComponent
{

    constructor(props?: any)
    {
        super();

        console.log("RouterTest");

        let objThis = this;

        let tempProps: any = props;

        //씬용 UI 생성
        let UiCompo: RouterTestCompo = new RouterTestCompo(objThis);
        super.SceneUiComponent = UiCompo;
        UiCompo.OnRenderComplete = () =>
        {
            objThis.propsReset(tempProps);
        };

    }

    /**
     * 프로퍼티 재 지정
     * @param props
     */
    public propsReset(props?: any)
    {
        if (props)
        {//데이터가 있다.

            let tempUi: RouterTestCompo = this.SceneUiComponent as RouterTestCompo;

            if (props["userId"])
            {
                tempUi.UserId = props["userId"] as string;
            }
            if (props["name"])
            {
                tempUi.Name = props["name"] as string;
            }

        }
    }
}

/**
 * RouterTestCompo의 UI를 담당하는 컴포넌트
 */
class RouterTestCompo extends HFwComponent
{
    
    /** 유저id */
    public get UserId(): string
    {
        return (document.getElementById("labUserId") as HTMLLabelElement).innerText;
    }
    public set UserId(value: string)
    {
        (document.getElementById("labUserId") as HTMLLabelElement).innerText = value;
    }

    /** Name */
    public get Name(): string
    {
        return (document.getElementById("labName") as HTMLLabelElement).innerText;
    }
    public set Name(value: string)
    {
        (document.getElementById("labName") as HTMLLabelElement).innerText = value;
    }

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
                templateUrl: "/Pages/ServeiceTest/RouterTest/RouterTest.html"
            });


        //부모 개체 저장
        this.ParentScene = sceneParent;
    }
}