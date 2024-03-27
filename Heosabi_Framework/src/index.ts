import GlobalHFnd from '@/Global/GlobalHFnd';
import Heosabi_LoggerServeice from './Faculty/Serveice/Heosabi_LoggerServeice';
import Heosabi_AjaxAssist2Serveice from './Faculty/Serveice/Heosabi_AjaxAssist2Serveice';
import Heosabi_JxtaHashRouterServeice from './Faculty/Serveice/Heosabi_RouterHashServeice';

import GlobalHFw from '@/Global/GlobalHFw';


import StartupPage from '@Pages//StartupPage';
import Home from '@Pages/Home/Home';
import RouterTest from '@Pages/ServeiceTest/RouterTest/RouterTest';
import NotFound from '@Pages/NotFound';


import DGU_AjaxAssist2 from '@Util/DGU_AjaxAssist2/DGU_AjaxAssist2';



/**
 * 프로그램 진입점
 * 
 * app.ts을 따로 분리하지 않고 index.ts에 통합함.
 * 파일 이름을 맞추기위해 index.ts로 이름을 지었을뿐 동작은 app로 한다.
 * 파일을 늘리기 싫어서 이런 구조로 만들었다.
 */
export default class App
{
	
	/** 프로그램 진입점 */
	constructor()
	{	
		this.initialize();	
	}

	/** 동기/비동기를 제어하기 위한 비동기 초기화 함수 */
	initialize = async () =>
	{
		//사용할 영역 찾기
		GlobalHFw.AppDom = document.getElementById("divApp");



		//#region 서비스 등록 **************
		//모든 서비스는 여기에서 등록한다.
		//console.log(GlobalHFnd.Title);

		//로거 ***
		GlobalHFnd.Heosabi.Srv.AddLogger(
			new Heosabi_LoggerServeice());
		//GlobalHFnd.Logger.Log("테스트 로거");


		//아작스 지원 ***
		GlobalHFnd.Heosabi.Srv.AddAjax(new Heosabi_AjaxAssist2Serveice());


		//라우터 ***
		GlobalHFnd.Heosabi.Srv.AddRouter(
			new Heosabi_JxtaHashRouterServeice());

		//#endregion

		
		//메인 페이지 생성 **********
		GlobalHFw.StartupPage = new StartupPage();
		await GlobalHFw.StartupPage.initialize();

		
		//#region 라우팅 정보 등록 ***
		GlobalHFnd.Router.on("/", (match) =>
		{
			GlobalHFw.StartupPage.SceneSet(new Home());
		})
			.on('/home', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(new Home());
			})
			.on('/test/router', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(new RouterTest());
			})
			.on('/test/router/:userId', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(new RouterTest({
					userId: match.params.get('userId'),
				}));
			})
			.on('/test/router/:userId/:name', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(new RouterTest({
					userId: match.params.get('userId'),
					name: match.params.get('name'),
				}));
			})
			.notFound((match) =>
			{
				GlobalHFw.StartupPage.SceneSet(new NotFound());
			})
			.resolve();
		//#endregion


		//주소 새로고침
		GlobalHFnd.Router.refresh();
	};
}

(window as any).app = new App();
