

/** 아작스 서비스 인터페이스 */
export interface AjaxServeiceInterface
{
	/** 
	 * 서비스의 표시 정보(비필수)
	 * 서비스의 정보를 표시하기위하 정보로 정보가 필요할때 제공할 용도이다.
	 */
	InfoString: string;

	/**
	 * 지정된 옵션으로 아작스를 호출하여 동작결과를 리턴한다.
	 * @param option
	 * @returns 요청이 전달한 프라미스
	 */
	call(option: AjaxCallOptionModel): Promise<void | Response>;

	/**
	 * GET 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * @param option
	 * @returns 요청이 전달한 프라미스
	 */
	get(option: AjaxCallOptionModel): Promise<void | Response>;
	/**
	 * POST 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * @param option
	 * @returns 요청이 전달한 프라미스
	 */
	post(option: AjaxCallOptionModel): Promise<void | Response>;
	/**
	 * PUT 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * @param option
	 * @returns 요청이 전달한 프라미스
	 */
	put(option: AjaxCallOptionModel): Promise<void | Response>;
	/**
	 * PATCH 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * @param option
	 * @returns 요청이 전달한 프라미스
	 */
	patch(option: AjaxCallOptionModel): Promise<void | Response>;
	/**
	 * DELETE 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * @param option
	 * @returns 요청이 전달한 프라미스
	 */
	delete(option: AjaxCallOptionModel): Promise<void | Response>;

	/**
	 * 파일 다운로드(동기)
	 * @param fileUrl
	 * @returns 다운로드 완료 결과 개체
	 * 다운로드가 실패하면 null
	 */
	file(fileUrl: string): object | null;

	fileAsync(url: string);

	
}

/** 아작스 호출 옵션 모델 */
export class AjaxCallOptionModel
{
	/** 
	 * await 사용여부
	 * 기본값 : false
	 */
	await: boolean = false;

	/** 
	 * 컨탠츠 받기 타입. 
	 * 기본값 : Json
	 * 
     * 컨탠츠를 리턴받을때 어떤 타입으로 처리해서 받을지를 설정한다.*/
	contentGetType: ContentGetType = ContentGetType.Json;

    /** 아작스 요청 메서드 타입
	 * 기본값 get */
	method: string = MethodType.Get;

	/** 사용할 주소 */
    url: string = "";


	/** 
	 * 아작스가 호출때(예:fetch) 우선적으로 사용되는 옵션
	 * 헤더와 같이 아작스를 호출할때 별도로 변경해야 할 내용이 있으면 넣는다.
	 * 
	 * 만약 본문의 항목과 겹친는 항목이 있으면 이 옵션을 우선적으로 사용해야 한다.
	 */
	fetchOption: FetchOptionInterface =
		{
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Accept': 'application/json'
				/** */
				//,'Content-Type': 'application/json;charset=utf-8'
				//'Content-Type': 'text/plain',
				, 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},

			redirect: 'follow',
			referrer: 'no-referrer',

			method: null,
			body: null,
		};

	/** 
	 * 데이터 
	 * 여기에 있는 데이터를 우선하며, 없으면  body를 사용한다.
	 * */
	data: null | object = null;
	/** 
	 * 바디에 들어갈 내용
	 * 
	 * MethodType.Get를 사용할때는 명시적으로 body를제거하는 작업을 해야한다.
	 */
	body: null | object = null;

	/**
	 * 아작스 요청이 성공했을 때 호출될 함수
	 * @param data 성공해서 받은 데이터를 ContentGetType에 맞게 가공한 데이터
	 * @param response 요청이 전달한 리스폰스
	 */
	success = (data: object, response: Response): void => { };
	/**
	 *  아작스 요청이 실패했을 때 호출될 함수
	 * @param response 요청이 전달한 리스폰스
	 */
	error = (response: Response): void => { };
}


/** 
 *  컨탠츠 타입.
 *  여기에 정의되지 않은 타입은 처리가 없다.
 * */
export const enum ContentGetType
{
	/** (기본값)Text, Html 등등 텍스트 처리가 가능한 데이터 */
	Text = 0,
	/** 전달된 리스폰스를 그대로 전달한다. */
	Response = 1,
	/** Json */
	Json = 2,
	/** 바이너리 데이터 */
	Binary = 3,
}


/** 아작스 요청 메서드 타입 */
export class MethodType 
{
	/** 검색(바디를 명시적으로 제거해야함) */
	static Get = "GET";
	/** 생성 */
	static Post: "POST";
	/** 수정(전체) */
	static Put: "PUT";
	/** 수정(일부) */
	static Patch: "PATCH";
	/** 삭제 */
	static Delete: "DELETE";
	/** 검색(바디를 명시적으로 제거해야함) */
	static Head: "HEAD";
};

/** 아작스를 호출할때 사용하는 고급 옵션 */
export interface FetchOptionInterface
{
	/** no-cors, cors, *same-origin */
	mode: string;

	/** // *default, no-cache, reload, force-cache, only-if-cached */
	cache: string;

	/** include, *same-origin, omit */
	credentials: string;

	/** */
	headers: object;

	/** manual, *follow, error */
	redirect: string;

	/** no-referrer, *client */
	referrer: string;

	/** 요청 메서드 타입 */
	method: string | null;
	/** 전달할 바디 내용 */
	body: null | object;
};