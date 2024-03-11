

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
	on(path: string | Function | RegExp
		, handler?: Function)
		: RouterServeiceInterface;

}