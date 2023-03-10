
/** 바인딩개체를 생성할 때 옵션 */
export interface AxeDomHelperOptionInterface 
{
    /**
     * 옵션 사용여부
     * AxeDomHelper를 사용안하
     * */
    OptionUse: boolean,

    /**
     * A태그의 클릭 이벤트를 취소할지 여부
     * 내부에서 event.preventDefault();를 호출한다.
     * 
     * AtagEventCallback가 null이면 아무동작을 하지 않는다.
     * A태그에 'hrefOnly' 속성이 있다면 이 설정은 무시된다.
     * SPA에서 기존 라우터로 이벤트를 넘겨주려면 이 값을 false로 하고
     * AtagEventCallback에 라우터로 이동하면 된다.
     * */
    AtagClickEventCancel: boolean,

    /** 
     *  A태그를 클릭했을때 할 동작
     *  바인딩된 모든 A태그에 동작한다.
     *  A태그에 'hrefOnly' 속성이 있다면 동작하지 않는다.
     *  AtagEventCancel가 false이고 'hrefOnly' 속성이 있다면 일반 A태그로 동작한다.
     *  타입스크립트에 클릭이벤트가 'MouseEvent'로 되어있지만 실제론 a태그 관련 속성들이 더 있다.
     *  (event  as any)로 변환하여 사용할 것을 권장한다.
     * */
    AtagClickEventCallback: (event: MouseEvent) => void | null
}