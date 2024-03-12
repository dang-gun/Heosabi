import { LoggerServeiceInterface } from "./LoggerServeiceInterface";




/** 비어있는 로그 서비스 인터페이스 */
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