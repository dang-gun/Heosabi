import { AjaxCallModel } from "./AjaxCallModel";


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
	 * 
	 * 동기 호출을 할때는 반드시 await로 호출해야 한다.
	 * 동기 호출의 결과는 callOption.contentGetType에 맞춰 변환한다.
	 * @param option
	 * @returns 옵션에 따른 리턴
	 * 동기 : callOption.contentGetType에 맞춰 변환된 data.
	 * 비동기 : Promise<Response>
	 */
	call(option: AjaxCallModel): Promise<null | Response | ArrayBuffer | string | any>;

	/**
	 * GET 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * 
	 * 동기 호출을 할때는 반드시 await로 호출해야 한다.
	 * 동기 호출의 결과는 callOption.contentGetType에 맞춰 변환한다.
	 * @param option
	 * @returns 옵션에 따른 리턴
	 * 동기 : callOption.contentGetType에 맞춰 변환된 data.
	 * 비동기 : Promise<Response>
	 */
	get(option: AjaxCallModel): Promise<null | Response | ArrayBuffer | string | any>;
	/**
	 * POST 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * 
	 * 동기 호출을 할때는 반드시 await로 호출해야 한다.
	 * 동기 호출의 결과는 callOption.contentGetType에 맞춰 변환한다.
	 * @param option
	 * @returns 옵션에 따른 리턴
	 * 동기 : callOption.contentGetType에 맞춰 변환된 data.
	 * 비동기 : Promise<Response>
	 */
	post(option: AjaxCallModel): Promise<null | Response | ArrayBuffer | string | any>;
	/**
	 * PUT 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * 
	 * 동기 호출을 할때는 반드시 await로 호출해야 한다.
	 * 동기 호출의 결과는 callOption.contentGetType에 맞춰 변환한다.
	 * @param option
	 * @returns 옵션에 따른 리턴
	 * 동기 : callOption.contentGetType에 맞춰 변환된 data.
	 * 비동기 : Promise<Response>
	 */
	put(option: AjaxCallModel): Promise<null | Response | ArrayBuffer | string | any>;
	/**
	 * PATCH 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * 
	 * 동기 호출을 할때는 반드시 await로 호출해야 한다.
	 * 동기 호출의 결과는 callOption.contentGetType에 맞춰 변환한다.
	 * @param option
	 * @returns 옵션에 따른 리턴
	 * 동기 : callOption.contentGetType에 맞춰 변환된 data.
	 * 비동기 : Promise<Response>
	 */
	patch(option: AjaxCallModel): Promise<null | Response | ArrayBuffer | string | any>;
	/**
	 * DELETE 메서드로 아작스를 호출하여 동작결과를 리턴한다.
	 * 
	 * 동기 호출을 할때는 반드시 await로 호출해야 한다.
	 * 동기 호출의 결과는 callOption.contentGetType에 맞춰 변환한다.
	 * @param option
	 * @returns 옵션에 따른 리턴
	 * 동기 : callOption.contentGetType에 맞춰 변환된 data.
	 * 비동기 : Promise<Response>
	 */
	delete(option: AjaxCallModel): Promise<null | Response | ArrayBuffer | string | any>;

	/**
	 * 파일 다운로드
	 * 
	 * 동기 호출을 할때는 반드시 await로 호출해야 한다.
	 * @param awaitIs 동기 여부.
	 * true일때는 무조건 await으로 호출해야 한다.
	 * @param fileUrl 대상 URL
	 * @returns 다운로드 완료 결과 개체
	 * ArrayBuffer : 파일의 ByteArray
	 * null : 다운로드가 실패
	 * 
	 * 비동기 : Promise<Response>
	 */
	file(awaitIs: boolean, fileUrl: string): Promise<ArrayBuffer | Response | null>;

	/**
	 * HTML 파일을 다운받고 내용을 string로 리턴한다.
	 * 
	 * 동기 호출을 할때는 반드시 await로 호출해야 한다.
	 * @param awaitIs 동기 여부.
	 * true일때는 무조건 await으로 호출해야 한다.
	 * @param fileUrl 대상 URL
	 * @returns 다운로드 완료 결과 개체
	 * string : 다운로드한 HTML내용
	 * null : 다운로드가 실패
	 * 
	 * 비동기 : Promise<Response>
	 */
	fileHtml(awaitIs: boolean, fileUrl: string): Promise<string | Response | null>;
}