import Heosabi, { AjaxServeiceInterface, LoggerServeiceInterface, RouterServeiceInterface }
    from '@H_Fnd/Heosabi';



/** 허사비 파운데이션 관리용 전역 변수 */
export default class GlobalHFnd
{
    /** 허사비 개체 */
    public static Heosabi = Heosabi.instance;


    //#region 사용하기 쉽게 하기위한 서비스 개체 바로가기

    /**
     * 로거
     * 바로가기이므로 생성은 GlobalHFnd.Heosabi.Srv.AddLogger로 해야 한다.
     */
    public static get Logger(): LoggerServeiceInterface
    {
        return GlobalHFnd.Heosabi.Srv.Logger;
    }

    /**
     * 아작스
     * 바로가기이므로 생성은 GlobalHFnd.Heosabi.Srv.AddAjax로 해야 한다.
     */
    public static get Ajax(): AjaxServeiceInterface
    {
        return GlobalHFnd.Heosabi.Srv.Ajax;
    }

    /**
     * 라우터
     * 바로가기이므로 생성은 GlobalHFnd.Heosabi.Srv.AddRouter로 해야 한다.
     */
    public static get Router(): RouterServeiceInterface
    {
        return GlobalHFnd.Heosabi.Srv.Router;
    }

    //#endregion
    
}
