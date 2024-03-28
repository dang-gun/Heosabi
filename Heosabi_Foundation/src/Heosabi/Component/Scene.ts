import Heosabi from "../Heosabi";


import { Behaviour } from "./Behaviour";
import { SceneBehaviour } from "./SceneBehaviour";

import { ComponentSettingModel } from "./DataModels/ComponentSettingModel";


/** 
 * 허사비 씬
 * 
 * 씬은 관리단위로 독립된 공간을 의미한다.
 * MPA으로 예를 들자면 하나하나의 페이지를 의미한다.
 * 필요에 따라 여러 페이지를 조합할 수 있다.
 * 
 * 페이지는 자신의 안에 있는 자식에 대한 훅 역할을 해야 한다.
 * 페이지가 여러개 겹쳐있는 경우 자식 컴포넌트는 상위로 올라가다가 처음 만나 씬에만 종속되어야 한다.
 * 
 * */
export class Scene
{
	/** 씬을 구분하기위한 고유 아이디 */
	public idScene: string;

	/** 
	 * 이 씬이 사용하는 컴포넌트
	 * 관리하는 것이 아니고 사용하는 컴포넌트다.
	 * 씬이 UI를 가지고 있는 경우 사용한다.
	 */
	private CompScene?: SceneBehaviour | null = null;

	/** 
	 * 가지고있는 컴포넌트 리스트
	 * 이 리스트는 컴포넌트 코어가 가지고 있는 리스트를 전달받아 사용한다.
	 * 자체적으로 관리하지 않는다.
	 */
	private CompList: Behaviour[] = [];
	
	constructor(settingData?: ComponentSettingModel)
	{
		//id 생성
		this.idScene = Heosabi.instance.CreateID();

		/** 컴포넌트코어에 관리 위임 사이클에 추가 */
		Heosabi.instance.ComponentCore.AddScene(this);

		if (settingData)
		{//ComponentSettingModel이 있다.

			//씬용 동작을 생성한다.
			//자동으로 코어에 등록한다.
			this.CompScene = new SceneBehaviour(settingData);
		}
	}

	/**
	 * 관리할 컴포넌트를 추가한다.
	 * @param component
	 */
	public AddComponent = (component: Behaviour): void =>
	{
		this.CompList.push(component);
	}

	public destroy = (): void =>
	{
		this.CompScene = null;
		this.CompList = null;
	}

}