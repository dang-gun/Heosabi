import { AjaxServeiceInterface } from "./AjaxServeiceInterface";
import { AjaxCallModel } from "./AjaxCallModel";




/** 비어있는 아작스 서비스 인터페이스 */
export class AjaxEmptyServeice
    implements AjaxServeiceInterface
{
    public InfoString: string = "AjaxServeice(Empty)";

    call(option: AjaxCallModel): Promise<any> 
    {
        return new Promise<any>((resolve, reject) =>
        {
            resolve(null);
        }); 
    }
    get(option: AjaxCallModel): Promise<any> 
    {
        return this.call(option);
    }
    post(option: AjaxCallModel): Promise<any> 
    {
        return this.call(option);
    }
    put(option: AjaxCallModel): Promise<any> 
    {
        return this.call(option);
    }
    patch(option: AjaxCallModel): Promise<any> 
    {
        return this.call(option);
    }
    delete(option: AjaxCallModel): Promise<any> 
    {
        return this.call(option);
    }
    file(awaitIs: boolean, fileUrl: string): Promise<Response | ArrayBuffer> 
    {
        let tempOpt: AjaxCallModel = new AjaxCallModel();
        return this.call(tempOpt);
    }
    fileHtml(awaitIs: boolean, fileUrl: string): Promise<string | Response> 
    {
        let tempOpt: AjaxCallModel = new AjaxCallModel();
        return this.call(tempOpt);
    }
    
}