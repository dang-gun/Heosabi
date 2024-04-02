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
	 */
	resolve(): RouterServeiceInterface;

	/**
	 * 현재 주소창의 url을 라우터를 통해 변경한다.
	 * 
	 * 허사비 컴포넌트를 사용중이라면 navigate로 다른 페이지를 넘어가기 전에
	 * 기존의 씬을 파괴하기위해 코어(Core 혹은 hsbComponentCore)의 'DestroySceneCompo'를 호출해야 한다.
	 * (호출 함수 : Heosabi.instance.ComponentCore.DestroySceneCompo("[씬ID]");)
	 * 
	 * 해쉬라우터의 경우 이 함수를 거치지 않아도 동작에 문제가 없는데 이런경우 
	 * @param to
	 */
	navigate(to: string): void;

	/** 라우터를 새로고침합니다. */
	refresh?(): void;
}

/** 라우트가 매치될때 실행될 핸들을 위한 구조 */
export type RouterMatchInfoHandler = (matchInfo?: RouterMatchInfoModel) => void