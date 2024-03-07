/** 액스뷰에서 사용하는 돔 형식 */
export interface AxeViewDomInterface
{
	/**
	 * 대상 돔
	 * 사용하는 옵션에 따라 각이 다른 오브젝트가 저장될 수 있다.
	 * */
	Dom: HTMLElement | Node | Attr | Function;

	/** 액스뷰에서 동작할 방식 */
	AxeViewDomType: AxeViewDomType;

	/** 이벤트 이름이 필요할때 추가한다. */
	EventName?: string | null;

	/** 이벤트 내용이 필요할때 추가한다. */
	Event?: EventListener | null;

	//패턴 기능 추가 필요
	//문자열일때만 동작함
	//정규식 : /{{abcd.*?}}/g
	//테스트 : {{addsd}} {{A}} {{abcd:aabbc}},  {{a111 : a2222}} {{abcd:a11212211/2**2abbc}}
	//패턴명 : 구분할 패턴명. 콜론(:)뒤에 나오는 문자열 -> 바인딩할때만 사용
	//함수 : 해당 패턴명에 사용될 함수
}


/** 액스뷰에서 동작할 방식 */
export const enum AxeViewDomType
{
	/** 없음. 동작하지 않음 */
	none = 1,

	/** HTMLElement로 변환하여 동작함 */
	HTMLElement,

	/** Node로 변환하여 동작함 */
	Node,

	/** 속성 - 값없는 속성 */
	Attr_Valueless,
	/** 속성 - 값이 하나만 있는 속성 */
	Attr_OneValue,
	/** 속성 - 값을 교체해야 하는 경우 */
	Attr_ReplaceValue,

	/** 속성 - 이벤트 */
	Attr_Event,

	/** 속성 - 값 모니터링(UI 우선), 전체 교체로만 동작함 */
	Attr_ValueMonitoring,
}
