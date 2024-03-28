
/** 컴포넌트를 세팅하기위해 사용하는 모델 */
export class ComponentSettingModel
{
    /** 
     * 이 컴포넌트가 그려질 대상
     * 
     */
    public domTarget?: HTMLElement | null = null;

    /** 
     * 템플릿으로 사용할 문자열(우선순위 : 1)
     * 비어있다면 다음 순위 데이터를 사용한다.
     * 
     * 구현에서는 templateUrl를 호출하여 전달받은 데이터를 여기에 넣고
     * 이 변수를 통한 일괄처리를 하게 된다.
     */
    public templateString?: string | null = null;

    /** 
     * 템플릿으로 사용할 URL(우선순위 : 2) 
     * 비어있다면 다음 순위 데이터를 사용한다.
     * 
     * 여기에 지정된 URL에서 다운로드한 템플릿을 templateString에 넣어준다.
     */
    public templateUrl?: string | null = null;


}