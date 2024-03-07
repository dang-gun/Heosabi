import { OverwatchInterface } from "./OverwatchInterface";
import { AxeViewDomInterface, AxeViewDomType } from "./AxeViewDomInterface";
import { OverwatchingOutputType, OverwatchingType } from "./OverwatchingType"

/** 감시 대상  */
export class Overwatch
{
	/** 
	 *  액스뷰에서 지정한 고유번호.
	 *  액스뷰를 바인딩할때 자동으로 입력된다.
	 *  이 값이 중복되면 교체(Replace)가 잘 안될 수 있다.
	 * */
	public MyNumber: number = 0;

	/**
	 * 찾을 이름
	 * OverwatchInterface.Name 참조
	 * */
	public Name: string = "";
	/** 이름 검색용 문자열
	 * 자동생성된다.*/
	public NameFindString: string = "";

	/** 지금 가지고 있는 데이터 */
	private DataNow: string | Function = "";
	/** 
	 *  지금 가지고 있는 데이터 - Replace
	 *  교체(Replace)의 경우 이전값이 빈값이면 동작할 수 없으므로
	 *  임의의 고유값을 생성하여 저장하는 변수다.
	 * */
	private DataNow_ReplaceValue: string = "";

	/**
	 * 실제 동작 get
	 */
	private DataNowGet: Function = () =>
	{
		let sReturn: string | Function = "";
		if (true === this.ValueMonitoringIs)
		{//값 모니터링 전용
			
			if (0 < this._Dom.length)
			{
				//값 모니터링은 돔의 value를 우선한다.
				sReturn = (this._Dom[0].Dom as Attr).value;
			}
		}
		else
		{
			sReturn = this.DataNow;
		}
		return sReturn;
	};
	/**
	 * 실제 동작 set
	 */
	private DataNowSet: Function = function (data: any)
	{
		//기존값 백업
		let OldData: any = this.DataNow;
		let OldReplaceValue: string = this.DataNow_ReplaceValue;

		//새값 저장
		this.DataNow = data;

		if (null !== this._Dom
			&& 0 < this._Dom.length)
		{//돔이 있으면 실행

			//저장된 돔개수만큼 실행
			for (let nDomIdx: number = 0; nDomIdx < this._Dom.length; ++nDomIdx)
			{
				let item: AxeViewDomInterface = this.Dom[nDomIdx];
				//item.innerHTML = this.DataNow;
				if (AxeViewDomType.Node === item.AxeViewDomType)
				{
					(item.Dom as Node).nodeValue = this.DataNow;
				}
				else if (AxeViewDomType.Attr_OneValue === item.AxeViewDomType
					|| AxeViewDomType.Attr_ValueMonitoring === item.AxeViewDomType				)
				{
					(item.Dom as Attr).value = this.DataNow;
				}
				else if (AxeViewDomType.Attr_ReplaceValue === item.AxeViewDomType)
				{
					let attrTemp: Attr = item.Dom as Attr;

					//벨류의 경우 대소문자 구분이 가능하므로 소문자 변환을 하면 안된다.
					//속성을 교체하는 방식인 경우 빈값이 들어오면 교체하지 못하므로
					//임의의 고유값을 생성하여 저장한다.

					

					//이전 데이터를 백업하고
					let OldDataTemp: string = OldReplaceValue;
					if ("" === OldDataTemp)
					{
						OldDataTemp = OldData;
					}

					//현재 데이터 저장
					this.DataNow_ReplaceValue = this.DataNow;
					
					if ("" === this.DataNow_ReplaceValue)
					{//현재 데이터가 비어있다.

						//임의의 값을 생성해 준다.
						this.DataNow_ReplaceValue
							= OldData + "_AxeViewTemp" + this.MyNumber;
					}

					if (true === this.OverwatchingOneIs)
					{//한개만 교체
						attrTemp.value
							= attrTemp.value.replace(
								OldDataTemp
								, this.DataNow_ReplaceValue);
					}
					else
					{//전체 교체
						attrTemp.value
							= this.ReplaceAll(
								attrTemp.value
								, OldDataTemp
								, this.DataNow_ReplaceValue);
					}
				}
				else if (AxeViewDomType.Attr_Valueless === item.AxeViewDomType)
				{
					//값이 없는 값은 속성자체를 바꿔야 한다.
					let elemTemp: HTMLElement = (item.Dom as HTMLElement);
					//기존 이름 제거
					elemTemp.removeAttribute(OldData.toLowerCase());
					//새 이름 추가(값없음)
					elemTemp.setAttribute(this.DataNow, "");
				}
				else if (AxeViewDomType.Attr_Event === item.AxeViewDomType)
				{
					//기존에 연결된 이벤트 제거
					(item.Dom as Node).removeEventListener(item.EventName, item.Event);

					//새로들어온 이벤트 연결
					item.Event = data;
					(item.Dom as Node).addEventListener(item.EventName, item.Event);
				}
				else
				{
					if (true === (data instanceof Element)
						|| true === (data instanceof HTMLElement)
						//|| true === (data instanceof ChildNode)
						|| true === (data instanceof Node))
					{
						(item.Dom as HTMLElement).innerHTML = "";
						(item.Dom as HTMLElement)
							.insertAdjacentElement("beforeend", data);
					}
					else
					{
						(item.Dom as HTMLElement).innerHTML = data;
					}
					
					
				}
			}
			
		}
	};

