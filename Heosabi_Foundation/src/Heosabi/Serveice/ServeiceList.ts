import { LoggerServeiceInterface } from "./LogServeice/LoggerServeiceInterface";
import { LoggerEmptyServeice } from "./LogServeice/LoggerEmptyServeice";

import { AjaxServeiceInterface } from "./AjaxServeice/AjaxServeiceInterface";
import { AjaxEmptyServeice } from "./AjaxServeice/AjaxEmptyServeice";

import { RouterServeiceInterface } from "./RouterServeice/RouterServeiceInterface";
import { RouterEmptyServeice } from "./RouterServeice/RouterEmptyServeice";

import { hsbComponentCore } from "../Component/HeosabiComponent";




/** 
 * 허사비가 제공할 서비스 리스트
 * 서비스는 생성되어있다는 가정하에 사용할 수 있도록 
 * 비어있는(Empty) 서비스를 인터페이스와 페어로 만들어져 있다.
 */
export class ServeiceList
{
	/** 로거 */
	public Logger: LoggerServeiceInterface;

	/** 아작스 지원 */
	public Ajax: AjaxServeiceInterface;

	/** URL 라우터 */
	public Router: RouterServeiceInterface;

	/** 컴포넌트 코어 */
	public ComponentCore: hsbComponentCore;

	constructor()
	{
		//필수 서비스 생성
		//이걸 싱글톤식으로 할지 한번 생성하고 새로 받을지 결정되지 않음
		//일단 한번 생성하고 새로 받는 방식으로 구현

		//로거
		this.Logger = new LoggerEmptyServeice();

		//아작스
		this.Ajax = new AjaxEmptyServeice();

		//라우터
		this.Router = new RouterEmptyServeice();
	}


	/**
	 * 로거 서비스 등록
	 * @param loggerServeice 등록할 로거
	 * @returns
	 */
	public AddLogger(loggerServeice: LoggerServeiceInterface): ServeiceList
	{
		this.Logger = loggerServeice;

		return this;
	}

	/**
	 * 아작스 서비스 등록
	 * @param loggerServeice 등록할 로거
	 * @returns
	 */
	public AddAjax(ajaxServeice: AjaxServeiceInterface): ServeiceList
	{
		this.Ajax = ajaxServeice;

		return this;
	}

	/**
	 * 라우터 서비스 등록
	 * @param routerServeice 등록할 라우터
	 * @returns
	 */
	public AddRouter(routerServeice: RouterServeiceInterface): ServeiceList
	{
		this.Router = routerServeice;

		return this;
	}

}