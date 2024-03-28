import { Behaviour } from "./Behaviour";


/** 라이프 사이클을 관리하기위한 정보를 가지고 있는 모델 */
export class BehaviourInfoModel
{
    /** 이 모델이 관리중이 라이프사이클 개체 */
    public MyBehaviour: Behaviour;

    /** 등록작업이 완료됐는지 여부 */
    public AwakeIs: boolean = false;

    constructor(behaviour: Behaviour)
    {
        this.MyBehaviour = behaviour;
    }
}