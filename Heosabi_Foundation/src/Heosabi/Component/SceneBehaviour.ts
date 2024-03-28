import Heosabi from "../Heosabi";

import { LifeCycle } from "./LifeCycle";
import { TemplateCycle } from "./TemplateCycle";
import { Behaviour } from "./Behaviour";

import { ComponentSettingModel } from "./DataModels/ComponentSettingModel";





/** 씬 안에서 사용될 동작  */
export class SceneBehaviour extends Behaviour
{
    

    /** Behaviour의 생성자가 끝나면  initialize가 동작한다.  */
    constructor(settingData: ComponentSettingModel)
    {
        super(settingData);
    }

    //public TemplateReset(templateData: string)
    //{

    //}
    
}