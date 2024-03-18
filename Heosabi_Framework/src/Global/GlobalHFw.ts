import Heosabi, {
} from '@H_Fnd/Heosabi';


/** 허사비 프레임워크용 전역 변수 */
export default class GlobalHFw
{
    /** 프로젝트 제목 */
    public static Title: string = "Heosabi Framework";

    /** 메인으로 사용할 돔 */
    public static MainDom: HTMLElement;

    /** 메뉴로 사용할 돔 */
    public static MenuDom: null | HTMLElement = null;

}
