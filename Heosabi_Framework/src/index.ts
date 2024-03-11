import GlobalHFnd from '@/Global/GlobalHFnd';
import DGU_Heosabi_Logger from '../Utility/DGU_Heosabi_Logger';

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
		let divMain = document.getElementById("divMain");
		divMain.innerHTML = "Test";


		//서비스 등록 *************
		console.log(GlobalHFnd.Title);

		//로거
		GlobalHFnd.Heosabi.Srv.AddLogger(
			new DGU_Heosabi_Logger());

		GlobalHFnd.Heosabi.Srv.Logger.Log("테스트 로거");
	}

}

(window as any).app = new App();
