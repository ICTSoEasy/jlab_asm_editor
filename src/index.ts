import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jlab_asm_editor extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlab_asm_editor:plugin',
  description: 'A plugin to add an assembly editor to the launcher in tljh',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jlab_asm_editor is activated!');
  }
};

export default plugin;
