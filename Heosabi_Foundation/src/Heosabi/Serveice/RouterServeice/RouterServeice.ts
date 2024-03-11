
import { RouterServeiceInterface } from "./RouterServeiceInterface";


/** 라우트 서비스 인터페이스 */
export default class RouterServeice implements RouterServeiceInterface
{
    public InfoString: string = "RouterServeice(Empty)";

    on(path: string | Function | RegExp, handler?: Function): RouterServeiceInterface
    {
        return this;
    }
	

}