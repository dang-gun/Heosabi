import GlobalHFnd from '@/Global/GlobalHFnd';
import Heosabi_LoggerServeice from './Faculty/Serveice/Heosabi_LoggerServeice';
import Heosabi_AjaxAssist2Serveice from './Faculty/Serveice/Heosabi_AjaxAssist2Serveice';
import Heosabi_JxtaHashRouterServeice from './Faculty/Serveice/Heosabi_RouterHashServeice';

import GlobalHFw from '@/Global/GlobalHFw';


import StartupScene from '@/Pages/StartupScene';
import HomeScene from '@/Pages/Home/HomeScene';
import RouterTest from '@Pages/ServeiceTest/RouterTest/RouterTest';
import ComponentTestScene from '@Pages/ComponentTest/ComponentTestScene';
import NotFoundScene from '@/Pages/NotFoundScene';



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
		(GlobalHFnd.Heosabi.Srv.Logger as Heosabi_LoggerServeice).ShowTrace = true;


		//아작스 지원 ***
		GlobalHFnd.Heosabi.Srv.AddAjax(new Heosabi_AjaxAssist2Serveice());


		//라우터 ***
		GlobalHFnd.Heosabi.Srv.AddRouter(
			new Heosabi_JxtaHashRouterServeice());

		//#endregion

		
		//메인 페이지 생성 **********
		GlobalHFw.StartupPage = new StartupScene();
		await GlobalHFw.StartupPage.initialize();

		
		//#region 라우팅 정보 등록 ***
		GlobalHFnd.Router.on("/", (match) =>
		{
			GlobalHFw.StartupPage.SceneSet(HomeScene);
		})
			.on('/home', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(HomeScene);
			})
			.on('/test/router', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(RouterTest);
			})
			.on('/test/router/:userId', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(RouterTest,
					{
						userId: match.params.get('userId'),
					});
			})
			.on('/test/router/:userId/:name', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(RouterTest,
					{
						userId: match.params.get('userId'),
						name: match.params.get('name'),
					});
			})
			.on('/ComponentTest', (match) =>
			{
				GlobalHFw.StartupPage.SceneSet(ComponentTestScene);
			})
			.notFound((match) =>
			{
				GlobalHFw.StartupPage.SceneSet(NotFoundScene);
			})
			.resolve();
		//#endregion


		//주소 새로고침
		//GlobalHFnd.Router.refresh();
	};
}

(window as any).app = new App();
