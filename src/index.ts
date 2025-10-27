import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ILauncher } from '@jupyterlab/launcher';
import { ICommandPalette } from '@jupyterlab/apputils';
import { TextModelFactory } from '@jupyterlab/docregistry';


/**
 * Initialization data for the jlab_asm_editor extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlab_asm_editor:plugin',
  description: 'A plugin to add an assembly editor to the launcher in tljh',
  autoStart: true,
  requires: [ILauncher, ICommandPalette], // Ensure dependencies are listed
  activate: (app: JupyterFrontEnd, launcher: ILauncher, palette: ICommandPalette) => {
    console.log('JupyterLab extension jlab_asm_editor is activated!');
    const new_asm_file = 'jlab_asm_editor:create-asm';

    app.commands.addCommand(new_asm_file, {
      label: 'ASM File',
      caption: 'Create a new ASM file',
      iconClass: 'jp-FileIcon',
      execute: () => {
        const model = new TextModelFactory().createNew();
        model.sharedModel.setSource('');
        const widget = app.serviceManager.contents.newUntitled({
          type: 'file',
          ext: '.asm',
        });
        widget.then(file => {
          //app.commands.execute('docmanager:open', { path: file.path });
          app.commands.execute('docmanager:open', { path: file.path, factory: 'Editor' });
        });
      }
    });

    const category = 'File Operations';
    launcher.add({ command: new_asm_file });
    palette.addItem({ command: new_asm_file, category });

  }
};

export default plugin;
