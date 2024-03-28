import Heosabi from "../Heosabi";

import { LifeCycle } from "./LifeCycle";

import { ComponentSettingModel } from "./DataModels/ComponentSettingModel";

/** 
 * 허사비 컴포넌트 - 템플릿 사이클
 * 허사비 컴포넌트가 뷰를 표현하기위한 템플릿을 관리하는 클래스
 * */
export class TemplateCycle extends LifeCycle
{
	/** 
	 * 소속 씬의 ID
	 * 여러 단계를 걸처 컴포넌트가 생성됐다면 가장 가까운 씬이 이 컴포넌트의 부모가 된다.
	 */
	public SceneParentId: string | null = null;
	

	/** 전달받은 템플릿 데이터 */
	private SettingData: ComponentSettingModel;


	//#region 템플릿 준비 체크 관련

	/** 
	 * 템플릿이 로드되었는지 여부 - 원본
	 */
	private TemplateLoadCompleteIs_ori = false;
	/**
	 * 템플릿이 로드되었는지 여부
	 * onTemplateLoadComplete이벤트가 발생하기 직전에 true로 변경된다.
	 * 템플릿을 재설정하면 false로 변경되었다가 로드가 끝나면 다시 true로 바뀐다.
	 */
	public get TemplateLoadCompleteIs() { return this.TemplateLoadCompleteIs_ori }
	private set TemplateLoadCompleteIs(bTemplateLoadComplete: boolean)
	{
		this.TemplateLoadCompleteIs_ori = bTemplateLoadComplete;
		this.TemplateRenderReadyCheck();
	}

	/** 그릴 대상이 있는지 여부 - 원본 */
	private TargetIs_ori = false;
	/** 그릴 대상이 있는지 여부 */
	public get TargetIs() { return this.TargetIs_ori }
	private set TargetIs(bTarget: boolean)
	{
		this.TargetIs_ori = bTarget;
		this.TemplateRenderReadyCheck();
	}

	/** 템플릿를 출력했는지 여부 */
	private TemplateRenderCompleteIs_ori: boolean = false;
	/** 
	 * 템플릿를 출력했는지 여부
	 * onRender가 끝나는 시점, onLateRender가 호출되기 직전에 true로 바뀐다.
	 */
	public get TemplateRenderCompleteIs() { return this.TemplateRenderCompleteIs_ori };
	private set TemplateRenderCompleteIs(bTarget: boolean)
	{
		this.TemplateRenderCompleteIs_ori = bTarget;
		this.TemplateRenderReadyCheck();
	}


	/** 템플릿이 랜더링중인지 여부 */
	private TemplateRenderingIs_ori: boolean = false;
	/** 템플릿이 랜더링중인지 여부 */
	public get TemplateRenderingIs() { return this.TemplateRenderingIs_ori };
	private set TemplateRenderingIs(bTarget: boolean)
	{
		this.TemplateRenderingIs_ori = bTarget;
		this.TemplateRenderReadyCheck();
	}

	/** 
	 * 템플릿이 준비되어 그려질 준비가 되었는지 여부
	 * 그려질 대상(Target DOM)과 그릴 템플릿이 준비되고,
	 * 템플릿이 그려진적이 없으면 true가 된다.
	 */
	private TemplateRenderReadyIs_ori: boolean = false;
	/**
	 * 템플릿이 준비되어 그려질 준비가 되었는지 여부
	 */
	public get TemplateReadyRenderIs() { return this.TemplateRenderReadyIs_ori };
	/**
	 * 템플릿이 준비되어 그려질 준비가 되었는지 여부를 체크한다.
	 * 그려질 대상(Target DOM)과 그릴 템플릿이 준비되면 TemplateReadyRenderIs_ori가 true가 된다.
	 * 단, 이미 템플릿이 그려졌거나(TemplateRenderCompleteIs이 true) 
	 * 랜더링 중이 라면 false가 된다.
	 */
	private TemplateRenderReadyCheck() : void
	{
		if (true === this.TemplateLoadCompleteIs
			&& true === this.TargetIs
			&& false === this.TemplateRenderCompleteIs
			&& false === this.TemplateRenderingIs)
		{
			this.TemplateRenderReadyIs_ori = true;
		}
		else
		{
			this.TemplateRenderReadyIs_ori = false;
		}
	}

	//#endregion

	/**
	 * 생성자
	 */
	constructor(settingData: ComponentSettingModel)
	{
		super();

		//세팅데이터 백업
		this.SettingData = settingData;

		//템플릿을 불러온다.
		this.templateLoad();
	}

