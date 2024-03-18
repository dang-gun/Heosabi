/** 아작스를 호출할때 사용하는 고급 옵션 */
export interface AjaxCallFetchOptionInterface {
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
}
