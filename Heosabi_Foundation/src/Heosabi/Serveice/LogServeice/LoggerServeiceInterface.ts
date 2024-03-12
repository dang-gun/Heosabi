

/** 로그 서비스 인터페이스 */
export interface LoggerServeiceInterface
{
	/** 
	 * 서비스의 표시 정보(비필수)
	 * 서비스의 정보를 표시하기위하 정보로 정보가 필요할때 제공할 용도이다.
	 */
	InfoString: string;


	/**
	 * 로그로 표시
	 * @param message
	 */
	Log(message: string): void;
	/**
	 * 정보로 표시
	 * @param message
	 */
	Info(message: string): void;
	/**
	 * 경고로 표시
	 * @param message
	 */
	Warning(message: string): void;
	/**
	 * 에러로 표시
	 * @param message
	 */
	Error(message: string): void;
	/**
	 * 스택 추적으로 표시
	 * @param message
	 */
	Trace(message: string): void;

	/**
	 * 로거의 내부 조건에 따라 전달된 매개변수를 실행합니다.
	 * 
	 * 편한 디버깅을 위해 정확한 위치를 표시하거나 중단점을 잡아야 할때 사용합니다.
	 * @param func
	 */
	Func(func: () => void): void;

}