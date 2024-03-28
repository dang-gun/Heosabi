import Heosabi from "../Heosabi";

import { LifeCycle } from "./LifeCycle";
import { TemplateCycle } from "./TemplateCycle";

import { ComponentSettingModel } from "./DataModels/ComponentSettingModel";




/** 컴포넌트 동작 */
export class Behaviour extends TemplateCycle
{
    

    /** Behaviour의 생성자가 끝나면  initialize가 동작한다.  */
    constructor(settingData: ComponentSettingModel)
    {
        super(settingData);

        

        /** 컴포넌트코어에 관리 위임 사이클에 추가 */
        Heosabi.instance.ComponentCore.AddComponent(this);

        //초기화 호출
        this.initialize();
    }

    /** Behaviour의 비동기 초기화 */
    protected readonly initialize_BaseBehaviour = async (): Promise<void> =>
    {
        /** 컴포넌트 코어에 초기화가 끝났음을 알림 */
        Heosabi.instance.ComponentCore.InitializeComplete(this);
    }

    /** 
     * 동기/비동기를 제어하기 위한 비동기 초기화 함수.
     * 생성자(constructor)가 끝난 직후 호출된다.
     * 내부에서 await를 사용하여 동기 함수처럼 사용할 수 있다.
     * 
     * 재정의시 반듯이 'initialize_BaseBehaviour();'를 함수안에서 호출해야 한다.
     * 대부분의 경우 'initialize()'가 끝나는 시점에서 호출하는 것이 좋다.
     */
    public initialize = async (): Promise<void> =>
    {
        this.initialize_BaseBehaviour();
    }

    //public TemplateReset(templateData: string)
    //{

    //}
    
}