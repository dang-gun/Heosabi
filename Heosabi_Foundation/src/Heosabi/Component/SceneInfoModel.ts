import { Scene } from "./Scene";

/** 씬을 관리하기위한 정보를 가지고 있는 모델 */
export class SceneInfoModel
{
    /** 이 모델이 관리중이 씬 개체 */
    public SceneMy: Scene;

    /** 
     * 부모가 있는 경우
     * 부모는 유동적으로 설정/제거 할 수 있다.
     */
    public SceneParent: null | Scene = null;


    constructor(scene: Scene)
    {
        this.SceneMy = scene;
    }
}