import Heosabi, { LoggerServeiceInterface } from '@H_Fnd/Heosabi';


/** 허사비용 로거 */
export default class Heosabi_LoggerServeice implements LoggerServeiceInterface
{
    
    public InfoString: string = "LoggerServeice(Empty)";
    
    public Log(message: string): void
    {
        if (true === this.ShowIs)
        {
            //const stack = new Error().stack;
            //console.log(`Custom Log: ${message}\n${stack}`);

            //console.trace(message);
            console.log(message);
        }
    }
    public Info(message: string): void
    {
        if (true === this.ShowIs)
        {
            console.trace(message);
        }
    }
    public Warning(message: string): void
    {
        if (true === this.ShowIs)
        {
            console.trace(message);
        }
    }
    public Error(message: string): void
    {
        if (true === this.ShowIs)
        {
            console.trace(message);
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

    /** 콘솔을 모두 지운다.  */
    public clear(): void
    {
        console.clear();
    }
}