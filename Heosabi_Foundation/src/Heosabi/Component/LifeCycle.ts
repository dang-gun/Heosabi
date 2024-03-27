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
	 * 동기/비동기를 제어하기 위한 비동기 초기화 함수.
	 * 생성자(constructor)가 끝난 직후 호출된다.
	 * 내부에서 await를 사용하여 동기 함수처럼 사용할 수 있다.
	 * 
	 * 재정의시 반듯이 'super.initialize();'를 함수안에서 호출해야 한다.
	 * 대부분의 경우 'initialize()'가 끝나는 시점에서 호출하는 것이 좋다.
	 */
	public initialize = async (): Promise<void> =>
	{
		/** 컴포넌트 코어에 초기화가 끝났음을 알림 */
		Heosabi.instance.ComponentCore.InitializeComplete(this);
	}

	/** 
	 * 컴포넌트가 컴포넌트 관리자(Core)에 등록되고 기본 작업이 끝났을 때 호출되는 함수.
	 */
	public async awake(): Promise<void>
	{

	}

	/**
	 * 화면을 그리기 직전에 호출되는 함수
	 */
	public async start(): Promise<void>
	{

	}

	/**
	 * 화면을 그릴때 호출되는 함수
	 */
	public async render(): Promise<void>
	{
	}

	/**
	 * 화면 그리기가 끝나고나서 호출되는 함수
	 */
	public async lateRender(): Promise<void>
	{
	}

	/** 
	 * 개체를 지울때 호출되는 함수
	 * 사용중인 자원을 해제하는데 사용한다.
	 * 
	 * 자바스크립트에서는 자동으로 소멸자가 호출될 수 없는 구조이다.
	 * SPA에서는 페이지가 이동하면 소멸했다고 가정할 수 있다.
	 * 그러므로 허사비 파운데이션에서는 페이지 이동시 이 소멸자가 호출해야한다.
	 */
	public destroy(): void
	{

	}

	
}