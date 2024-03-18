/** 아작스 요청 메서드 타입 */
export declare class AjaxCallMethodType {
    /** 검색(바디를 명시적으로 제거해야함) */
    static readonly Get: "GET";
    /** 생성 */
    static readonly Post: "POST";
    /** 수정(전체) */
    static readonly Put: "PUT";
    /** 수정(일부) */
    static readonly Patch: "PATCH";
    /** 삭제 */
    static readonly Delete: "DELETE";
    /** 검색(바디를 명시적으로 제거해야함) */
    static readonly Head: "HEAD";
}