	/** 
	 * 출력 방식
	 * OverwatchInterface.OverwatchingOutputType 참고
	 * */
	public OverwatchingOutputType: OverwatchingOutputType;
	/** 
	 *  감시 방식
	 *  OverwatchInterface.OverwatchingType 참고
	 * */
	public OverwatchingType: OverwatchingType;
	/** 
	 * 한개만 감시할지 여부 
	 * OverwatchInterface.OverwatchingOneIs 참고
	 */
	public OverwatchingOneIs: boolean = false;;

	/** 
	 *  연결되있는 돔
	 *  단순 출력의 경우 추가하지 않는다.
	 *  여러개가 연결된 경우 각각의 돔이들어있게 된다.
	 *  'Action'이 어트리뷰트에 연결된 경우 대상 dom이 저장되고,
	 *  innerText영역에 있는 경우 임의로 생성된 태그가 지정된다.
	 * */
	private _Dom: AxeViewDomInterface[] = [];
	/** 연결된 돔 */
	public get Dom(): AxeViewDomInterface[]
	{
		return this._Dom;
	}

	/**
	 * 연결된 돔 추가 - Element
	 * @param domPushData
	 */
	public Dom_Push_Element(domPushData: Element)
	{
		this.Dom_Push_HTMLElement(domPushData as HTMLElement);
	}
	/**
	 * 연결된 돔 추가 - HTMLElement
	 * @param domPushData
	 */
	public Dom_Push_HTMLElement(domPushData: HTMLElement)
	{
		this._Dom.push({
			AxeViewDomType: AxeViewDomType.HTMLElement
			, Dom: domPushData
			, EventName: null
		});
	}
	/**
	 * 연결된 돔 추가 - Node
	 * @param domPushData
	 */
	public Dom_Push_Node(domPushData: Node)
	{
		this._Dom.push({
			AxeViewDomType: AxeViewDomType.Node
			, Dom: domPushData
			, EventName: null
		});
	}

	/**
	 * 연결된 돔 추가 - 값없는 속성
	 * 이 함수를 호출하기전에 속성의 이름을 이 감시자가 가지고 있는 값으로 변경해야 한다.
	 * @param domPushData
	 */
	public Dom_Push_Valueless(domPushData: ChildNode)
	{
		this._Dom.push({
			AxeViewDomType: AxeViewDomType.Attr_Valueless
			, Dom: domPushData
			, EventName: null
		});
	}

	/**
	 * 연결된 돔 추가 - 혼자 값을 사용하는 경우
	 * 전체 데이터를 변경한다.
	 * @param domPushData
	 */
	public Dom_Push_OneValue(domPushData: Attr)
	{
		this._Dom.push({
			AxeViewDomType: AxeViewDomType.Attr_OneValue
			, Dom: domPushData
			, EventName: null
		});
	}

	/**
	 * 연결된 돔 추가 - 다른 값이 있어 리플레이스 하는 경우
	 * 감시자외의 다른값이 있다면 변환(리플레이스)로 처리해야 한다.
	 * 이때 같은 값이 있으면 오작동 할 수 있다.
	 * @param domPushData
	 */
	public Dom_Push_ReplaceValue(domPushData: Attr)
	{
		this._Dom.push({
			AxeViewDomType: AxeViewDomType.Attr_ReplaceValue
			, Dom: domPushData
		});
	}

