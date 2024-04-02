import Heosabi, { LoggerServeiceInterface } from '@H_Fnd/Heosabi';


/** 
 * 허사비용 로거 
 * 별도의 라이브러리를 사용하지 않고 직접 구현함.
 */
export default class Heosabi_LoggerServeice implements LoggerServeiceInterface
{
    
    public InfoString: string = "LoggerServeice(Empty)";
    
    public Log(message: string): void
    {
        if (true === this.ShowIs)
        {
            //const stack = new Error().stack;
            //console.log(`Custom Log: ${message}\n${stack}`);

            
            if (false === this.ShowTrace)
            {
                console.log(message);    
            }
            else
            {
                console.groupCollapsed(message);
                console.trace();
                console.groupEnd();
            }
        }
    }
    public Info(message: string): void
    {
        if (true === this.ShowIs)
        {
            if (false === this.ShowTrace)
            {
                console.info(message);
            }
            else
            {
                console.groupCollapsed(console.info(message));
                console.trace();
                console.groupEnd();
            }
        }
    }
    public Warning(message: string): void
    {
        if (true === this.ShowIs)
        {
            console.warn(message);
        }
    }
    public Error(message: string): void
    {
        if (true === this.ShowIs)
        {
            console.error(message);
        }
    }
    public Trace(message: string): void
    {
        if (true === this.ShowIs)
        {
            console.trace(message);
        }
    }

    public Func(func: () => void): void
    {
        if (true === this.ShowIs)
        {
            func();
        }
    }



    /** 전달된 메시지를 표시할지 여부 */
    public ShowIs: boolean = true;
    /** 
     * 로그를 표시할때 Trace도 같이 표시할지 여부
     * trace를 따로 호출하지 않아도 되는 경우는 동작하지 않는다.
     */
    public ShowTrace: boolean = false;

    /** 콘솔을 모두 지운다.  */
    public clear(): void
    {
        console.clear();
    }
}