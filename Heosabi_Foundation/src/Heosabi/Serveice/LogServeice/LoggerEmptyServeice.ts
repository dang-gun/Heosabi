import { LoggerServeiceInterface } from "./LoggerServeiceInterface";




/** ����ִ� �α� ���� �������̽� */
export default class LoggerEmptyServeice implements LoggerServeiceInterface
{
    public InfoString: string = "LoggerServeice(Empty)";

    Log(message: string): void { }
    Info(message: string): void { }
    Warning(message: string): void { }
    Error(message: string): void { }
    Trace(message: string): void { }

    Func(func: () => void): void { }
}