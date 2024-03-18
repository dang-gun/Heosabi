import { AjaxCallOptionModel } from "./AjaxCallOptionModel";
/**
 * 아작스 호출 옵션 체크 완료 데이터 모델
 */
export declare class AjaxCallOptionCheckCompleteDataModel {
    /**
     * 전달받은 옵션을 최종 가공한 데이터
     * 이것을 기준으로 다른 데이터들을 작성한다.
     */
    callOption: AjaxCallOptionModel;
    /**
     * 최종 요청을 보낼 URL
     * URL쿼리가 포함된 최종 URL이다.
     */
    urlTarget: URL;
    /** 완성된 최종 Fetch */
    completeFetch: RequestInit;
}
