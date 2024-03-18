import Heosabi, { AjaxCallModel, AjaxServeiceInterface } from '@H_Fnd/Heosabi';
import DGU_AjaxAssist2, { AjaxCallContentGetType, AjaxCallMethodType, AjaxCallOptionModel } from '@Util/DGU_AjaxAssist2/DGU_AjaxAssist2';


/** 
 * 허사비용 아작스 서비스 
 * DGU_AjaxAssist2를 사용하여 구현
 */
export default class Heosabi_AjaxAssist2Serveice
    implements AjaxServeiceInterface
{
    public InfoString: string = "Heosabi AjaxAssist2(DGU) Serveice";

    /** DGU_AjaxAssist2개체 */
    private ajaxA2: DGU_AjaxAssist2 = new DGU_AjaxAssist2();

    public async call(option: AjaxCallModel)
        : Promise<null | Response | ArrayBuffer | string | any>
    {
        let aco: AjaxCallOptionModel = this.ToAjaxCallOptionModel(option);

        if (true === option.await)
        {//동기
            return await this.ajaxA2.callAwait(aco);
        }
        else
        {//비동기
            return this.ajaxA2.callAsync(aco);
        }
    }
    public async get(option: AjaxCallModel)
        : Promise<null | Response | ArrayBuffer | string | any>
    {
        if (true === option.await)
        {//동기
            return await this.call(option);
        }
        else
        {//비동기
            return this.call(option);
        }
    }
    public async post(option: AjaxCallModel)
        : Promise<null | Response | ArrayBuffer | string | any>
    {
        if (true === option.await)
        {//동기
            return await this.call(option);
        }
        else
        {//비동기
            return this.call(option);
        }
    }
    public async put(option: AjaxCallModel)
        : Promise<null | Response | ArrayBuffer | string | any>
    {
        if (true === option.await)
        {//동기
            return await this.call(option);
        }
        else
        {//비동기
            return this.call(option);
        }
    }
    public async patch(option: AjaxCallModel)
        : Promise<null | Response | ArrayBuffer | string | any>
    {
        if (true === option.await)
        {//동기
            return await this.call(option);
        }
        else
        {//비동기
            return this.call(option);
        }
    }
    public async delete(option: AjaxCallModel)
        : Promise<null | Response | ArrayBuffer | string | any>
    {
        if (true === option.await)
        {//동기
            return await this.call(option);
        }
        else
        {//비동기
            return this.call(option);
        }
    }


    public async file(awaitIs: boolean, fileUrl: string)
        : Promise<ArrayBuffer | Response | null>
    {
        let callOpt: AjaxCallOptionModel = new AjaxCallOptionModel();
        callOpt.await = awaitIs;
        callOpt.contentGetType = AjaxCallContentGetType.Binary;
        callOpt.method = AjaxCallMethodType.Get;
        callOpt.url = fileUrl;

        if (true === callOpt.await)
        {//동기
            return await this.ajaxA2.callAwait(callOpt);
        }
        else
        {//비동기
            return this.ajaxA2.callAsync(callOpt);
        }
    }
    public async fileHtml(awaitIs: boolean, fileUrl: string)
        : Promise<string | Response | null>
    {
        let callOpt: AjaxCallOptionModel = new AjaxCallOptionModel();
        callOpt.await = awaitIs;
        callOpt.contentGetType = AjaxCallContentGetType.Text;
        callOpt.method = AjaxCallMethodType.Get;
        callOpt.url = fileUrl;

        if (true === callOpt.await)
        {//동기
            return await this.ajaxA2.callAwait(callOpt);
        }
        else
        {//비동기
            return this.ajaxA2.callAsync(callOpt);
        }
    }

    /**
     * AjaxCallModel를 AjaxCallOptionModel로 변환한다.
     * @param option
     * @returns
     */
    private ToAjaxCallOptionModel(option: AjaxCallModel)
        : AjaxCallOptionModel
    {
        let returnACO = new AjaxCallOptionModel();

        returnACO.await = option.await;

        //소문자로 컨텐츠 받을 때 타입을 찾는다.
        switch (option.contentGetType.toLowerCase())
        {
            case "text":
                returnACO.contentGetType = AjaxCallContentGetType.Text;
                break;
            case "json":
                returnACO.contentGetType = AjaxCallContentGetType.Json;
                break;
            case "binary":
                returnACO.contentGetType = AjaxCallContentGetType.Binary;
                break;


            case "response":
            default://모르겠으면 리스폰트로 리턴한다.
                returnACO.contentGetType = AjaxCallContentGetType.Response;
                break;
        }


        //대문자로 변환하여 메서드를 찾는다.
        switch (option.method.toLocaleUpperCase())
        {
            case AjaxCallMethodType.Post:
                returnACO.method = AjaxCallMethodType.Post;
                break;
            case AjaxCallMethodType.Post:
                returnACO.method = AjaxCallMethodType.Post;
                break;
            case AjaxCallMethodType.Put:
                returnACO.method = AjaxCallMethodType.Put;
                break;
            case AjaxCallMethodType.Patch:
                returnACO.method = AjaxCallMethodType.Patch;
                break;
            case AjaxCallMethodType.Delete:
                returnACO.method = AjaxCallMethodType.Delete;
                break;
            case AjaxCallMethodType.Head:
                returnACO.method = AjaxCallMethodType.Head;
                break;

            case AjaxCallMethodType.Get:
            default://못찾으면 get 취급한다.
                returnACO.method = AjaxCallMethodType.Get;
                break;
        }
        


        returnACO.url = option.url;
        returnACO.fetchOption = option.fetchOption;
        returnACO.data = option.data;
        returnACO.body = option.body;

        returnACO.success = option.success;
        returnACO.error = option.error;


        return returnACO;
    }
}