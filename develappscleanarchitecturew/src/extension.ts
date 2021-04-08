// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let create_feature = vscode.commands.registerCommand('develappscleanarchitecture.create_feature', async () => {
		// The code you place here will be executed every time your command is executed
		const featureNameUser = await vscode.window.showInputBox();

		if(featureNameUser == null || featureNameUser == "") {
			vscode.window.showErrorMessage('Feature name must be no empty');
			return;
		}

		let featureName = featureNameUser.trim();
		let firstCharUppercased = featureName.charAt(0).toUpperCase();
		let internalFeatureName = firstCharUppercased + featureName.substring(1);

		const wsedit = new vscode.WorkspaceEdit();
		if (vscode.workspace.workspaceFolders) {
			const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
			vscode.window.showInformationMessage(wsPath);
			
			let filePath0 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/data/datasources/.gitkeep');
			let filePath1 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/data/models/.gitkeep');
			let filePath2 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/data/repositories/.gitkeep');
		
			let filePath3 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/domain/entities/.gitkeep');
			let filePath4 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/domain/repositories/.gitkeep');
			let filePath5 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/domain/usecases/.gitkeep');
			
			let filePath6 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/presentation/bloc/.gitkeep');
			let filePath7 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/presentation/pages/' + featureName + '_page.dart');
			let filePath8 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/presentation/widgets/.gitkeep');

			let filePath_0 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/data/datasources/.gitkeep');
			let filePath_1 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/data/models/.gitkeep');
			let filePath_2 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/data/repositories/.gitkeep');
			
			let filePath_3 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/domain/entities/.gitkeep');
			let filePath_4 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/domain/repositories/.gitkeep');
			let filePath_5 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/domain/usecases/.gitkeep');
			
			let filePath_6 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/presentation/bloc/.gitkeep');
			let filePath_7 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/presentation/pages/' + featureName + '_page_test.dart');
			let filePath_8 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/presentation/widgets/.gitkeep');
		
			wsedit.createFile(filePath0, { ignoreIfExists: true });
			wsedit.createFile(filePath1, { ignoreIfExists: true });
			wsedit.createFile(filePath2, { ignoreIfExists: true });
			wsedit.createFile(filePath3, { ignoreIfExists: true });
			wsedit.createFile(filePath4, { ignoreIfExists: true });
			wsedit.createFile(filePath5, { ignoreIfExists: true });
			wsedit.createFile(filePath6, { ignoreIfExists: true });
			wsedit.createFile(filePath7, { ignoreIfExists: true });
			wsedit.createFile(filePath8, { ignoreIfExists: true });

			wsedit.createFile(filePath_0, { ignoreIfExists: true });
			wsedit.createFile(filePath_1, { ignoreIfExists: true });
			wsedit.createFile(filePath_2, { ignoreIfExists: true });
			wsedit.createFile(filePath_3, { ignoreIfExists: true });
			wsedit.createFile(filePath_4, { ignoreIfExists: true });
			wsedit.createFile(filePath_5, { ignoreIfExists: true });
			wsedit.createFile(filePath_6, { ignoreIfExists: true });
			wsedit.createFile(filePath_7, { ignoreIfExists: true });
			wsedit.createFile(filePath_8, { ignoreIfExists: true });

			await vscode.workspace.applyEdit(wsedit);

			//*featureName*_page
			let docu6 = await vscode.workspace.openTextDocument(filePath7);
			let e6 = await vscode.window.showTextDocument(docu6);
			await e6.edit(edit => {
				edit.insert(new vscode.Position(0, 0), "import 'package:flutter/material.dart';\n\n");
				edit.insert(new vscode.Position(1, 0), "\n");
				edit.insert(new vscode.Position(2, 0), "class " + internalFeatureName + "Page extends StatefulWidget {\n");
				edit.insert(new vscode.Position(3, 0), "	@override\n");
				edit.insert(new vscode.Position(4, 0), "	createState() => _" + internalFeatureName + "Page();\n");
				edit.insert(new vscode.Position(5, 0), "}\n");
				edit.insert(new vscode.Position(6, 0), "class _" + internalFeatureName + "Page extends State<" + internalFeatureName + "Page> {\n");
				edit.insert(new vscode.Position(7, 0), "	@override\n");
				edit.insert(new vscode.Position(8, 0), "	Widget build(BuildContext context) {\n");
				edit.insert(new vscode.Position(9, 0), "		return Scaffold(\n");
				edit.insert(new vscode.Position(10, 0), "			appBar: AppBar(),\n");
				edit.insert(new vscode.Position(11, 0), "		);\n");
				edit.insert(new vscode.Position(12, 0), "	}\n");
				edit.insert(new vscode.Position(13, 0), "}\n");
			});

			vscode.window.showInformationMessage('Feature directories created!');
			
			
		}
		
	});

	let create_project_structure = vscode.commands.registerCommand('develappscleanarchitecture.create_project_structure', async () => {

		let featureName = "Sample";

		const wsedit = new vscode.WorkspaceEdit();

		console.log(vscode.workspace.workspaceFolders);
		
		if (vscode.workspace.workspaceFolders) {
			const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
			vscode.window.showInformationMessage(wsPath);
			
			const filePath01 = vscode.Uri.file(wsPath + '/lib/api/.gitkeep');
			const filePath02 = vscode.Uri.file(wsPath + '/lib/core/error/.gitkeep');
			const filePath03 = vscode.Uri.file(wsPath + '/lib/core/platorm/.gitkeep');
			const filePath04 = vscode.Uri.file(wsPath + '/lib/core/usecase/.gitkeep');


			const filePath05 = vscode.Uri.file(wsPath + '/lib/common/app_colors.dart');
			const filePath06 = vscode.Uri.file(wsPath + '/lib/common/app_routes.dart');
			const filePath07 = vscode.Uri.file(wsPath + '/lib/common/app_text_styles.dart');
			const filePath08 = vscode.Uri.file(wsPath + '/lib/common/app_themes.dart');
			const filePath09 = vscode.Uri.file(wsPath + '/lib/common/image_resources.dart');
			const filePath10 = vscode.Uri.file(wsPath + '/lib/di/.gitkeep');
	
			let filePath0 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/data/datasources/.gitkeep');
			let filePath1 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/data/models/.gitkeep');
			let filePath2 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/data/repositories/.gitkeep');
			
			let filePath3 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/domain/entities/.gitkeep');
			let filePath4 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/domain/repositories/.gitkeep');
			let filePath5 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/domain/usecases/.gitkeep');
			
			let filePath6 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/presentation/bloc/.gitkeep');
			let filePath7 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/presentation/pages/' + featureName + '_page.dart');
			let filePath8 = vscode.Uri.file(wsPath + '/lib/features/' + featureName + '/presentation/widgets/.gitkeep');

			const filePath_01 = vscode.Uri.file(wsPath + '/test/api/.gitkeep');
			const filePath_02 = vscode.Uri.file(wsPath + '/test/core/error/.gitkeep');
			const filePath_03 = vscode.Uri.file(wsPath + '/test/core/platorm/.gitkeep');
			const filePath_04 = vscode.Uri.file(wsPath + '/test/core/usecase/.gitkeep');


			const filePath_05 = vscode.Uri.file(wsPath + '/test/common/app_colors.dart');
			const filePath_06 = vscode.Uri.file(wsPath + '/test/common/app_routes.dart');
			const filePath_07 = vscode.Uri.file(wsPath + '/test/common/app_text_styles.dart');
			const filePath_08 = vscode.Uri.file(wsPath + '/test/common/app_themes.dart');
			const filePath_09 = vscode.Uri.file(wsPath + '/test/common/image_resources.dart');
			const filePath_10 = vscode.Uri.file(wsPath + '/test/di/.gitkeep');
	
			let filePath_0 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/data/datasources/.gitkeep');
			let filePath_1 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/data/models/.gitkeep');
			let filePath_2 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/data/repositories/.gitkeep');
			
			let filePath_3 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/domain/entities/.gitkeep');
			let filePath_4 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/domain/repositories/.gitkeep');
			let filePath_5 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/domain/usecases/.gitkeep');
			
			let filePath_6 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/presentation/bloc/.gitkeep');
			let filePath_7 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/presentation/pages/' + featureName + '_page_test.dart');
			let filePath_8 = vscode.Uri.file(wsPath + '/test/features/' + featureName + '/presentation/widgets/.gitkeep');

			wsedit.createFile(filePath01, { ignoreIfExists: true });
			wsedit.createFile(filePath02, { ignoreIfExists: true });
			wsedit.createFile(filePath03, { ignoreIfExists: true });
			wsedit.createFile(filePath04, { ignoreIfExists: true });
			wsedit.createFile(filePath05, { ignoreIfExists: true });
			wsedit.createFile(filePath06, { ignoreIfExists: true });
			wsedit.createFile(filePath07, { ignoreIfExists: true });
			wsedit.createFile(filePath08, { ignoreIfExists: true });
			wsedit.createFile(filePath09, { ignoreIfExists: true });
			wsedit.createFile(filePath10, { ignoreIfExists: true });

			wsedit.createFile(filePath0, { ignoreIfExists: true });
			wsedit.createFile(filePath1, { ignoreIfExists: true });
			wsedit.createFile(filePath2, { ignoreIfExists: true });
			wsedit.createFile(filePath3, { ignoreIfExists: true });
			wsedit.createFile(filePath4, { ignoreIfExists: true });
			wsedit.createFile(filePath5, { ignoreIfExists: true });
			wsedit.createFile(filePath6, { ignoreIfExists: true });
			wsedit.createFile(filePath7, { ignoreIfExists: true });
			wsedit.createFile(filePath8, { ignoreIfExists: true });

			wsedit.createFile(filePath_01, { ignoreIfExists: true });
			wsedit.createFile(filePath_02, { ignoreIfExists: true });
			wsedit.createFile(filePath_03, { ignoreIfExists: true });
			wsedit.createFile(filePath_04, { ignoreIfExists: true });
			wsedit.createFile(filePath_05, { ignoreIfExists: true });
			wsedit.createFile(filePath_06, { ignoreIfExists: true });
			wsedit.createFile(filePath_07, { ignoreIfExists: true });
			wsedit.createFile(filePath_08, { ignoreIfExists: true });
			wsedit.createFile(filePath_09, { ignoreIfExists: true });
			wsedit.createFile(filePath_10, { ignoreIfExists: true });

			wsedit.createFile(filePath_0, { ignoreIfExists: true });
			wsedit.createFile(filePath_1, { ignoreIfExists: true });
			wsedit.createFile(filePath_2, { ignoreIfExists: true });
			wsedit.createFile(filePath_3, { ignoreIfExists: true });
			wsedit.createFile(filePath_4, { ignoreIfExists: true });
			wsedit.createFile(filePath_5, { ignoreIfExists: true });
			wsedit.createFile(filePath_6, { ignoreIfExists: true });
			wsedit.createFile(filePath_7, { ignoreIfExists: true });
			wsedit.createFile(filePath_8, { ignoreIfExists: true });

			await vscode.workspace.applyEdit(wsedit);

			//app_colors
			let docu1 = await vscode.workspace.openTextDocument(filePath05);
			let e1 = await vscode.window.showTextDocument(docu1);
			await e1.edit(edit => {
				edit.insert(new vscode.Position(0, 0), "import 'package:flutter/material.dart';\n");
				edit.insert(new vscode.Position(1, 0), "\n");
				edit.insert(new vscode.Position(2, 0), "class AppColors {\n");
				edit.insert(new vscode.Position(3, 0), "	static final Color baseColor = Color(0xFF212735);\n");
				edit.insert(new vscode.Position(4, 0), "}\n");
			});

			//app_routes
			let docu2 = await vscode.workspace.openTextDocument(filePath06);
			let e2 = await vscode.window.showTextDocument(docu2);
			await e2.edit(edit => {
				edit.insert(new vscode.Position(0, 0), "import 'package:flutter/material.dart';\n");
				edit.insert(new vscode.Position(1, 0), "\n");
				edit.insert(new vscode.Position(2, 0), "class AppRoutes {\n");
				edit.insert(new vscode.Position(3, 0), "	static final String root = \"/\";\n");
				edit.insert(new vscode.Position(4, 0), "}\n");
			});

			//app_text_styles
			let docu3 = await vscode.workspace.openTextDocument(filePath07);
			let e3 = await vscode.window.showTextDocument(docu3);
			await e3.edit(edit => {
				edit.insert(new vscode.Position(0, 0), "import 'package:flutter/material.dart';\n");
				edit.insert(new vscode.Position(1, 0), "\n");
				edit.insert(new vscode.Position(2, 0), "class AppTextStyle {\n");
				edit.insert(new vscode.Position(4, 0), "	/*static TextStyle getAppTextStyle(\n");
				edit.insert(new vscode.Position(5, 0), "		{double size = 14,\n");
				edit.insert(new vscode.Position(6, 0), "		FontWeight weight = FontWeight.normal,\n");
				edit.insert(new vscode.Position(7, 0), "		FontStyle style = FontStyle.normal,\n");
				edit.insert(new vscode.Position(8, 0), "		Color color = Colors.black}) {\n");
				edit.insert(new vscode.Position(9, 0), "	  return TextStyle(\n");
				edit.insert(new vscode.Position(10, 0), "		  color: color,\n");
				edit.insert(new vscode.Position(11, 0), "		  fontSize: size,\n");
				edit.insert(new vscode.Position(12, 0), "		  fontWeight: weight,\n");
				edit.insert(new vscode.Position(13, 0), "		  fontStyle: style,\n");
				edit.insert(new vscode.Position(14, 0), "		  fontFamily: \"Jost\"\n");
				edit.insert(new vscode.Position(15, 0), "	}*/\n");
				edit.insert(new vscode.Position(16, 0), "}\n");
			});

			//app_theme
			let docu4 = await vscode.workspace.openTextDocument(filePath08);
			let e4 = await vscode.window.showTextDocument(docu4);
			await e4.edit(edit => {
				edit.insert(new vscode.Position(0, 0), "class AppThemes {\n");
				edit.insert(new vscode.Position(1, 0), "	//static final ThemeData appTheme = ThemeData()\n");
				edit.insert(new vscode.Position(2, 0), "}\n");
			});

			//image_resources
			let docu5 = await vscode.workspace.openTextDocument(filePath09);
			let e5 = await vscode.window.showTextDocument(docu5);
			await e5.edit(edit => {
				edit.insert(new vscode.Position(0, 0), "class ImageResources {\n");
				edit.insert(new vscode.Position(1, 0), "	//static final String loginBackground = \"assets/images/bg.png\";\n");
				edit.insert(new vscode.Position(2, 0), "}\n");
			});

			//*featureName*_page
			let docu6 = await vscode.workspace.openTextDocument(filePath7);
			let e6 = await vscode.window.showTextDocument(docu6);
			await e6.edit(edit => {
				edit.insert(new vscode.Position(0, 0), "import 'package:flutter/material.dart';\n\n");
				edit.insert(new vscode.Position(1, 0), "\n");
				edit.insert(new vscode.Position(2, 0), "class " + featureName + "Page extends StatefulWidget {\n");
				edit.insert(new vscode.Position(3, 0), "	@override\n");
				edit.insert(new vscode.Position(4, 0), "	createState() => _" + featureName + "Page();\n");
				edit.insert(new vscode.Position(5, 0), "}\n");
				edit.insert(new vscode.Position(6, 0), "class _" + featureName + "Page extends State<" + featureName + "Page> {\n");
				edit.insert(new vscode.Position(7, 0), "	@override\n");
				edit.insert(new vscode.Position(8, 0), "	Widget build(BuildContext context) {\n");
				edit.insert(new vscode.Position(9, 0), "		return Scaffold(\n");
				edit.insert(new vscode.Position(10, 0), "			appBar: AppBar(),\n");
				edit.insert(new vscode.Position(11, 0), "		);\n");
				edit.insert(new vscode.Position(12, 0), "	}\n");
				edit.insert(new vscode.Position(13, 0), "}\n");
			});



			vscode.window.showInformationMessage('Develapps clean architecture directories created!');
			
			
		}
	});

	context.subscriptions.push(create_feature, create_project_structure);//, createProjectStructure);
}

// this method is called when your extension is deactivated
export function deactivate() {}
