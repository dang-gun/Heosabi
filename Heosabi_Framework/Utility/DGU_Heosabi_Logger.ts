import Heosabi, { LoggerServeiceInterface } from '@H_Fnd/Heosabi';


/** ����� �ΰ� */
export default class DGU_Heosabi_Logger implements LoggerServeiceInterface
{
    
    public InfoString: string = "LoggerServeice(Empty)";
    
    public Log(message: string): void
    {
        if (true === this.ShowIs)
        {
            //const stack = new Error().stack;
            //console.log(`Custom Log: ${message}\n${stack}`);

            console.trace(message);
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



    /** ���޵� �޽����� ǥ������ ���� */
    public ShowIs: boolean = true;

    /** �ܼ��� ��� �����.  */
    public clear(): void
    {
        console.clear();
    }
}