import Heosabi from "../Heosabi";


import { Behaviour } from "./Behaviour";

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
 * 컴포넌트 리스트는 씬에서 관리되어야 하므로 씬자체의 UI를 위한 컴포넌트는 하위 컴포넌트와 독립적으로 동작해야 한다.
 * */
export class Scene
{
	/** 씬을 구분하기위한 고유 아이디 */
	public idScene: string;

	//#region

	/** 
	 * UI담당 컴포넌트
	 * 씬 자체의 UI만 담당한다.
	 * 파생된 UI는 별도 컴포넌트로 관리된다.
	 */
	public SceneComponent: null | Behaviour = null;

	//#endregion

	
	/** 
	 * 가지고있는 컴포넌트 리스트
	 * 이 리스트는 컴포넌트 코어가 가지고 있는 리스트를 전달받아 사용한다.
	 * 자체적으로 관리하지 않는다.
	 */
	private CompList: Behaviour[] = [];
	
	constructor()
	{
		//id 생성
		this.idScene = Heosabi.instance.CreateID();

		/** 컴포넌트코어에 관리 위임 사이클에 추가 */
		Heosabi.instance.ComponentCore.AddScene(this);
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
		this.CompList = null;
	}

}