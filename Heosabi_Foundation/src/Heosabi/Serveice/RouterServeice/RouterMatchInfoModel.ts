/** 라우터에 전달되는 매칭 정보 모델 */
/** 라우터 매치 정보 */
export class RouterMatchInfoModel
{
    /** 전체 URL */
    url: string;

    /** 기준이 되는 패스 정보 */
    asPath: string;

    /** ?뒤로 붙는 쿼리스트링 */
    queryString: string;
    /** queryString를 해석한 데이터 */
    query: URLSearchParams | null;

    /** 
     * 파라메타로 판단된 데이터
     * 이름, 값
     */
    params: Map<string, string>;
}
