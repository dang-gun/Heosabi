

import AxeView, { Overwatch, OverwatchInterface, OverwatchingOutputType, OverwatchingType } from "./AxeView/AxeView";



export default class StartUp
{
	/** 액스뷰 개체 */
	AxeView: AxeView = new AxeView();

	//AxeView 테스트용 변수
	arrTarget: Overwatch[] = [];

	constructor()
	{
		//주석 제거
		this.AxeView.CommentDelete = true;

		//액스뷰 테스트****
		this.arrTarget.push(
			//단순 문자열 검색
			new Overwatch({
				Name: "StringTest"
				, FirstData: "문자열 출력!!"
				, OverwatchingOutputType: OverwatchingOutputType.String
				, OverwatchingType: OverwatchingType.OutputFirst
				, OverwatchingOneIs: true
			}));

		this.arrTarget.push(
			//단순 html 검색
			new Overwatch({
				Name: "HtmlTest"
				, FirstData: "<h3>Html 출력!</h3>"
				, OverwatchingOutputType: OverwatchingOutputType.Html
				, OverwatchingType: OverwatchingType.OutputFirst
				, OverwatchingOneIs: true
			}));

		this.arrTarget.push(
			//모니터링 문자열 검색
			new Overwatch({
				Name: "MonitoringString"
				, FirstData: "모니터링중(문자열)"
				, OverwatchingOutputType: OverwatchingOutputType.String
				, OverwatchingType: OverwatchingType.Monitoring
				, OverwatchingOneIs: false
			}));

		this.arrTarget.push(
			//모니터링 문자열 검색
			new Overwatch({
				Name: "MonitoringHtml"
				, FirstData: "<h1>모니터링중(Html)</h1>"
				, OverwatchingOutputType: OverwatchingOutputType.Html
				, OverwatchingType: OverwatchingType.Monitoring
				, OverwatchingOneIs: false
			}));

		this.arrTarget.push(
			new Overwatch({
				Name: "MonitoringAttr1"
				, FirstData: "attrTest1"
				, OverwatchingOutputType: OverwatchingOutputType.String
				, OverwatchingType: OverwatchingType.Monitoring
				, OverwatchingOneIs: false
			}));

		this.arrTarget.push(
			//모니터링 문자열 검색
			new Overwatch({
				Name: "MonitoringAttr2"
				, FirstData: "attrTest2"
				, OverwatchingOutputType: OverwatchingOutputType.String
				, OverwatchingType: OverwatchingType.Monitoring
				, OverwatchingOneIs: false
			}));

		this.arrTarget.push(
			//모니터링 문자열 검색
			new Overwatch({
				Name: "FunctionTest"
				, FirstData: function (
					sender: ChildNode
					, event: Event
					, objThis: Overwatch)
				{
					alert("바인딩됨");
					console.log(sender);
					console.log(event);
					console.log(objThis);
					debugger;
				}
				, OverwatchingOutputType: OverwatchingOutputType.Function_NameRemoveOn
				, OverwatchingType: OverwatchingType.Monitoring
				, OverwatchingOneIs: false
			}));

		this.arrTarget.push(
			//모니터링 문자열 검색
			new Overwatch({
				Name: "CssTest"
				, FirstData: "CssAdd"
				, OverwatchingOutputType: OverwatchingOutputType.String
				, OverwatchingType: OverwatchingType.Monitoring
				, OverwatchingOneIs: false
			}));

		this.arrTarget.push(
			//모니터링 문자열 검색
			new Overwatch({
				Name: "MonitoringAttr3"
				, FirstData: "attrTest3"
				, OverwatchingOutputType: OverwatchingOutputType.String
				, OverwatchingType: OverwatchingType.Monitoring
				, OverwatchingOneIs: false
			}));

		this.arrTarget.push(
			//모니터링 문자열 검색
			new Overwatch({
				Name: "MonitoringAttr4"
				, FirstData: "attrTest4"
				, OverwatchingOutputType: OverwatchingOutputType.String
				, OverwatchingType: OverwatchingType.Monitoring_AttrValue
				, OverwatchingOneIs: false
			}));

		//돔 재생성 및 설정된 뷰모델 연결
		this.AxeView.BindOverwatch(
			document.getElementById("divAxeViewTset")
			, this.arrTarget);


		//돔 추가 처리
		this.AxeView.DomHelper(
			document.getElementById("divAxeViewTset")
			, {
				OptionUse: true
				, AtagClickEventCancel: true
				, AtagClickEventCallback: function (event)
				{
					console.log("A tag click : " + (event.target as any).pathname);
				}
			});

		document.getElementById("btnClick").onclick = this.TestCilck;
		document.getElementById("btnClick2").onclick = this.TestCilck2;
	}

	TestCilck = () =>
	{
		this.arrTarget[2].data = "클릭했다!!!";
		this.arrTarget[3].data = "<h2>클릭했다!!HTML</h2>";

		this.arrTarget[4].data = "Click1";
		this.arrTarget[5].data = "Check2";

		this.arrTarget[6].data = function (
			sender: ChildNode
			, event: Event
			, objThis: Overwatch)
		{
			alert("재바인딩됨");
			console.log(sender);
			console.log(event);
			console.log(objThis);
		};

		this.arrTarget[7].data = "";

		let sTemp1 = document.getElementById("divTemp1").getAttribute("axeTest2");
		document.getElementById("divTemp1").setAttribute("axeTest2", sTemp1 + " AddTest");
		this.arrTarget[8].data = "Click4";

		console.log("클릭함 : " + this.arrTarget[9].data);
		//this.arrTarget[9].data = "asdfasdfd11";
	}

	TestCilck2 = () =>
	{
		this.arrTarget[7].data = "ReClick";
	}

}


const app = new StartUp();
