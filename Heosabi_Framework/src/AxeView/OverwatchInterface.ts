import { OverwatchingOutputType, OverwatchingType } from "./OverwatchingType"

/** 감시자 인터페이스 */
export interface OverwatchInterface
{
	/** 
	 * 찾을 이름
	 * 중괄호 두개({{이름}})로 감싸있는 이름을 찾는다.
	 * 이 값은 대소문자를 구분해야한다.
	 * ☆주의☆ html은 속성(attribute)으로 사용할때는 케밥케이스(kebab-case)나 소문자로 사용해야 한다.
	 * html을 변환할때 속성은 소문자로 변환된다. (이로인해 문자 인식을 못하는 경우가 생길 수 있다.)
	 * */
	Name: string,
	/** 처음 바인딩될 동작
	 * 이벤트를 제외하면 문자열을 사용한다.
	 * 이벤트 함수는 'function (sender, event, owThis)' 이렇게 데이터가 전달된다.
	 * event : 이벤트 발생에 사용된 이벤트 개체(이벤트에 따라 다른 개체가 넘어옴)
	 * sender : 연결된 엘리먼트 개체
	 * owThis : 이 함수에 연결된 감시자 개체(Overwatch) */
	FirstData: string | Function,

	/** 감시 타입 */
	OverwatchingOutputType: OverwatchingOutputType,
	/** 감시 방식 */
	OverwatchingType: OverwatchingType,
	/** 
	 *  한개만 감시할지 여부
	 *  true이면 일치하는것 하나만 나와도 뒤에 는 무시한다.
	 *  매칭 순서가 TextNode가 가장 우선이므로 눈으로 보이는 순서와 다를수 있다.
	 * */
	OverwatchingOneIs: boolean,
}