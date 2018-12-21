'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {Initializer} from './initializer';
import {Jumper} from './jumper';
import { DBHelper } from './utils/DBHelper';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
   
    //初始化期，初始化基本数据
    new Initializer().init().then((dbHelper:DBHelper)=>{
        new Jumper().register(context,dbHelper);
    }).catch((info)=>{

    });

    //定义跳转器
   

    

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "mx-plugin" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('mx.plugin', (args) => {
        // The code you place here will be executed every time your command is executed
        vscode.window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(disposable);

}
// this method is called when your extension is deactivated
export function deactivate() {
    console.info('插件不活动啦。。。。deactivate');
}