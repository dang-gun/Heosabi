import { Behaviour } from "./Behaviour";
import { Scene } from "./Scene";

import { ComponentSettingModel } from "./DataModels/ComponentSettingModel";

/** 컴포넌트 동작 */
export class SceneBehaviour extends Behaviour
{
    //#region 외부로 노출할 이벤트들

    /** 랜더링이 끝나고 외부에 노출할 이벤트 */
    public OnRenderComplete: null | (() => void) = null;
    /** 랜더링이 끝나고 외부에 노출할 이벤트 호출 */
    protected OnRenderCompleteCall()
    {
        if (this.OnRenderComplete)
        {
            this.OnRenderComplete();
        }
    }
    //#endregion


    /** 이 컴포넌트를 가지고 있는 부모 */
    private ParentScene: Scene;



    /** Behaviour의 생성자가 끝나면  initialize가 동작한다.  */
    constructor(sceneParent: Scene, settingData : ComponentSettingModel )
    {
        super(settingData);

        

        //부모 개체 저장
        this.ParentScene = sceneParent;
    }

    /** 
     * 동기/비동기를 제어하기 위한 비동기 초기화 함수.
     * 생성자(constructor)가 끝난 직후 호출된다.
     * 내부에서 await를 사용하여 동기 함수처럼 사용할 수 있다.
     * 
     * 재정의시 반듯이 'initialize_BaseBehaviour();'를 함수안에서 호출해야 한다.
     * 대부분의 경우 'initialize()'가 끝나는 시점에서 호출하는 것이 좋다.
     */
    public async initialize(): Promise<void>
    {
        this.initialize_BaseBehaviour();
    }


    public async onLateRender(): Promise<void>
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