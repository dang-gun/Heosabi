import Heosabi, {
    RouterServeiceInterface,
    RouterMatchInfoModel,
    RouterMatchInfoHandler,
} from '@H_Fnd/Heosabi';

/**
 * jxta-hash-router를 이용한 라우터(해시)
 * https://github.com/whoiseon/jxta-hash-router
 */
import JxtaHashRouter, {
} from '@//Utility/JxtaHashRouter/JxtaHashRouter';
import { Handler, Match } from '@//Utility/JxtaHashRouter/types';


/** 
 * 허사비용 라우터(해시) 서비스 
 * jxta-hash-router를 이용한 해시 라우터
 */
export default class Heosabi_JxtaHashRouterServeice
    implements RouterServeiceInterface
{
    InfoString: string = "Heosabi Router(Hash) Serveice" ;

    /** JxtaHashRouter 개체 */
    private router: JxtaHashRouter;

    

    constructor()
    {
        this.router = new JxtaHashRouter(true);
    }

    /**
     * 라우터 경로를 등록한다.
     * @param path
     * @param handler
     * @returns
     */
    public on(path: string | RegExp
        , handler: RouterMatchInfoHandler)
        : Heosabi_JxtaHashRouterServeice
    {

        //새로만든 핸들 전달
        this.router.on(path, this.ToJxtaHashHander(handler));
        return this;
    }

    /**
     * 404 Not found 페이지 경로를 등록한다.
     * @param handler
     * @returns
     */
    public notFound(handler?: RouterMatchInfoHandler)
        : RouterServeiceInterface
    {
        //새로만든 핸들 전달
        this.router.notFound(this.ToJxtaHashHander(handler));
        return this;
    }

    /**
     * 라우트 동작 요청
     * @returns
     */
    public resolve(): RouterServeiceInterface
    {
        this.router.resolve();
        return this;
    }

    /**
     * 지정한 주소로 라우터를 이용한 이동
     * @param to
     */
    public navigate(to: string)
    {
        this.router.navigate(to);
    }
    

    /**
     * RouterMatchInfoHandler정보를 JxtaHashRouter Hander에 맞게 변환한다.
     * @param handler
     * @returns
     */
    private ToJxtaHashHander(handler: RouterMatchInfoHandler)
        : Handler
    {
        //주소 유지를 위한 백업
        let handlerTemp = handler;

        let handlerNew: Handler
            = (match?: Match) =>
            {
                //라우터의 매치 정보를 서비스에 맞게 만듬.
                let newMatch: RouterMatchInfoModel = new RouterMatchInfoModel();
                if (match)
                {
                    newMatch.url = match.url;
                    newMatch.asPath = match.asPath;
                    newMatch.queryString = match.queryString;
                    newMatch.query = match.query;
                    newMatch.params = match.params;
                }


                //전달받은 핸들 실행
                handlerTemp(newMatch);
            };


        return handlerNew;
    }


    public refresh(): void
    {
        this.router.refresh();
    }
}