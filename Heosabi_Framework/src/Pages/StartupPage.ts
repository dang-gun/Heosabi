import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';
import PageBase from '@Faculty/PageBase';

/** 
 * 프로젝트 메인
 * 라우터는 메인을 걸쳐서 이동해야 한다.
 */
export default class StartupPage implements PageBase
{
    public MainDom: HTMLElement | null = null;

    constructor(props?: any)
    {
        
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

        console.log("메인 돔 찾기");
        //메인 돔 영역 저장
        this.MainDom = GlobalHFw.AppDom.querySelector("#domMain");


        //네비게이션 메뉴
        let navMain = GlobalHFw.AppDom.querySelector("#navMain");
        GlobalHFnd.Ajax
            .fileHtml(false, "/Pages/NavMain/NavMain.html")
            .then(async (response: Response) =>
            {
                navMain.innerHTML = await response.text();
            });
            
    }

    public async render(): Promise<void>
    {
    }

    /**
     * 지정한 개체를 지금 페이지로 지정한다.
     * @param objPage
     */
    public PageSet(objPage: PageBase): void
    {
        GlobalHFw.PageNow = objPage;
        GlobalHFw.PageNow.render();
    }
     
}
