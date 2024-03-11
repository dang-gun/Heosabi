import { LoggerServeiceInterface } from "./LogServeice/LoggerServeiceInterface";
import LoggerEmptyServeice from "./LogServeice/LoggerEmptyServeice";

import { RouterServeiceInterface } from "./RouterServeice/RouterServeiceInterface";



/** 
 * 허사비가 제공할 서비스 리스트
 * 서비스는 생성되어있다는 가정하에 사용할 수 있도록 
 * 비어있는(Empty) 서비스를 인터페이스와 페어로 만들어져 있다.
 */
export default class ServeiceList
{
	/** 로거 */
	public Logger: LoggerServeiceInterface;


	/** URL 라우터 */
	public Router: RouterServeiceInterface;


	constructor()
	{
		//필수 서비스 생성
		//이걸 싱글톤식으로 할지 한번 생성하고 새로 받을지 결정되지 않음
		//일단 한번 생성하고 새로 받는 방식으로 구현

		//로거
		this.Logger = new LoggerEmptyServeice();

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
}