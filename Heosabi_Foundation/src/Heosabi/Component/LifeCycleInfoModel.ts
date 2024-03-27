import { LifeCycle } from "./LifeCycle";

/** 라이프 사이클을 관리하기위한 정보를 가지고 있는 모델 */
export class LifeCycleInfoModel
{
    /** 이 모델이 관리중이 라이프사이클 개체 */
    public MyLifeCycle: LifeCycle;


    public AwakeIs: boolean = false;

    constructor(lifeCycle: LifeCycle)
    {
        this.MyLifeCycle = lifeCycle;
    }
}