import { hsbSceneComponent } from '@H_Fnd/Heosabi';


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
    /** 
     * UI담당 컴포넌트
     * 씬 자체의 UI만 담당한다.
     * 파생된 UI는 별도 컴포넌트로 관리된다.
     */
    private UiCompo: StartupSceneCompo;

    /**
     * 메인 네비로 지정된 영역
     * @returns
     */
    public getMainNav = (): HTMLElement =>
    {
        return this.UiCompo.MainNav;
    }

    /**
     * 메인돔으로 지정된 영역
     * @returns
     */
    public getMainDom = (): HTMLElement =>
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
            objThis.NavMain = new NavMain(this.getMainNav());
        };
    }

    /** 동기/비동기를 제어하기 위한 비동기 초기화 함수 */
    public initialize = async () =>
    {
        
    }


    /**
     * 지정한 개체를 지금 씬으로 지정한다.
     * 여기서 지정한 씬은 <main>영역을 사용한다.
     * @param scene
     */
    public SceneSet(scene: hsbSceneComponent): void
    {
        GlobalHFw.SceneNow = scene;
    }
     
}
