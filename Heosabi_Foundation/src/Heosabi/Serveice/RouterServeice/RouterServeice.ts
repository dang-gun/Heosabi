
import { RouterServeiceInterface } from "./RouterServeiceInterface";


/** ���Ʈ ���� �������̽� */
export default class RouterServeice implements RouterServeiceInterface
{
    public InfoString: string = "RouterServeice(Empty)";

    on(path: string | Function | RegExp, handler?: Function): RouterServeiceInterface
    {
        return this;
    }
	

}