var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { AjaxCallMethodType, AjaxCallOptionCheckCompleteDataModel } from "./ModelData/AjaxCallOptionModel";
export * from "./ModelData/AjaxCallOptionModel";
/**
 * 아작스 지원2(인증없는 버전)
 * 헤더이 인증용 토큰을 담지 않는 버전.
 * 쿠키와 같은 다른 수단으로 인증할때 사용한다.
 *
 * 헤더에 인증용 토큰을 담고 자동으로 엑세스토큰과 리플레시토큰을 처리하려면 DGU_AjaxAssist2_Auth를 사용해야 한다.
 */
var DGU_AjaxAssist2 = /** @class */ (function () {
    /**
     * 개체를 초기화하면서 기본값으로 사용할 호출 옵션을 초기화 한다.
     * @param callOptionDefult 초기화에 사용할 기본 호출 옵션
     * 값이 없으면 임의로 세팅된 기본값을 사용한다.
     */
    function DGU_AjaxAssist2(callOptionDefult) {
        var _this = this;
        //#region ajax 호출 : 메서드 지정
        /**
         * ajax get 요청
         * 동기호출을 할때는 반드시 await로 호출해야 한다.
         * @returns 옵션에 따른 리턴
         * 동기 : callOption.contentGetType에 맞춰 변환된 data.
         * 비동기 : Promise<Response>
         */
        this.get = function (callOption) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //메서드 타입 강제 지정
                        callOption.method = AjaxCallMethodType.Get;
                        if (!(true === callOption.await)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.callAwait(callOption)];
                    case 1: //동기
                    return [2 /*return*/, _a.sent()];
                    case 2: //비동기
                    return [2 /*return*/, this.callAsync(callOption)];
                }
            });
        }); };
        /**
         * ajax post 요청
         * 동기호출을 할때는 반드시 await로 호출해야 한다.
         * @returns 옵션에 따른 리턴
         * 동기 : callOption.contentGetType에 맞춰 변환된 data.
         * 비동기 : Promise<Response>
         */
        this.post = function (callOption) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //메서드 타입 강제 지정
                        callOption.method = AjaxCallMethodType.Post;
                        if (!(true === callOption.await)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.callAwait(callOption)];
                    case 1: //동기
                    return [2 /*return*/, _a.sent()];
                    case 2: //비동기
                    return [2 /*return*/, this.callAsync(callOption)];
                }
            });
        }); };
        /**
         * ajax put 요청
         * 동기호출을 할때는 반드시 await로 호출해야 한다.
         * @returns 옵션에 따른 리턴
         * 동기 : callOption.contentGetType에 맞춰 변환된 data.
         * 비동기 : Promise<Response>
         */
        this.put = function (callOption) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //메서드 타입 강제 지정
                        callOption.method = AjaxCallMethodType.Put;
                        if (!(true === callOption.await)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.callAwait(callOption)];
                    case 1: //동기
                    return [2 /*return*/, _a.sent()];
                    case 2: //비동기
                    return [2 /*return*/, this.callAsync(callOption)];
                }
            });
        }); };
        /**
         * ajax patch 요청
         * 동기호출을 할때는 반드시 await로 호출해야 한다.
         * @param callOption
         * @returns 옵션에 따른 리턴
         * 동기 : callOption.contentGetType에 맞춰 변환된 data.
         * 비동기 : Promise<Response>
         */
        this.patch = function (callOption) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //메서드 타입 강제 지정
                        callOption.method = AjaxCallMethodType.Patch;
                        if (!(true === callOption.await)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.callAwait(callOption)];
                    case 1: //동기
                    return [2 /*return*/, _a.sent()];
                    case 2: //비동기
                    return [2 /*return*/, this.callAsync(callOption)];
                }
            });
        }); };
        /**
        * ajax delete 요청
        * 동기호출을 할때는 반드시 await로 호출해야 한다.
        * @param callOption
        * @returns 옵션에 따른 리턴
        * 동기 : callOption.contentGetType에 맞춰 변환된 data.
        * 비동기 : Promise<Response>
        */
        this.delete = function (callOption) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //메서드 타입 강제 지정
                        callOption.method = AjaxCallMethodType.Delete;
                        if (!(true === callOption.await)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.callAwait(callOption)];
                    case 1: //동기
                    return [2 /*return*/, _a.sent()];
                    case 2: //비동기
                    return [2 /*return*/, this.callAsync(callOption)];
                }
            });
        }); };
        //#endregion
        /**
         * ajax call 요청
         * 동기호출을 할때는 반드시 await로 호출해야 한다.
         *
         * callOption.await옵션에 따라 동기/비동기 호출을 한다.
         * @param callOption
         * @returns 옵션에 따른 리턴
         * 동기 : callOption.contentGetType에 맞춰 변환된 data.
         * 비동기 : Promise<Response>
         */
        this.call = function (callOption) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(true === callOption.await)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.callAwait(callOption)];
                    case 1: //동기
                    return [2 /*return*/, _a.sent()];
                    case 2: //비동기
                    return [2 /*return*/, this.callAsync(callOption)];
                }
            });
        }); };
        /**
         * ajax 호출(동기)
         * 반드시 await로 호출해야 한다.
         * ajax가 응답할때까지 기다렸다가 callOption.contentGetType 설정된 결과값으로 리턴한다.
         *
         * callOption.success, callOption.error가 있다면 우선 호출된다.
         * @param callOption 아작스 호출옵션(비어있는 옵션은 기본옵션이 사용된다.)
         * @returns callOption.contentGetType에 맞춰 변환된 data.
         * 에러가 발생한경우 무조건 Response를 리턴한다.
         */
        this.callAwait = function (callOption) { return __awaiter(_this, void 0, void 0, function () {
            var returnData, jsonCallOptionComplete;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //강제 설정 변경
                        callOption.await = true;
                        returnData = null;
                        jsonCallOptionComplete = this.CallOptionCheck(callOption);
                        //아작스 호출
                        return [4 /*yield*/, fetch(jsonCallOptionComplete.urlTarget, jsonCallOptionComplete.completeFetch)
                                .then(function (response) {
                                //응답데이터를 설정에 맞게 변환한다.
                                returnData
                                    = _this.ResponseToData(response, jsonCallOptionComplete.callOption.contentGetType);
                                if (jsonCallOptionComplete.callOption.success) { //함수가 있으면 호출
                                    jsonCallOptionComplete.callOption.success(returnData, response);
                                }
                            }).catch(function (response) {
                                returnData = response;
                                if (jsonCallOptionComplete.callOption.error) { //함수가 있으면 호출
                                    jsonCallOptionComplete.callOption.error(response);
                                }
                            })];
                    case 1:
                        //아작스 호출
                        _a.sent();
                        return [2 /*return*/, returnData];
                }
            });
        }); };
        /**
         * ajax 호출(비동기)
         * ajax가 응답을 기다리지 않는다.
         * 결과를 callOption.success, callOption.error로 전달받거나
         * Promise패턴을 사용하여 받으면 된다.
         *
         * @param callOption 아작스 호출옵션(비어있는 옵션은 기본옵션이 사용된다.)
         * @returns 사용된 Promise개체
         */
        this.callAsync = function (callOption) {
            callOption.await = false;
            var jsonCallOptionComplete = _this.CallOptionCheck(callOption);
            //완성된 리스폰스
            var returnRespAjaxResult = null;
            returnRespAjaxResult
                = fetch(jsonCallOptionComplete.urlTarget, jsonCallOptionComplete.completeFetch).then(function (response) {
                    if (jsonCallOptionComplete.callOption.success) {
                        //전달용 데이터
                        var returnData = null;
                        //응답데이터를 설정에 맞게 변환한다.
                        returnData
                            = _this.ResponseToData(response, jsonCallOptionComplete.callOption.contentGetType);
                        jsonCallOptionComplete.callOption.success(returnData, response);
                    }
                    return response;
                }).catch(function (response) {
                    if (jsonCallOptionComplete.callOption.error) {
                        jsonCallOptionComplete.callOption.error(response);
                    }
                    return response;
                });
            return returnRespAjaxResult;
        }; //end Call
        /**
         * 아작스 호출 옵션 체크
         * @param callOption
         * @returns
         */
        this.CallOptionCheck = function (callOption) {
            //전달된 옵션 합치기(들어온 옵션 우선)
            var callOpt = Object.assign({}, _this.CallOptionDefult, callOption);
            //만약 하위트를 사용할 예정이면(예> callOpt.fetchOption)
            //하위 트리는 포인터가 저장되므로 수작업으로 다시 저장한다.
            //아작스 호출에 사용할 최종 Fetch옵션
            //새로 생성해서 기본 옵션과 전달 받은 옵션을 합친다.
            var jsonCompleteFetch = Object.assign({}, _this.CallOptionDefult.fetchOption, callOption.fetchOption);
            //url을 개체로 변경
            var urlTarget = new URL(callOpt.url, window.location.origin);
            if (!(callOpt.fetchOption) || !(callOpt.fetchOption.method)) { //fetchOption에 메소드가 없다.
                jsonCompleteFetch.method = callOpt.method;
            }
            if (AjaxCallMethodType.Get === jsonCompleteFetch.method
                || AjaxCallMethodType.Head === jsonCompleteFetch.method) { //메서드가 Get 이거나
                //메서드가 Head 이다.
                //데이터 임시 저장
                var objDataTemp = null;
                if (jsonCompleteFetch.body) { //jsonCompleteFetch.body가 있다.
                    //jsonCompleteFetch.body가 1순위
                    //바디의 내용을 데이터로 옮긴다.
                    objDataTemp = jsonCompleteFetch.body;
                }
                else if (callOpt.data) { //callOpt.data가 있다.
                    //callOpt.data가 2순위
                    objDataTemp = callOpt.data;
                }
                else if (callOpt.body) { //callOpt.body가 있다.
                    //callOpt.body가 3순위
                    objDataTemp = callOpt.body;
                }
                //바디를 제거한다.
                delete jsonCompleteFetch["body"];
                //url쿼리를 만든다.
                if (objDataTemp) { //전달할 데이터가 있다.
                    //이 메서드들은 url쿼리로 데이터를 전달해야하므로
                    //데이터를 SearchParams로 변환한 후
                    //생성한 쿼리를 문자열로 바꿔 넣어준다.
                    urlTarget.search
                        = _this.JsonToSearchParams(objDataTemp).toString();
                }
            }
            else { //이외의 메서드
            }
            //최종 완성된 요청 정보를 만든다.****************
            var returnTemp = new AjaxCallOptionCheckCompleteDataModel();
            returnTemp.callOption = callOpt;
            returnTemp.urlTarget = urlTarget;
            returnTemp.completeFetch = jsonCompleteFetch;
            return returnTemp;
        };
        if (callOptionDefult) { //기본값으로 사용할 콜옵션이 있다.
            //전달받은 값을 기본값으로 사용한다.
            this.CallOptionDefult = callOptionDefult;
        }
        else { //없다.
            //임의로 세팅된 기본값을 사용한다.
            this.CallOptionDefult = {
                await: false,
                contentGetType: 2 /* AjaxCallContentGetType.Json */,
                method: AjaxCallMethodType.Get,
                url: "",
                fetchOption: {
                    /** no-cors, cors, *same-origin */
                    mode: 'cors',
                    /** // *default, no-cache, reload, force-cache, only-if-cached */
                    cache: 'no-cache',
                    /** include, *same-origin, omit */
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json'
                        /** */
                        //,'Content-Type': 'application/json;charset=utf-8'
                        //'Content-Type': 'text/plain',
                        ,
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    /** manual, *follow, error */
                    redirect: 'follow',
                    /** no-referrer, *client */
                    referrer: 'no-referrer',
                },
                data: null,
                body: null,
                success: null,
                error: null,
            };
        }
    }
    /**
     * json 오브젝트를 URLSearchParams로 변환한다.
     * @param object
     * @returns
     */
    DGU_AjaxAssist2.prototype.JsonToSearchParams = function (object) {
        var urlSearchParams = new URLSearchParams();
        //한개씩 넣어준다.
        for (var _i = 0, _a = Object.entries(object); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            urlSearchParams.append(key, value.toString());
        }
        return urlSearchParams;
    };
    /**
     * 리스폰스 데이터를 옵션에 맞게 변환하여 리턴한다.
     *
     * @param response
     * @param typeContentGet
     * @returns
     */
    DGU_AjaxAssist2.prototype.ResponseToData = function (response, typeContentGet) {
        var objReturn = null;
        if (true === response.ok) { //성공
            switch (typeContentGet) {
                case 1 /* AjaxCallContentGetType.Response */:
                    objReturn = response;
                    break;
                case 2 /* AjaxCallContentGetType.Json */:
                    objReturn = response.json();
                    var aaa = objReturn;
                    break;
                case 3 /* AjaxCallContentGetType.Binary */:
                    objReturn = response.arrayBuffer();
                    break;
                case 0 /* AjaxCallContentGetType.Text */:
                default:
                    objReturn = response.text();
                    break;
            }
        }
        return objReturn;
    }; //end ResponseToData
    return DGU_AjaxAssist2;
}());
export default DGU_AjaxAssist2;
