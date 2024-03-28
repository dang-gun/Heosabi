
import { ServeiceList } from "./Serveice/ServeiceList";


import { LoggerServeiceInterface } from "./Serveice/LogServeice/LoggerServeiceInterface";
export * from "./Serveice/LogServeice/LoggerServeiceInterface";
import { LoggerEmptyServeice } from "./Serveice/LogServeice/LoggerEmptyServeice";

import { RouterServeiceInterface } from "./Serveice/RouterServeice/RouterServeiceInterface";
export * from "./Serveice/RouterServeice/RouterMatchInfoModel";
export * from "./Serveice/RouterServeice/RouterServeiceInterface";
import { RouterEmptyServeice } from "./Serveice/RouterServeice/RouterEmptyServeice";

import { AjaxServeiceInterface } from "./Serveice/AjaxServeice/AjaxServeiceInterface";
export * from "./Serveice/AjaxServeice/AjaxServeiceInterface";
export * from "./Serveice/AjaxServeice/AjaxCallModel";
import { AjaxEmptyServeice } from "./Serveice/AjaxServeice/AjaxEmptyServeice";


import { Core } from "./Component/Core";
//외부사용자에게 보여지는 명칭과 내부에서 쓰는 명칭이 다르다.
export * from "./Component/HeosabiComponent";




/** 
 * 허사비 파운데이션 
 * 이 클래스는 싱글톤으로 동작하여 프로젝트에 하나만 존제한다.
 * */
export default class Heosabi
{
	/** 인스턴스(싱글톤) */
	public static readonly instance: Heosabi = new Heosabi();

	/** 
	 * 디버그 모드임을 알림
	 * 프론트엔드에서의 디버그 용도이므로 보안이 보장되지 않는다.
	 * 
	 * 로거와 같은 릴리즈 모드에서는 출력할 필요가 없는 정보들이 표시되지 않는다.
	 */
	public Debug: boolean = true;


	// #region 서비스 관련

	/** 제공되는 기능(서비스)(원본) */
	private ServeiceList_Ori: ServeiceList = new ServeiceList();
	/** 제공되는 기능(서비스) 전체 */
	public get Serveice(): ServeiceList
	{
		return this.ServeiceList_Ori;
	}
	/** 제공되는 기능(서비스) 전체 */
	public get Srv(): ServeiceList
	{
		return this.ServeiceList_Ori;
	}

	// #endregion

	/** 컴포넌트 코어 */
	public ComponentCore: Core;
	
	private constructor()
	{
		//컴포넌트 코어는 재정의가 안되므로 바로 생성한다.
		this.ComponentCore = new Core();


		//프레임 감시 시작
		this.Tick();
	}

	private Tick = (): void =>
	{
		// 프레임마다 실행할 코드
		this.ComponentCore.Update();

		// 다음 프레임에서 다시 animate() 함수를 호출
		requestAnimationFrame(this.Tick);
	};



	// #region 허사비 전역에서 사용할 유틸

	/** CreateID에 사용될 카운터 */
	private IdCount: number = 0;
	/** CreateID에 사용될 문자열 */
	private readonly IdString: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	/**
	 * 겹치지 않는 아이디를 생성한다.
	 * 
	 * 100% 겹치지 않지는 않지만 앵간해서 겹치지 않게 구현해야 한다.
	 * @returns
	 */
	public CreateID(): string
	{
		let sResult = "";
		for (let i = 0; i < 8; i++)
		{
			sResult += this.IdString.charAt(Math.floor(Math.random() * this.IdString.length));
		}

		//함수 호출때 마다 1씩 올려준다.
		++this.IdCount;
		return sResult + this.IdCount;
	}


	/**
	 * 지정된 문자열이 URL인지 확인하는 함수
	 * @param str
	 * @returns
	 */
	public UrlIs(str: string): boolean
	{
		try
		{
			new URL(str);
			return true;
		} catch (err)
		{
			return false;
		}
	}

	// #endregion
}