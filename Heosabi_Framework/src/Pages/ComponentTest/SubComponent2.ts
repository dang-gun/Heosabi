import { hsbComponentBehaviour } from '@H_Fnd/Heosabi';

export default class SubComponent2 extends hsbComponentBehaviour
{
    constructor(props?: any)
    {


        super({ templateUrl: "/Pages/ComponentTest/SubComponent2.html" });

        //if (props.NavMain)
        //{
        //    this.NavMainDom = props.NavMain;
        //}

        let a: HTMLElement = document.createElement("div");
        a.querySelector
    }
}
