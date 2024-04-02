import { hsbComponentBehaviour, hsbSceneComponent, hsbComponentSettingModel } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';

/** 
 * 허사비 프레임워크에서 사용할 허사비컴포넌트 동작
 * 허사비 파운데이션은 구현이 없으므로 구현은 여기에서 한다.
 * 
 * 허사비 프레임워크의 컴포넌트는 씬에 무조건 소속되어야 한다.
 */
export default class HFwComponent extends hsbComponentBehaviour
{
    //#region 외부로 노출할 이벤트들

    /**
     * OnRenderCompleteCall이 이미 호출됐는지 여부
     * 재정의를 반복하면 OnRenderCompleteCall가 여러번 호출 될 수 있다.
     * 이것을 막기위해 onRender를 다시하기 전까지는 OnRenderCompleteCall가 한번만 호출되도록
     * 이 변수를 이용하여 막는다.
     * 
     * OnRenderCompleteCall가 호출되면 true로 변경되고 onRender에서 랜더링이 시작되면 false가 된다.
     */
    private OnRenderCompleteCallIs: boolean = false;

    /** 랜더링이 끝나고 외부에 노출할 이벤트 */
    public OnRenderComplete: null | (() => void) = null;
    /** 
     * 랜더링이 끝나고 외부에 노출할 이벤트 호출
     * onLateRender가 끝날때 호출해 줘야 한다.
     * 
     * 상속받더라도 이 함수는 한번만 호출될 수 있도록 구성해야 예상치 못한 동작을 막을 수 있다.
     */
    protected OnRenderCompleteCall()
    {
        if (false === this.OnRenderCompleteCallIs
            && this.OnRenderComplete)
        {
            //랜더링 완료 요청을 막는다.
            this.OnRenderCompleteCallIs = true;
            this.OnRenderComplete();
        }
    }



    //#endregion



    /** 이 컴포넌트를 가지고 있는 부모 */
    protected ParentScene: hsbSceneComponent;

    /**
     * 
     * @param sceneParent 부모로 사용할 씬
     * @param settingData 이 컴포넌트 세팅 데이터
     */
    constructor(
        sceneParent: hsbSceneComponent
        , settingData: hsbComponentSettingModel)
    {
        super(settingData);

        //부모 개체 저장
        this.ParentScene = sceneParent;
        //내 소속을 부모로 고정
        this.ParentScene.AddComponent(this);
    }

	public async onRender(): Promise<void>
	{
		if (true === super.TemplateReadyRenderIs)
		{//템플릿을 그릴 준비가 되었다.

            //랜더링 완료 요청을 허용한다.
            this.OnRenderCompleteCallIs = false;

			//랜더링이 시작됐음을 알리고
			this.TemplateRenderingIs = true;
			//랜더링을 한다.
			super.SettingData_domTarget.innerHTML
				= super.SettingData_templateString;


			//랜더링이 끝남을 알림
			this.onLateRender();
		}
    }

    /**
     * @inheritDoc
     * 
     * --- HFwComponent ---
     * HFwComponent를 사용할때는 가능하면 onLateRender를 재정의하지 말고 
     * onLateRenderComplete를 재정의하여 사용한다.
     * (onLateRender를 재정의 하려면 'super.onLateRender()'를 호출해야 하는데 
     * 이렇게 되면 'this.onLateRenderComplete()'가 중복호출 될 수 있다.)
     */
    public async onLateRender(): Promise<void>
    {
        super.onLateRender();

        this.onLateRenderComplete();
    }

    /**
     * onLateRender가 완전히 끝나면 발생하는 이벤트
     * 
     * 이 메서드를 재정의 할때는 super.onLateRenderComplete를 하지 말아야 한다.
     * (OnRenderCompleteCall가 여러번 호출되는 문제가 발생함)
     * 
     * 이 메서드를 재정의 할때는 반듯이 마지막에 super.OnRenderCompleteCall();를 호출해 줘야 한다.
     * ()
     */
    public async onLateRenderComplete(): Promise<void>
    {
        this.OnRenderCompleteCall();
    }
}
