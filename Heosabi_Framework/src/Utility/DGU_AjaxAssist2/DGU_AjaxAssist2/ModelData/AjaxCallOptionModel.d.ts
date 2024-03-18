import { AjaxCallContentGetType } from "./AjaxCallContentGetType";
export * from "./AjaxCallContentGetType";
export * from "./AjaxCallFetchOptionInterface";
export * from "./AjaxCallMethodType";
export * from "./AjaxCallOptionCheckCompleteDataModel";
/** 아작스 호출 옵션 모델 */
export declare class AjaxCallOptionModel {
    /**
     * 동기(await) 사용여부
     * 기본값 : false
     */
    await?: boolean;
    /**
     * 컨탠츠 받기 타입.
     * 기본값 : Json
     *
     * 컨탠츠를 리턴받을때 어떤 타입으로 처리해서 받을지를 설정한다.*/
    contentGetType?: AjaxCallContentGetType;
    /** 아작스 요청 메서드 타입
     * 기본값 get
     * GET, HEAD는 바디를 명시적으로 제거해야한다.
     * */
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD";
    /** 사용할 주소 */
    url: string;
    /**
     * 아작스가 호출때(예:fetch) 우선적으로 사용되는 옵션
     * 헤더와 같이 아작스를 호출할때 별도로 변경해야 할 내용이 있으면 넣는다.
     *
     * 만약 본문의 항목과 겹친는 항목이 있으면 이 옵션을 우선적으로 사용해야 한다.
     */
    fetchOption?: RequestInit;
    /**
     * 데이터
     * 여기에 있는 데이터를 우선하며, 없으면  body를 사용한다.
     * */
    data?: null | object;
    /**
     * 바디에 들어갈 내용
     *
     * MethodType.Get를 사용할때는 명시적으로 body를제거하는 작업을 해야한다.
     */
    body?: null | object;
    /**
     * 아작스 요청이 성공했을 때 호출될 함수
     *
     * Promise패턴을 사용할때는 명시적으로 null로 선언해야 한다.
     * 이 함수가 선언되어 있으면 내부에서 데이터 스크림을 먼저 읽으므로
     * Response에 스크림이 비어있는 상태로 전달되어 에러가 발생한다.
     *
     * @param data 성공해서 받은 데이터를 ContentGetType에 맞게 가공한 데이터
     * @param response 요청이 전달한 리스폰스
     */
    success?: (data: null | Response | ArrayBuffer | string | any, response: Response) => void;
    /**
     *  아작스 요청이 실패했을 때 호출될 함수
     *
     * 함수원형
     * (response: Response): void => { };
     * @param response 요청이 전달한 리스폰스
     */
    error?: (response: Response) => void;
}
