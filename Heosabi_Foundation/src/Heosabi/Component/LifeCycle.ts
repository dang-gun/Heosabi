import Heosabi from "../Heosabi";

/** 
 * 허사비 컴포넌트 - 라이프 사이클
 * 허사비 컴포넌트가 동작하기위해 필요한 라이프 사이클을 전달받기위한 베이스
 * */
export class LifeCycle
{


	//이 클래스는 호출 순서대로 정렬한다.

	/**
	 * 생성자
	 */
	constructor()
	{

	}


	/** 
	 * 컴포넌트가 컴포넌트 관리자(Core)에 등록되고 기본 작업이 끝났을 때 발생하는 이벤트.
	 */
	public async onAwake(): Promise<void>
	{

	}

	/**
	 * 지정된 템플릿의 준비가 끝났을때 발생하는 이벤트.
	 * 템플릿을 재지정할때도 발생하므로 한번만 발생한다는 보장은 없다.
	 */
	public async onTemplateLoadComplete(): Promise<void>
	{

	}

	/**
	 * 화면을 그리기 직전에 발생하는 이벤트
	 */
	public async onStart(): Promise<void>
	{

	}

	/**
	 * 화면을 그리는 타이밍이 되면 발생하는 이벤트
	 * 
	 * 재정의를 하지 않으면 가지고 있는 데이터로 TemplateCycle에서 자동으로 처리한다.
	 * 함수를 재정의 할때는 반듯이 끝에 'onLateRender'함수를 호출해 줘야 한다.
	 * 
	 * 재정의시 기존 랜더링 기능을 사용하려면 onRender_BaseTemplateCycle을 호출하면 된다.
	 * (TemplateCycle > onRender_BaseTemplateCycle)
	 * 
	 * onRender_BaseTemplateCycle는 랜더링동작이 없으면 false가 리턴된다.
	 * 이것을 이용하여 onLateRender를 호출할지 말지를 결정하면 된다.
	 */
	public async onRender(): Promise<void>
	{
	}

	/**
	 * 화면 그리기가 끝나고나서 발생하는 이벤트
	 * 재정의를 하지 않으면 가지고 있는 데이터로 TemplateCycle에서 자동으로 처리한다.
	 * 
	 * 재정의시 함수의 첫줄에 onLateRender_BaseTemplateCycle을 호출해야 한다.
	 * (TemplateCycle > onLateRender_BaseTemplateCycle)
	 * 그렇지 않으면 랜더링이 무한 반복된다.
	 */
	public async onLateRender(): Promise<void>
	{
	}

	/** 
	 * 개체를 지울때 발생하는 이벤트
	 * 사용중인 자원을 해제하는데 사용한다.
	 * 
	 * 자바스크립트에서는 자동으로 소멸자가 호출될 수 없는 구조이다.
	 * SPA에서는 페이지가 이동하면 소멸했다고 가정할 수 있다.
	 * 그러므로 허사비 파운데이션에서는 페이지 이동시 이 소멸자가 호출해야한다.
	 */
	public onDestroy(): void
	{

	}

	
}