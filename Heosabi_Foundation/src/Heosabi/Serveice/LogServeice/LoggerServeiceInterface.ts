

/** �α� ���� �������̽� */
export interface LoggerServeiceInterface
{
	/** 
	 * ������ ǥ�� ����(���ʼ�)
	 * ������ ������ ǥ���ϱ����� ������ ������ �ʿ��Ҷ� ������ �뵵�̴�.
	 */
	InfoString: string;


	/**
	 * �α׷� ǥ��
	 * @param message
	 */
	Log(message: string): void;
	/**
	 * ������ ǥ��
	 * @param message
	 */
	Info(message: string): void;
	/**
	 * ���� ǥ��
	 * @param message
	 */
	Warning(message: string): void;
	/**
	 * ������ ǥ��
	 * @param message
	 */
	Error(message: string): void;
	/**
	 * ���� �������� ǥ��
	 * @param message
	 */
	Trace(message: string): void;

	/**
	 * �ΰ��� ���� ���ǿ� ���� ���޵� �Ű������� �����մϴ�.
	 * 
	 * ���� ������� ���� ��Ȯ�� ��ġ�� ǥ���ϰų� �ߴ����� ��ƾ� �Ҷ� ����մϴ�.
	 * @param func
	 */
	Func(func: () => void): void;

}