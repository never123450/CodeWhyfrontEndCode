要在 VS Code 中执行 TypeScript 代码，您需要进行以下步骤： 
 
1. 确保已在计算机上安装了 Node.js 运行时环境。您可以从 Node.js 官方网站（https://nodejs.org）下载并安装适合您操作系统的版本。 
 
2. 在 VS Code 中创建一个新的 TypeScript 文件（.ts 后缀），或者打开一个已有的 TypeScript 文件。 
 
3. 在终端中切换到包含 TypeScript 文件的目录。 
 
4. 运行以下命令来安装 TypeScript 编译器（如果尚未安装）：
npm install -g typescript
5. 使用以下命令编译 TypeScript 文件：
tsc 文件名.ts
这将生成一个与 TypeScript 文件同名的 JavaScript 文件。 
 
6. 运行生成的 JavaScript 文件：
node 文件名.js
这将在终端中执行 JavaScript 代码，并输出结果。 
 
通过以上步骤，您可以在 VS Code 中成功执行 TypeScript 代码。