	/**
	 * 그려질 타겟을 변경한다.
	 * @param domTarget 이 컴포넌트를 그릴 대상 dom
	 * HTMLElement : 대상의 자식으로 이 컴포넌트를 사용한다.
	 * string : selector. 
	 * 부모가 있다면 부모 기준으로 없으면 전체 기준으로 검색한다.
	 * querySelector로 검색한다.
	 */
	public readonly TargetReset = (target: HTMLElement | string): void =>
	{
		if (true === (target instanceof HTMLElement))
		{//HTMLElement이다.

			this.SettingData.domTarget = target as HTMLElement;
		}
		else
		{
			this.SettingData.domTarget
				= document.querySelector(target as string);
		}
	}

	/**
	 * 템플릿을 재설정 한다.
	 * 템플릿으로 사용할 문자열의 
	 * 
	 * @param templateData 템플릿으로 사용될 'HTML String'이나 'URL String'를 넣을 수 있다.
	 */
	public readonly templateReset = (templateData: string): void =>
	{
		if (!(templateData) || ("" === templateData))
		{//전달된 값이 잘못됐거나
			//비어있다.

			//처리 없음
		}
		else
		{
			if (true === Heosabi.instance.UrlIs(templateData))
			{//url이다.

				this.SettingData.templateString = "";
				this.SettingData.templateUrl = templateData;
			}
			else
			{//url이 아니다.

				//그렇다면 html string취급을 한다.
				this.SettingData.templateString = templateData;
			}

			//템플릿을 불러온다.
			this.templateLoad();
		}
	}

	public readonly templateLoad = (): void =>
	{
		let objThis = this;
		//템플릿 로드가 시작되었으니 로드 완료 체크를 초기화 시킨다.
		objThis.TemplateLoadCompleteIs = false;

		//템플릿을 다운받아야 하는지 판단
		if ((objThis.SettingData.templateString)
			&& ("" !== objThis.SettingData.templateString))
		{//templateString이 있고
			//빈값이 아니다.

			//다운로드 필요없음
			objThis.TemplateLoadCompleteIs = true;
			super.onTemplateLoadComplete.bind(objThis)();
		}
		else if ((objThis.SettingData.templateUrl)
			&& ("" !== objThis.SettingData.templateUrl))
		{//url 개체가 있고
			//빈값이 아니다.

			Heosabi.instance.ComponentCore
				.StringDownload(
					objThis.SettingData.templateUrl
					, (htmlString: string) =>
					{
						//다운받은 템플릿을 저장한다.
						objThis.SettingData.templateString = htmlString;

						//템플릿 준비가 완료됨
						objThis.TemplateLoadCompleteIs = true;
						super.onTemplateLoadComplete.bind(objThis)();
					}
					, (error: any) =>
					{
						Heosabi.instance.Srv.Logger.Func(() =>
						{
							console.log("Template preparation failed.\n url: " + objThis.SettingData.templateUrl);
							console.log(error);
						});
					});

		}
		else
		{
			//템플릿을 동적으로 설정/변경 할 가능성이 있으므로 여기서 별도의 로그를 남기진 않는다.
		}
	}

	/**
	 * TemplateCycle에서의 onRender 동작
	 * @returns 랜더링 성공여부. 아무 동작도 하지 않았다면 false가 출력된다.
	 */
	protected readonly onRender_BaseTemplateCycle = (): boolean =>
	{
		let bReturn = false;

		if (!(this.SettingData.domTarget)
			|| (!(this.SettingData.templateString) || ("" === this.SettingData.templateString)))
		{//돔 타겟이 없거나
			//템플릿 내용이 없다.

			//랜더링 하지 않는다.
		}
		else
		{
			this.TemplateRenderingIs = true;
			//랜더링을 한다.
			this.SettingData.domTarget.innerHTML
				= this.SettingData.templateString;

			bReturn = true;
		}

		return bReturn;
	}
	public onRender = async (): Promise<void> =>
	{
		if (true === this.onRender_BaseTemplateCycle())
		{//랜더링이 성공했다.

			//랜더링이 끝남을 알림
			this.onLateRender();
		}

	}

	/** TemplateCycle에서의 onRender 동작 */
	protected readonly onLateRender_BaseTemplateCycle = (): void =>
	{
		//랜더링이 끝남을 알림
		this.TemplateRenderingIs = false;
		this.TemplateRenderCompleteIs = true;
	}
	public onLateRender = async (): Promise<void> =>
	{
		this.onLateRender_BaseTemplateCycle();
	}
	
}