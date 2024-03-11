

/** ���Ʈ ���� �������̽� */
export interface RouterServeiceInterface
{
	/** 
	 * ������ ǥ�� ����(���ʼ�)
	 * ������ ������ ǥ���ϱ����� ������ ������ �ʿ��Ҷ� ������ �뵵�̴�.
	 */
	InfoString: string;


	/**
	 * ������ ������ �߰��Ѵ�.
	 * @param path ���ε��� ���
	 * @param handler 
	 * @returns ü�ο� ����� �� ��ü
	 */
	on(path: string | Function | RegExp
		, handler?: Function)
		: RouterServeiceInterface;

}