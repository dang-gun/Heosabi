import { hsbComponentBehaviour, hsbComponentSettingModel } from '@H_Fnd/Heosabi';


import GlobalHFnd from '@/Global/GlobalHFnd';
import GlobalHFw from '@/Global/GlobalHFw';

/** 
 * ���� �����ӿ�ũ���� ����� ����������Ʈ ����
 * ���� �Ŀ�̼��� ������ �����Ƿ� ������ ���⿡�� �Ѵ�.
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
		{//���ø��� �׸� �غ� �Ǿ���.

			//�������� ���۵����� �˸���
			this.TemplateRenderingIs = true;
			//�������� �Ѵ�.
			super.SettingData_domTarget.innerHTML
				= super.SettingData_templateString;


			//�������� ������ �˸�
			this.onLateRender();
		}
	}
}
