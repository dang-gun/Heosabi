
import { RouterServeiceInterface } from "./RouterServeiceInterface";


/** 라우트 서비스 인터페이스 */
export class RouterEmptyServeice implements RouterServeiceInterface
{
    public InfoString: string = "RouterServeice(Empty)";

    on(path: string | RegExp, handler?: Function)
        : RouterServeiceInterface
    {
        return this;
    }

    notFound(handler?: Function): RouterServeiceInterface {
        throw new Error("Method not implemented.");
    }
    resolve(path?: string): RouterServeiceInterface {
        throw new Error("Method not implemented.");
    }

    navigate(to: string) {
        throw new Error("Method not implemented.");
    }
    
}