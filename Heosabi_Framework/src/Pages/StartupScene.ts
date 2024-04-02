import Heosabi, { hsbComponentBehaviour, hsbSceneComponent } from '@H_Fnd/Heosabi';


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
    /**
     * 메인 돔 영역에서 쿼리로 돔을 찾는다.
     * @param sQuery
     * @returns
     */
    public MainDomQuery(sQuery: string): HTMLElement | null
    {
        let domReturn: HTMLElement | null = null;

        let find = this.UiCompo.MainDom.querySelector(sQuery);
        if (find)
        {//찾은 대상이 있다.
            domReturn = find as HTMLElement;
        }

        return domReturn;
    }

    /** 네비 메뉴 */
    public NavMain: NavMain;
    
    constructor(props?: any)
    {
        super();

        let objThis = this;

        //console.log("StartupScene");

        //씬용 UI 생성
        objThis.UiCompo = new StartupSceneCompo(objThis);
        //씬용 UI가 완료되었을때 이벤트
        objThis.UiCompo.OnRenderComplete = () =>
        {
            //네비게이션 생성
            objThis.NavMain = new NavMain(this, this.MainNav);


            console.log("□□□ StartupScene UI 완료 -> 대기중인 씬처리");
            //대기중인 씬 처리
            this.SceneSetTempCheck();
            
        };

        super.SceneUiComponent = objThis.UiCompo;
    }

    /** 동기/비동기를 제어하기 위한 비동기 초기화 함수 */
    public initialize = async () =>
    {
        
    }


    //#region 씬 변경 처리 관련

    /** 씬 설정시 임시저장용 */
    private SceneSetTemp: null | hsbSceneComponent = null;


    /**
     * 지정한 씬(제네릭으로 전달)을 지금 씬으로 지정한다.
     * 여기서 지정한 씬은 <main>영역을 사용한다.
     * 
     * 기존씬은 파괴자를 호출한다.
     * 
     * 만약 기존의 씬(GlobalHFw.SceneNow)과 같다면 새로 생성하지 않는다.
     * @param scene 변경할 씬의 제네릭(hsbSceneComponent)
     * @param props 씬을 새로 생성할때 사용할 프로퍼티
     */
    public SceneSet<T extends hsbSceneComponent>(
        scene: new (props?: any) => T
        , props?: any)
        : void
    {

        let bNewScene: boolean = false;


        if (GlobalHFw.SceneNow)
        {//기존 씬이 있다.


            if (scene.name === GlobalHFw.SceneNow.constructor.name)
            {//기존 씬과 같다.

                //새로운 세팅
                GlobalHFw.SceneNow.propsReset(props);
            }
            else
            {//기존 씬과 다르다.

                //새 씬이 필요함을 알림
                bNewScene = true;
            }
        }
        else
        {
            //새 씬이 필요함을 알림
            bNewScene = true;
        }

        if (true === bNewScene)
        {
            if (null === this.MainDom)
            {//메인돔이 생성전이다.

                //설정하려는 씬을 대기시킨다.
                this.SceneSetTemp = new scene(props);
            }
            else
            {//메인돔이 있다.

                //바로 출력
                this.SceneSetChange(new scene(props));
            }
        }
    }

    /**
     * 대기중인 씬이 있는지 확인하고 있으면 대기중인 씬을 진행 시킨다.
     */
    private SceneSetTempCheck()
    {
        //console.log("SceneSetCheck : ");
        //console.log(this.SceneSetTemp);
        //console.log(GlobalHFw.StartupPage.MainDom);

        if (null != this.SceneSetTemp)
        {//대기중인 씬이 있다.

            //씬을 설정하고
            this.SceneSetChange(this.SceneSetTemp);
            //대기중인 씬을 제거하고
            this.SceneSetTemp = null;

            //돔이 완성됐으니 타겟 설정을 다시 해준다.
            GlobalHFw.SceneNow.SceneUiComponent.TargetReset(GlobalHFw.StartupPage.MainDom);
        }
    }

    /**
     * GlobalHFw.SceneNow을 변경할때는 무조건 이 함수로 변경해야 한다.
     * 기존 씬의 파괴자 호출을 하고 GlobalHFw.SceneNow에 새씬을 할당한다.
     */
    private SceneSetChange(newScene: hsbSceneComponent): void
    {
        if (GlobalHFw.SceneNow)
        {
            console.log("SceneSetChange : ");

            //기존씬 파괴자 호출을 위해 코어에 알림
            //해시라우터는 링크에 의한 이동이 가능하므로 새씬을 할당하기전에 파괴자를 호출해야 한다.
            //브라우저 라우터는 navigate으로만 이동이 가능하므로 이 문제에서 자유롭다.
            //
            //대신 둘다 navigate에는 파괴자를 호출해야 하므로 해시라우터는 파괴자를 두번 호출하게 된다.
            Heosabi.instance.ComponentCore
                .DestroySceneAndCompo(GlobalHFw.SceneNow.idScene);
        }
        

        //새씬 할당
        GlobalHFw.SceneNow = newScene;
    }

    //#endregion
}
