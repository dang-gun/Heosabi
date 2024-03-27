
export default class App
{
	constructor()
	{
		//메뉴 추가
		let divMain = document.getElementById("divMain");
		divMain.innerHTML = "Test";
	}

}

(window as any).app = new App();
