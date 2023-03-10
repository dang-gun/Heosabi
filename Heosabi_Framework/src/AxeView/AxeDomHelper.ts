
import { debug } from "util";
import { AxeDomHelperOptionInterface } from "./AxeDomHelperOptionInterface"


/**
 * 이미 완성된 엘리먼트의 처리를 도와주기 위한 헬퍼
 * */
export class AxeDomHelper
{
	/** 바인딩에 사용할 옵션이 지정되지 않았을때 사용할 기본 옵션 */
	private DomHelperOptionDefult: AxeDomHelperOptionInterface = {
		OptionUse: false
		, AtagClickEventCancel: false
		, AtagClickEventCallback: null
	};

	/** 바인딩에 사용할 저장된 옵션 */
	public DomHelperOption: AxeDomHelperOptionInterface = {
		OptionUse: false
		, AtagClickEventCancel: false
		, AtagClickEventCallback: null
		};
	
	/**
	 * 문자열을 변환하는 개체를 생성한다.
	 * @param jsonDomHelperOption
	 */
	constructor(jsonDomHelperOption?: AxeDomHelperOptionInterface | null)
	{
		if (undefined === jsonDomHelperOption
			|| null === jsonDomHelperOption)
		{//바인딩 기본 옵션이 들어오지 않았다.
			this.DomHelperOption
				= Object.assign({}, this.DomHelperOptionDefult);
		}
		else
		{
			//기본 옵션합치기
			this.DomHelperOption
				= Object.assign({}, this.DomHelperOptionDefult, jsonDomHelperOption);
		}
	}


	/**
	 * 지정된 돔을 저장되있는 옵션에 처리한다.
	 * @param domTarget 처리할 돔
	 */
	public DomHelping(domTarget: HTMLElement): void;
	/**
	 * 지정된 돔을 옵션에 따라 처리한다.
	 * @param domTarget 처리할 돔
	 * @param jsonDomHelperOption 처리 옵션
	 */
	public DomHelping(
		domTarget: HTMLElement
		, jsonDomHelperOption: AxeDomHelperOptionInterface | null)
		: void

	/**
	 * 지정된 돔을 옵션에 따라 처리한다.
	 * @param domTarget 처리할 돔
	 * @param jsonDomHelperOption 처리 옵션
	 */
	public DomHelping(
		domTarget: HTMLElement
		, jsonDomHelperOption?: AxeDomHelperOptionInterface | null)
		: void
	{
		if (undefined === jsonDomHelperOption
			|| null === jsonDomHelperOption)
		{
			//없으면 저장된값 사용
			jsonDomHelperOption = this.DomHelperOption;
		}

		this.DomHelping_ori(domTarget, jsonDomHelperOption);
	}

	/**
	 * 바인딩된 데이터를 한번 더 처리한다.
	 * @param domTarget
	 * @param jsonBindOption
	 */
	private DomHelping_ori(
		domTarget: HTMLElement
		, jsonBindOption: AxeDomHelperOptionInterface)
		: void
	{
		let BindOptionTemp: AxeDomHelperOptionInterface = jsonBindOption;

		if (false === BindOptionTemp.OptionUse)
		{//옵션 사용안함.
			return;
		}


		//A 태그 처리 옵션 ♧♧♧♧♧♧
		domTarget.querySelectorAll("a")
			.forEach((item, key) =>
			{

				let sHrefOnlyTemp = item.getAttribute("hrefOnly");
				if (null === sHrefOnlyTemp)
				{
					sHrefOnlyTemp = item.getAttribute("hrefonly");
				}

				//무조건 이벤트를 걸어서 옵션처리하는게 가장 편하지만....
				//속도면에서는 필요없을때는 이벤트를 걸지 않는게 맞을듯 하여 이렇게 구현함
				if ("" === sHrefOnlyTemp)
				{//hrefOnly가 빈값이다.

					//hrefOnly가 없으면 null
					//있는데 데이터가 없으면 ""
					//속성에 hrefOnly가 있으면 아무런 동작을 하지 않는다.
					//debugger;
				}
				else if (true === BindOptionTemp.AtagClickEventCancel
					&& null !== BindOptionTemp.AtagClickEventCallback)
				{//이벤트는 캔슬
					//콜백 이벤트도 있을때

					item.addEventListener("click", function (event)
					{
						event.preventDefault();
						BindOptionTemp.AtagClickEventCallback(event);
					});
				}
				else if (false === BindOptionTemp.AtagClickEventCancel
					&& null !== BindOptionTemp.AtagClickEventCallback)
				{
					item.addEventListener("click", function (event)
					{
						BindOptionTemp.AtagClickEventCallback(event);
					});
				}
				else if (true === BindOptionTemp.AtagClickEventCancel
					&& null === BindOptionTemp.AtagClickEventCallback)
				{
					item.addEventListener("click", function (event)
					{
						event.preventDefault();
					});
				}

			});
		
	}
}