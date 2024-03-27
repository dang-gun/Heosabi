import { LifeCycle } from "./LifeCycle";
import { LifeCycleInfoModel } from "./LifeCycleInfoModel";
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
	private CompoList: LifeCycleInfoModel[] = [];
	
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
	public AddScene = (scene: Scene): void =>
	{
		this.SceneList.push(new SceneInfoModel(scene));
	}


	/**
	 * 관리할 컴포넌트를 추가한다.
	 * @param component
	 */
	public AddComponent = (component: LifeCycle): void =>
	{
		this.CompoList.push(new LifeCycleInfoModel(component));
	}

	/** 
	 * 매 프레임마다 호출되는 함수
	 * 일반적으로 60FPS이다.
	 */
	public Update(): void
	{

	}

	public InitializeComplete = (componentThis: LifeCycle): void =>
	{
		//일치하는 개체가 있는지 찾는다.
		let findCompo: LifeCycleInfoModel
			= this.CompoList
				.find(f => f.MyLifeCycle === componentThis);

		if (findCompo)
		{//있다.

			//awake를 호출해 준다.
			findCompo.AwakeIs = true;
			findCompo.MyLifeCycle.awake();
		}
	}
	
}