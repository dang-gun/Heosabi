const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
        devtool: "inline-source-map",
        //devtool: "inline-source-map",
        resolve: {
            extensions: [".js", ".ts"],
            alias: {
                "@": SrcPath,
                "@H_Fnd": path.resolve("../Heosabi_Foundation/src/Heosabi"),

                "@Faculty": path.resolve(SrcPath, "Faculty"),
                "@Pages": path.resolve(SrcPath, "Pages"),
                "@Util": path.resolve(SrcPath, "Utility"),
                
            }
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

            //�״�� ��������� ������ ���� ����
            new CopyPlugin({
                patterns: [
                    {
                        //��� html���� ����
                        //from: path.resolve(SrcPath, "**/*.html"),
                        //from: path.resolve(SrcPath) + "/**/*.html",
                        from: "./src/**/*.html",
                        to({ context, absoluteFilename })
                        {
                            //'src/'�� ����
                            let sOutDir = path.relative(context, absoluteFilename).substring(4);
                            //index.html�� ����Ʈ�� �������ֹǷ� ���⼱ ��ŵ�Ѵ�.
                            if ("index.html" === sOutDir)
                            {
                                //sOutDir = "index_Temp.html";
                                sOutDir = "";
                            }
                            console.log("sOutDir : " + sOutDir);
                            return `${sOutDir}`;
                        },
                    },
                ],
                options: {
                    concurrency: 100,
                },
            }),
        ],

        devServer: {
            /** ���� ��Ʈ */
            port: "9601",
            /** ��������� ��ġ */
            static: [path.resolve("./", "build/development/")],
            /** ������ ���� ���� */
            //open: true,
            /** �ָ��ε� ��뿩�� */
            hot: true,
            /** ���̺� ���ε� ��뿩�� */
            liveReload: true,
            headers: {
                'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'",
            },
        },
    };
}