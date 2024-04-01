import Heosabi from "../Heosabi";


import { Behaviour } from "./Behaviour";
import { BehaviourInfoModel } from "./BehaviourInfoModel";

import { Scene } from "./Scene";
import { SceneInfoModel } from "./SceneInfoModel";


/** 
 * 허사비 컴포넌트 - 코어
 * 재정의 할 수 없는 서비스 취급이므로 서비스의 초기화가 완료되면 생성한다.
 * */
export class Core
{
	/** 가지고있는 씬 정보 리스트 */
	private SceneList: SceneInfoModel[] = [];

	/** 가지고있는 컴포넌트 정보 리스트 */
	private CompoList: BehaviourInfoModel[] = [];
	
	/**
	 * 생성자
	 */
	constructor()
	{

	}

	/**
	 * 관리할 씬을 추가한다.
	 * @param component
	 */
	public AddScene(scene: Scene): void
	{
		this.SceneList.push(new SceneInfoModel(scene));
	}


	/**
	 * 관리할 컴포넌트를 추가한다.
	 * @param component
	 */
	public AddComponent(component: Behaviour): void
	{
		this.CompoList.push(new BehaviourInfoModel(component));
	}

	/** 
	 * 매 프레임마다 호출되는 함수
	 * 일반적으로 60FPS이다.
	 */
	public Update(): void
	{
		this.Update_Render();
	}

	/** 조건이 맞는 컴포넌트의 랜더를 호출한다. */
	private Update_Render(): void
	{
		let listCompo: BehaviourInfoModel[]
			= this.CompoList.filter(f => f.MyBehaviour.TemplateReadyRenderIs);

		if (0 < listCompo.length)
		{
			for (let i = 0; i < listCompo.length; ++i)
			{
				listCompo[i].MyBehaviour.onRender();
			}//end for i
		}
		
	}

	public InitializeComplete(componentThis: Behaviour): void
	{
		//일치하는 개체가 있는지 찾는다.
		let findCompo: BehaviourInfoModel
			= this.CompoList
				.find(f => f.MyBehaviour === componentThis);

		if (findCompo)
		{//있다.

			//awake를 호출해 준다.
			findCompo.AwakeIs = true;
			findCompo.MyBehaviour.onAwake();
		}
	}

	/**
	 * 지정한 파일을 비동기로 다운로드를 시도를 하고 성공한 데이터를 콜백으로 전달한다.
	 * @param url
	 * @param callback
	 * @param callbackError
	 */
	public StringDownload(
		url: string
		, callback: ((htmlString: string) => void)
		, callbackError?: (error: any) => void)
	{
		Heosabi.instance.Srv.Ajax
			.fileHtml(false, url)
			.then(async (response: Response) =>
			{
				callback(await response.text());
			})
			.catch(error =>
			{
				callbackError(error);
			});
	}
	
}