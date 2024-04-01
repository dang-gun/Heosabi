import { hsbComponentBehaviour, hsbSceneComponent } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';
import NavMain from '@Pages/Startup/NavMain';

import StartupSceneCompo from './StartupSceneCompo';


/** 
 * 프로젝트 메인
 * 라우터는 메인을 걸쳐서 이동해야 한다.
 * 
 * 씬 공통 영역은 여기서 컨트롤 되야 한다.
 */
export default class StartupScene extends hsbSceneComponent
{
    /** UI담당 컴포넌트 */
    private UiCompo: StartupSceneCompo;

    /**
     * 메인 네비로 지정된 영역
     * @returns
     */
    public get MainNav(): HTMLElement
    {
        return this.UiCompo.MainNav;
    }

    /**
     * 메인돔으로 지정된 영역
     * @returns
     */
    public get MainDom(): HTMLElement
    {
        return this.UiCompo.MainDom;
    }

    public NavMain: NavMain;
    
    constructor(props?: any)
    {
        super();

        let objThis = this;

        //씬용 UI 생성
        objThis.UiCompo = new StartupSceneCompo(objThis);
        //씬용 UI가 완료되었을때 이벤트
        objThis.UiCompo.OnRenderComplete = () =>
        {
            //네비게이션 생성
            objThis.NavMain = new NavMain(this.MainNav);

            GlobalHFw.StartupPage.MainDom
            //대기중인 씬 처리
            this.SceneSetCheck();
            console.log("□□□ StartupScene UI 완료");
        };

        super.SceneComponent = objThis.UiCompo;
    }

    /** 동기/비동기를 제어하기 위한 비동기 초기화 함수 */
    public initialize = async () =>
    {
        
    }


    //#region 씬 변경 처리 관련

    /** 씬 설정시 임시저장용 */
    private SceneSetTemp: null | hsbSceneComponent = null;

    /**
     * 지정한 개체를 지금 씬으로 지정한다.
     * 여기서 지정한 씬은 <main>영역을 사용한다.
     * @param scene
     */
    public SceneSet = (scene: hsbSceneComponent): void =>
    {
        if (null === this.MainDom)
        {//메인돔이 생성전이다.

            //설정하려는 씬을 대기시킨다.
            this.SceneSetTemp = scene;
        }
        else
        {//메인돔이 있다.

            //바로 출력
            GlobalHFw.SceneNow = scene;
        }
    }

    private SceneSetCheck()
    {
        if (null != this.SceneSetTemp)
        {//대기중인 씬이 있다.

            //씬을 설정하고
            GlobalHFw.SceneNow = this.SceneSetTemp;
            //대기중인 씬을 제거하고
            this.SceneSetTemp = null;

            //돔이 완성됐으니 타겟 설정을 다시 해준다.
            GlobalHFw.SceneNow.SceneComponent.TargetReset(GlobalHFw.StartupPage.MainDom);
        }
    }

    //#endregion
}