	/**
	 * 이벤트
	 * @param domPushData 이 이벤트를 가지고 있는 부모돔
	 * @param sEventName
	 * @param bPush dom리스트에 추가할지 여부
	 */
	public Dom_Push_Event(
		domPushData: ChildNode
		, sEventName: string
		, bPush: boolean)
	{
		let objThis: Overwatch = this;

		//이름 처리
		if (OverwatchingOutputType.Function_NameRemoveOn === this.OverwatchingOutputType)
		{//이름 앞에 'on'을 뺀다.

			if (2 <= sEventName.length)
			{//이름 길이가 충분하다

				if ("on" === sEventName.substring(0, 2).toLowerCase())
				{//앞에 두글자가 'on'이다.

					//2뒤에 글자만 추출
					sEventName = sEventName.substring(2);
				}
			}
		}

		//돔에 추가할 액스뷰 돔형식 생성
		let avdTemp: AxeViewDomInterface = {
			AxeViewDomType: AxeViewDomType.Attr_Event
			, Dom: domPushData
			, EventName: sEventName
		};

		//이벤트로 사용할 함수
		let funDom = function (event: Event)
		{
			(objThis.data as Function)(event, avdTemp.Dom, objThis);
		};

		avdTemp.Event = funDom;

		if (true === bPush)
		{
			this._Dom.push(avdTemp);
		}

		//이벤트 리스너에 등록
		(avdTemp.Dom as Node).removeEventListener(sEventName, avdTemp.Event);
		(avdTemp.Dom as Node).addEventListener(sEventName, avdTemp.Event);
	}

	/**
	 * 연결된 돔 추가 - 값 모니터링 전용
	 * 이 경우 하나의 돔만 감시할 수 있으므로 맨처음 적중한 한개 만 추가되고 나머지는 무시된다.
	 * @param domPushData
	 */
	public Dom_Push_Attr_ValueMonitoring(domPushData: ChildNode)
	{
		if (0 === this._Dom.length)
		{
			let objThis = this;

			//액스 돔으로 사용할 개체 만들기
			let avdTemp: AxeViewDomInterface = {
				AxeViewDomType: AxeViewDomType.Attr_ValueMonitoring
				, Dom: domPushData
				, EventName: "change"
				, Event: function (event: Event)
				{
					objThis.data = this.value;
				}
			};

			//액스돔 리스트에 추가
			objThis._Dom.push(avdTemp);

			this.ValueMonitoringIs = true;

			//체인지 이벤트 추가
			(avdTemp.Dom as Node).removeEventListener(avdTemp.EventName, avdTemp.Event);
			(avdTemp.Dom as Node).addEventListener(avdTemp.EventName, avdTemp.Event);
		}
	}


	/** 연결된 돔 비우기 */
	public Dom_Clear()
	{
		this._Dom = [];
	}

	/** 
	 * 모니터링 중인 데이터 - 읽기
	 * Action을 읽어 리턴한다.
	 * UI가 갱신되지 않았다면 UI와 다른 값일 수 있다.
	 * */
	public get data()
	{
		return this.DataNowGet();
	}
	/** 
	 *  모니터링 중인 데이터 - 쓰기 
	 *  Action에 데이터를 저장한다.
	 *  설정된 'OverwatchingType'에 따라 화면 갱신이 있을 수 있다.
	 */
	public set data(value: any)
	{
		this.DataNowSet(value);
	}
	/** 지금 가지고 있는 데이터를 다시 출력시도한다.
	 * dom이 새로 설정됐다면 꼭 호출해야 한다.*/
	public DataRefresh()
	{
		this.data = this.data;
	}



	/** 'OverwatchingType'가 한번만 적중해야 하는 옵션인경우 
	 * 맨처음 적중하면 true가 된다.*/
	public OneDataIs: boolean = false;

	/** 값 모니터링 전용인지 여부 */
	private ValueMonitoringIs: boolean = false;

	constructor(target: OverwatchInterface)
	{
		this.Name = target.Name;
		this.NameFindString = "{{" + this.Name + "}}";

		
		if ("" === target.FirstData
			|| " " === target.FirstData)
		{
			if (OverwatchingOutputType.String === this.OverwatchingOutputType)
			{
				//이 값은 절대 비어있으면 안된다.(빈값을 쓰려면 스페이스를 사용하자)
				//빈값으로는 노드를 생성하지 않고 있기 때문이다.
				this.DataNow = " ";
			}
			else if (OverwatchingOutputType.Html === this.OverwatchingOutputType)
			{
				//데이터가 html인경우 빈값을 넣으면 안되고 보이지 않는 요소라라도 하나 넣어야 한다.
				//(<div></div>)
				//안그러면 text 노드가 생성되서 에러가 난다.
				this.DataNow = "<div></div>";
			}
		}
		else
		{
			this.DataNow = target.FirstData;
		}


		

		this.OverwatchingOutputType = target.OverwatchingOutputType;
		this.OverwatchingType = target.OverwatchingType;
		this.OverwatchingOneIs = target.OverwatchingOneIs;
	}

	/**
	 * 지정한 문자열을 모두 찾아 변환한다.
	 * @param sOriData 원본
	 * @param sSearch 찾을 문자열
	 * @param sReplacement 바꿀 문자열
	 * @returns 완성된 결과
	 */
	private ReplaceAll(sOriData: string, sSearch: string, sReplacement: string): string
	{
		return sOriData.replace(new RegExp(sSearch, 'g'), sReplacement);
	}

}

