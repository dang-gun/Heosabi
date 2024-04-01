import { hsbComponentBehaviour, hsbComponentSettingModel } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';

/** 
 * 허사비 프레임워크에서 사용할 허사비컴포넌트 동작
 * 허사비 파운데이션은 구현이 없으므로 구현은 여기에서 한다.
 */
export default class HFwComponent extends hsbComponentBehaviour
{
    constructor(settingData: hsbComponentSettingModel)
    {
        super(settingData);
    }

	public async onRender(): Promise<void>
	{
		if (true === super.TemplateReadyRenderIs)
		{//템플릿을 그릴 준비가 되었다.

			//랜더링이 시작됐음을 알리고
			this.TemplateRenderingIs = true;
			//랜더링을 한다.
			super.SettingData_domTarget.innerHTML
				= super.SettingData_templateString;


			//랜더링이 끝남을 알림
			this.onLateRender();
		}
	}
}
