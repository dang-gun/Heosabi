import Heosabi from "../Heosabi";

import { hsbComponentBehaviour } from "./HeosabiComponent";

/** 
 * 허사비 페이지 컴포넌트 
 * 
 * 페이지는 관리단위로 독립된 공간을 의미한다.
 * MPA으로 예를 들자면 하나하나의 페이지를 의미한다.
 * 필요에 따라 여러 페이지를 조합할 수 있다.
 * 
 * 페이지는 자신의 안에 있는 자식에 대한 훅 역할을 해야 한다.
 * 페이지가 여러개 겹쳐있는 경우 자식 컴포넌트는 상위로 올라가다가 처음 만나 페이지에만 종속되어야 한다.
 * 
 * */
export class Scene
{
	/** 
	 * 가지고있는 컴포넌트 리스트
	 * 이 리스트는 컴포넌트 코어가 가지고 있는 리스트를 전달받아 사용한다.
	 * 자체적으로 관리하지 않는다.
	 */
	private CompList: hsbComponentBehaviour[] = [];
	
	constructor()
	{
		/** 컴포넌트코어에 관리 위임 사이클에 추가 */
		Heosabi.instance.ComponentCore.AddScene(this);
	}

	/**
	 * 관리할 컴포넌트를 추가한다.
	 * @param component
	 */
	public AddComponent = (component: hsbComponentBehaviour): void =>
	{
		this.CompList.push(component);
	}

	public destroy(): void
	{

	}

	/**
	 * 페이지를 화면에 그린다.
	 * @returns
	 */
	public render_FirstAll = async (): Promise<void> =>
	{
		for (let i = 0; i < this.CompList.length; ++i)
		{
			let item: hsbComponentBehaviour = this.CompList[i];
			item.render();
		}
	}
}