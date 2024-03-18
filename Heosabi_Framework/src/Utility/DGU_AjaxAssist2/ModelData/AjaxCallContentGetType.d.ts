/**
 *  컨텐츠 받을때 타입.
 *  여기에 정의되지 않은 타입은 처리가 없다.
 * */
export declare const enum AjaxCallContentGetType {
    /** (기본값)Text, String, HTML 등등 텍스트 처리가 가능한 데이터 */
    Text = 0,
    /** 전달된 리스폰스를 그대로 전달한다. */
    Response = 1,
    /** Json */
    Json = 2,
    /** 바이너리 데이터 */
    Binary = 3
}
