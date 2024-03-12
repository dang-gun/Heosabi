
import ServeiceList from "./Serveice/ServeiceList";


import { LoggerServeiceInterface } from "./Serveice/LogServeice/LoggerServeiceInterface";
export * from "./Serveice/LogServeice/LoggerServeiceInterface";
import LoggerEmptyServeice from "./Serveice/LogServeice/LoggerEmptyServeice";

import { RouterServeiceInterface } from "./Serveice/RouterServeice/RouterServeiceInterface";
export * from "./Serveice/RouterServeice/RouterMatchInfoModel";
export * from "./Serveice/RouterServeice/RouterServeiceInterface";
import RouterEmptyServeice from "./Serveice/RouterServeice/RouterEmptyServeice";



/** 허사비 파운데이션 */
export default class Heosabi
{
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

	
	constructor()
	{

	}

}