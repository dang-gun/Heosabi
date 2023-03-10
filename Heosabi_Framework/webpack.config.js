const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//�ҽ� ��ġ
const RootPath = path.resolve(__dirname);
const SrcPath = path.resolve(RootPath, "src");

//�������� ����ϴ� ���� �̸�
const WwwRoot = "build";
//�������� ����ϴ� ���� ��ġ
const WwwRootPath = path.resolve(__dirname, WwwRoot);

//���ø� ��ġ
const IndexHtmlPath = path.resolve(SrcPath, "index.html");
//const IndexHtmlPath = path.resolve(SrcPath, "test01.html");
//����� ��� ���� �̸�
let OutputFolder = "development";
//����� ��� ��ġ
let OutputPath = path.resolve(WwwRootPath, OutputFolder);
//����� ��� ��ġ - ��� �ּ�
let OutputPath_relative = path.resolve("/", OutputFolder);


module.exports = (env, argv) =>
{
    //������(���δ���)���� ����
    const EnvPrductionIs = argv.mode === "production";
    if (true === EnvPrductionIs)
    {
        //������ ��� ���� ����
        OutputFolder = "production";
        OutputPath = path.resolve(WwwRootPath, OutputFolder);
        OutputPath_relative = path.resolve("/", OutputFolder);
    }

    return {
        /** ���� ��� */
        mode: EnvPrductionIs ? "production" : "development",
        devtool: "eval",
        //devtool: "inline-source-map",
        resolve: {
            extensions: [".js", ".ts"]
        },
        output: {// ���������� ������� js
            /** ���� ��ġ */
            path: OutputPath,
            /** ���� ���� �� ���������� ������� ���� */
            filename: "app.js"
        },
        module: {
            // ��� ��Ģ
            rules: [
                // TypeScript �δ� ����
                {
                    test: /\.ts?$/i,
                    exclude: /node_modules/,
                    use: ['ts-loader']
                }
            ]
        },
        plugins: [
            // ������ �����(��>��������)�� HTML�� �������ִ� �÷�����
            new HtmlWebpackPlugin({ template: IndexHtmlPath }),
            // ��������� ����ִ� �÷�����
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [
                    '**/*',
                    "!robots.txt",
                    "!Upload"
                ]
            }),
        ],

        devServer: {
            /** ���� ��Ʈ */
            port: "9500",
            /** ��������� ��ġ */
            static: [path.resolve("./", "build/development/")],
            /** ������ ���� ���� */
            open: true,
            /** �ָ��ε� ��뿩�� */
            hot: true,
            /** ���̺� ���ε� ��뿩�� */
            liveReload: true
        },
    };
}