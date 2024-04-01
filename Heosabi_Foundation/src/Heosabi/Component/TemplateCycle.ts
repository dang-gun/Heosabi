import Heosabi, { readonly } from "../Heosabi";

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
	

	//#region 템플릿 데이터 관련 **********************

	/** 전달받은 템플릿 데이터 */
	private SettingData: ComponentSettingModel;

	/** 세팅데이터에 있는 돔타겟에 접근 */
	protected get SettingData_domTarget() { return this.SettingData.domTarget; };
	/** 세팅데이터에 있는 템플릿 문자열에 접근 */
	protected get SettingData_templateString() { return this.SettingData.templateString; };

	//#endregion


	//#region 템플릿 준비 체크 관련 **********************

	
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
	protected set TemplateLoadCompleteIs(bTemplateLoadComplete: boolean)
	{
		this.TemplateLoadCompleteIs_ori = bTemplateLoadComplete;
		this.TemplateRenderReadyCheck();
	}

	/** 그릴 대상이 있는지 여부 - 원본 */
	private TargetIs_ori = false;
	/** 그릴 대상이 있는지 여부 */
	public get TargetIs() { return this.TargetIs_ori }
	protected set TargetIs(bTarget: boolean)
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
	protected set TemplateRenderCompleteIs(bTarget: boolean)
	{
		this.TemplateRenderCompleteIs_ori = bTarget;
		this.TemplateRenderReadyCheck();
	}


	/** 템플릿이 랜더링중인지 여부 */
	private TemplateRenderingIs_ori: boolean = false;
	/** 템플릿이 랜더링중인지 여부 */
	public get TemplateRenderingIs() { return this.TemplateRenderingIs_ori };
	protected set TemplateRenderingIs(bTarget: boolean)
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
	protected set TemplateReadyRenderIs(value: boolean) { this.TemplateRenderReadyIs_ori = value };
	/**
	 * 템플릿이 준비되어 그려질 준비가 되었는지 여부를 체크한다.
	 * 그려질 대상(Target DOM)과 그릴 템플릿이 준비되면 TemplateReadyRenderIs_ori가 true가 된다.
	 * 단, 이미 템플릿이 그려졌거나(TemplateRenderCompleteIs이 true) 
	 * 랜더링 중이 라면 false가 된다.
	 */
	protected TemplateRenderReadyCheck() : void
	{
		if (true === this.TemplateLoadCompleteIs
			&& true === this.TargetIs
			&& false === this.TemplateRenderCompleteIs
			&& false === this.TemplateRenderingIs)
		{
			this.TemplateReadyRenderIs = true;
		}
		else
		{
			this.TemplateReadyRenderIs = false;
		}

		//Heosabi.instance.Srv.Logger.Info(`◇◇◇ TemplateLoadCompleteIs:${this.TemplateLoadCompleteIs}, TargetIs:${this.TargetIs}, TemplateRenderCompleteIs:${this.TemplateRenderCompleteIs}, TemplateRenderingIs:${this.TemplateRenderingIs},`)
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

		//타겟 다시 세팅
		this.TargetReset();
	}

	/**
	 * 그려질 타겟을 변경한다.
	 * @param domTarget 이 컴포넌트를 그릴 대상 dom
	 * HTMLElement : 대상의 자식으로 이 컴포넌트를 사용한다.
	 * string : selector. 
	 * 부모가 있다면 부모 기준으로 없으면 전체 기준으로 검색한다.
	 * querySelector로 검색한다.
	 */
	//@readonly
	public TargetReset(target?: HTMLElement | string): void 
	{
		if (!(target))
		{//전달 개체가 없으면 처리 없음

		}
		else if (true === (target instanceof HTMLElement))
		{//HTMLElement이다.

			this.SettingData.domTarget = target as HTMLElement;
		}
		else
		{
			this.SettingData.domTarget
				= document.querySelector(target as string);
		}

		if (true === (this.SettingData.domTarget instanceof HTMLElement))
		{//타겟이 재대로 지정이 됐으면
			this.TargetIs = true;
		}
	}


	/**
	 * 템플릿을 재설정 한다.
	 * 템플릿으로 사용할 문자열을 판단하여 
	 * URL이면 templateLoad를 호출하고
	 * 문자열이면 저장 처리를 한다.
	 * 
	 * @param templateData 템플릿으로 사용될 'HTML String'이나 'URL String'를 넣을 수 있다.
	 */
	//@readonly
	public templateReset(templateData: string): void
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

	/**
	 * 저장되어있는 값에 따라 템플릿을 로드한다.
	 * 기존 저장값이 있으면 동작하지 않는다.(templateReset으로 재설정해야함.)
	 * 
	 * 다운로드가 필요하다면 AjaxServeiceInterface를 통해 다운로드 된다.
	 * 
	 * 템플릿이 설정되거나 다운로드가 끝나면 super.onTemplateLoadComplete를 호출한다.
	 */
	//@readonly
	public templateLoad(): void
	{
		let objThis = this;
		let funcOnTemplateLoadComplete = super.onTemplateLoadComplete;


		//템플릿 로드가 시작되었으니 로드 완료 체크를 초기화 시킨다.
		objThis.TemplateLoadCompleteIs = false;

		//템플릿을 다운받아야 하는지 판단
		if ((objThis.SettingData.templateString)
			&& ("" !== objThis.SettingData.templateString))
		{//templateString이 있고
			//빈값이 아니다.

			//다운로드 필요없음
			objThis.TemplateLoadCompleteIs = true;
			funcOnTemplateLoadComplete();
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
						funcOnTemplateLoadComplete();
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

	public async onRender(): Promise<void>
	{
		
		//랜더링이 끝남을 알림
		this.onLateRender();
	}

	public async onLateRender(): Promise<void>
	{
		//랜더링이 끝남을 알림
		this.TemplateRenderingIs = false;
		this.TemplateRenderCompleteIs = true;

		super.onLateRender();
	}
	
}