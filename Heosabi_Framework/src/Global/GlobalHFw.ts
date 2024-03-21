import Heosabi, {
} from '@H_Fnd/Heosabi';
import StartupPage from '@/Pages/StartupPage';
import PageBase from '@Faculty/PageBase';


/** 허사비 프레임워크용 전역 변수 */
export default class GlobalHFw
{
    /** 프로젝트 제목 */
    public static Title: string = "Heosabi Framework";

    /** 사용할 전체 영역(DOM) */
    public static AppDom: HTMLElement;
    /** app 바로 아래있는 스타트업페이지 */
    public static StartupPage: StartupPage;

    /** 지금 보여주고 있는 페이지에서 사용할 개체 */
    public static PageNow: PageBase | null = null;

    /** 메뉴로 사용할 돔 */
    public static MenuDom: null | HTMLElement = null;

}
