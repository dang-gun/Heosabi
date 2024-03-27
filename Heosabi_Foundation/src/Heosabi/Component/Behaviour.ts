import Heosabi from "../Heosabi";

import { LifeCycle } from "./LifeCycle";

/** 컴포넌트 동작 */
export class Behaviour extends LifeCycle
{
    /** Behaviour의 생성자가 끝나면  initialize가 동작한다.  */
    constructor()
    {
        super();

        /** 컴포넌트코어에 관리 위임 사이클에 추가 */
        Heosabi.instance.ComponentCore.AddComponent(this);

        //초기화 호출
        this.initialize();
    }
    
}