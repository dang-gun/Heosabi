/** ����Ϳ� ���޵Ǵ� ��Ī ���� �� */
/** ����� ��ġ ���� */
export class RouterMatchInfoModel
{
    /** ��ü URL */
    url: string;

    /** ������ �Ǵ� �н� ���� */
    asPath: string;

    /** ?�ڷ� �ٴ� ������Ʈ�� */
    queryString: string;
    /** queryString�� �ؼ��� ������ */
    query: URLSearchParams | null;

    /** 
     * �Ķ��Ÿ�� �Ǵܵ� ������
     * �̸�, ��
     */
    params: Map<string, string>;
}
