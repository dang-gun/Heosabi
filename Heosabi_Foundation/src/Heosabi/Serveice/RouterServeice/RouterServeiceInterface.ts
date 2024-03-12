import { RouterMatchInfoModel } from "./RouterMatchInfoModel";


/** 라우트 서비스 인터페이스 */
export interface RouterServeiceInterface
{
	/** 
	 * 서비스의 표시 정보(비필수)
	 * 서비스의 정보를 표시하기위하 정보로 정보가 필요할때 제공할 용도이다.
	 */
	InfoString: string;


	/**
	 * 라우드의 동작을 추가한다.
	 * @param path 바인딩할 경로
	 * @param handler 
	 * @returns 체인에 사용할 이 개체
	 */
	on(path: string | RegExp
		, handler: RouterMatchInfoHandler)
		: RouterServeiceInterface;


	/**
	 * Not Found 페이지를 추가한다.
	 * @param handler
	 * @returns
	 */
	notFound(handler?: RouterMatchInfoHandler): RouterServeiceInterface;

	/**
	 * 라우팅을 시작한다.
	 * @param path
	 * @param resolveOptions
	 */
	resolve(): RouterServeiceInterface;

	/**
	 * 현재 주소창의 url을 변경해주는 함수이다.
	 * @param to
	 * @param options
	 */
	navigate(to: string);
}

/** 라우트가 매치될때 실행될 핸들을 위한 구조 */
export type RouterMatchInfoHandler = (matchInfo?: RouterMatchInfoModel) => void