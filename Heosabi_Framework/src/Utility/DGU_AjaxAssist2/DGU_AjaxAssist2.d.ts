import { AjaxCallOptionModel } from "./ModelData/AjaxCallOptionModel";
export * from "./ModelData/AjaxCallOptionModel";
/**
 * 아작스 지원2(인증없는 버전)
 * 헤더이 인증용 토큰을 담지 않는 버전.
 * 쿠키와 같은 다른 수단으로 인증할때 사용한다.
 *
 * 헤더에 인증용 토큰을 담고 자동으로 엑세스토큰과 리플레시토큰을 처리하려면 DGU_AjaxAssist2_Auth를 사용해야 한다.
 */
export default class DGU_AjaxAssist2 {
    /** 아작스 호출시 기본값으로 사용할 옵션 */
    CallOptionDefult: AjaxCallOptionModel;
    /**
     * 개체를 초기화하면서 기본값으로 사용할 호출 옵션을 초기화 한다.
     * @param callOptionDefult 초기화에 사용할 기본 호출 옵션
     * 값이 없으면 임의로 세팅된 기본값을 사용한다.
     */
    constructor(callOptionDefult?: AjaxCallOptionModel);
    /**
     * ajax get 요청
     * 동기호출을 할때는 반드시 await로 호출해야 한다.
     * @returns 옵션에 따른 리턴
     * 동기 : callOption.contentGetType에 맞춰 변환된 data.
     * 비동기 : Promise<Response>
     */
    get: (callOption: AjaxCallOptionModel) => Promise<null | Response | ArrayBuffer | string | any>;
    /**
     * ajax post 요청
     * 동기호출을 할때는 반드시 await로 호출해야 한다.
     * @returns 옵션에 따른 리턴
     * 동기 : callOption.contentGetType에 맞춰 변환된 data.
     * 비동기 : Promise<Response>
     */
    post: (callOption: AjaxCallOptionModel) => Promise<null | Response | ArrayBuffer | string | any>;
    /**
     * ajax put 요청
     * 동기호출을 할때는 반드시 await로 호출해야 한다.
     * @returns 옵션에 따른 리턴
     * 동기 : callOption.contentGetType에 맞춰 변환된 data.
     * 비동기 : Promise<Response>
     */
    put: (callOption: AjaxCallOptionModel) => Promise<null | Response | ArrayBuffer | string | any>;
    /**
     * ajax patch 요청
     * 동기호출을 할때는 반드시 await로 호출해야 한다.
     * @param callOption
     * @returns 옵션에 따른 리턴
     * 동기 : callOption.contentGetType에 맞춰 변환된 data.
     * 비동기 : Promise<Response>
     */
    patch: (callOption: AjaxCallOptionModel) => Promise<null | Response | ArrayBuffer | string | any>;
    /**
    * ajax delete 요청
    * 동기호출을 할때는 반드시 await로 호출해야 한다.
    * @param callOption
    * @returns 옵션에 따른 리턴
    * 동기 : callOption.contentGetType에 맞춰 변환된 data.
    * 비동기 : Promise<Response>
    */
    delete: (callOption: AjaxCallOptionModel) => Promise<null | Response | ArrayBuffer | string | any>;
    /**
     * ajax call 요청
     * 동기호출을 할때는 반드시 await로 호출해야 한다.
     *
     * callOption.await옵션에 따라 동기/비동기 호출을 한다.
     * @param callOption
     * @returns 옵션에 따른 리턴
     * 동기 : callOption.contentGetType에 맞춰 변환된 data.
     * 비동기 : Promise<Response>
     */
    call: (callOption: AjaxCallOptionModel) => Promise<null | Response | ArrayBuffer | string | any>;
    /**
     * ajax 호출(동기)
     * 반드시 await로 호출해야 한다.
     * ajax가 응답할때까지 기다렸다가 callOption.contentGetType 설정된 결과값으로 리턴한다.
     *
     * callOption.success, callOption.error가 있다면 우선 호출된다.
     * @param callOption 아작스 호출옵션(비어있는 옵션은 기본옵션이 사용된다.)
     * @returns callOption.contentGetType에 맞춰 변환된 data.
     * 에러가 발생한경우 무조건 Response를 리턴한다.
     */
    callAwait: (callOption: AjaxCallOptionModel) => Promise<null | Response | ArrayBuffer | string | any>;
    /**
     * ajax 호출(비동기)
     * ajax가 응답을 기다리지 않는다.
     * 결과를 callOption.success, callOption.error로 전달받거나
     * Promise패턴을 사용하여 받으면 된다.
     *
     * @param callOption 아작스 호출옵션(비어있는 옵션은 기본옵션이 사용된다.)
     * @returns 사용된 Promise개체
     */
    callAsync: (callOption: AjaxCallOptionModel) => Promise<Response>;
    /**
     * 아작스 호출 옵션 체크
     * @param callOption
     * @returns
     */
    private CallOptionCheck;
    /**
     * json 오브젝트를 URLSearchParams로 변환한다.
     * @param object
     * @returns
     */
    private JsonToSearchParams;
    /**
     * 리스폰스 데이터를 옵션에 맞게 변환하여 리턴한다.
     *
     * @param response
     * @param typeContentGet
     * @returns
     */
    private ResponseToData;
}
