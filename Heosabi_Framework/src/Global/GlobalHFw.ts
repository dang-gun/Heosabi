import Heosabi, { hsbSceneComponent } from '@H_Fnd/Heosabi';
import StartupScene from '@/Pages/StartupScene';



/** 허사비 프레임워크용 전역 변수 */
export default class GlobalHFw
{
    /** 프로젝트 제목 */
    public static Title: string = "Heosabi Framework";

    /** 사용할 전체 영역(DOM) */
    public static AppDom: HTMLElement;
    /** app 바로 아래있는 스타트업페이지 */
    public static StartupPage: StartupScene;

    /** 지금 보여주고 있는 페이지에서 사용할 개체 */
    public static SceneNow: hsbSceneComponent | null = null;

    /** 메뉴로 사용할 돔 */
    public static MenuDom: null | HTMLElement = null;

}
