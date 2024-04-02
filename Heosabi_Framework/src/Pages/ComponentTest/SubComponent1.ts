import { hsbComponentBehaviour } from '@H_Fnd/Heosabi';

/** 테스트용 서브 컴포넌트 */
export default class SubComponent1 extends hsbComponentBehaviour
{
    constructor(props?: any)
    {
        

        super({
            templateString: `
<div>
    컴포넌트 1 - 테스트
    <h3>테스트~</h3>
</div>
`
 });

        //if (props.NavMain)
        //{
        //    this.NavMainDom = props.NavMain;
        //}

        let a: HTMLElement = document.createElement("div");
        a.querySelector
    }


}
