import GlobalHFnd from '@/Global/GlobalHFnd';
import Heosabi_LoggerServeice from './Faculty/Serveice/Heosabi_LoggerServeice';
import Heosabi_RouterHashServeice from './Faculty/Serveice/Heosabi_RouterHashServeice';

import Home from './Pages/Home';
import About from './Pages/About';
import MyPage from './Pages/MyPage';
import NotFound from './Pages/NotFound';
import GlobalHFw from './Global/GlobalHFw';

/**
 * 프로그램 진입점
 * 
 * app.ts을 따로 분리하지 않고 index.ts에 통합함.
 * 파일 이름을 맞추기위해 index.ts로 이름을 지었을뿐 동작은 app로 한다.
 * 파일을 늘리기 싫어서 이런 구조로 만들었다.
 */
export default class App
{
	/** 지금 보여주고 있는 페이지에서 사용할 개체 */
	public PageNow: any = null;

	constructor()
	{
		//메인 찾기
		GlobalHFw.MainDom = document.getElementById("divMain");


		//서비스 등록 *************
		console.log(GlobalHFnd.Title);

		//로거
		GlobalHFnd.Heosabi.Srv.AddLogger(
			new Heosabi_LoggerServeice());

		GlobalHFnd.Logger.Log("테스트 로거");


		//라우터
		GlobalHFnd.Heosabi.Srv.AddRouter(
			new Heosabi_RouterHashServeice());

		GlobalHFnd.Router.on("/", (match) =>
		{
			const home = new Home();
		})
			.on('/about', (match) =>
			{
				const about = new About();
				console.log(match);
			})
			.on('/about', (match) =>
			{
				const about = new About();
				console.log(match);
			})
			.on('/about/:userId', (match) =>
			{
				const about = new About({
					userId: match.params.get('userId'),
				});
				console.log(match);
			})
			.on('/user/:userId/:name', (match) =>
			{
				const mypage = new MyPage({
					userId: match.params.get('userId'),
					name: match.params.get('name'),
				});
				console.log(match);
			})
			.notFound((match) =>
			{
				const notfound = new NotFound();
				console.log(match);
			})
			.resolve();
	}

}

(window as any).app = new App();
