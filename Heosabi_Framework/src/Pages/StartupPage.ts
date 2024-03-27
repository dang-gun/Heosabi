import { hsbSceneComponent } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';
import NavMain from '@Pages/Startup/NavMain';


/** 
 * 프로젝트 메인
 * 라우터는 메인을 걸쳐서 이동해야 한다.
 * 
 * 씬 공통 영역은 여기서 컨트롤 되야 한다.
 */
export default class StartupPage extends hsbSceneComponent
{
    public MainDom: HTMLElement | null = null;

    
    constructor(props?: any)
    {
        super();
        
        if (props)
        {
            console.log(props);
        }
    }

    /** 동기/비동기를 제어하기 위한 비동기 초기화 함수 */
    public initialize = async () =>
    {
        //app를 통체로 사용한다.
        GlobalHFw.AppDom.innerHTML = '';
        //StartupPage는 바로 페이지를 보여줘야 하므로 바로 랜더링을 한다.
        GlobalHFw.AppDom.innerHTML
            = await GlobalHFnd.Ajax
                .fileHtml(true, "/Pages/StartupPage.html") as string;

        //메인 돔 영역 저장
        this.MainDom = GlobalHFw.AppDom.querySelector("#domMain");


        //네비게이션 메뉴
        let navMain = GlobalHFw.AppDom.querySelector("#navMain");
        this.AddComponent(new NavMain({ NavMain: navMain }));


        this.render_FirstAll();
    }

    public render = async (): Promise<void> =>
    {
    }

    /**
     * 지정한 개체를 지금 페이지로 지정한다.
     * @param objScene
     */
    public SceneSet(objScene: hsbSceneComponent): void
    {
        GlobalHFw.SceneNow = objScene;
        GlobalHFw.SceneNow.render();
    }
     
}
