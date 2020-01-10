import tglImagesCommand from './toggleImagesCommand';
import importCommand from './command-import-mjml';
import exportCommand from './command-export-mjml';

export default (editor, opt = {}) => {
  const cmd = editor.Commands;
  const exportName = opt.overwriteExport ? 'export-template' : 'mjml-export';

  cmd.add('mjml-import', importCommand(editor, opt));
  cmd.add(exportName, exportCommand(editor, opt));

  cmd.add(opt.cmdTglImages, tglImagesCommand(opt));

  cmd.add('undo', {
    run(editor, sender) {
      sender.set('active', 0);
      editor.UndoManager.undo(1);
    }
  });

  cmd.add('redo', {
    run(editor, sender) {
      sender.set('active', 0);
      editor.UndoManager.redo(1);
    }
  });
  cmd.add('clear-all', {
    run(editor, sender) {
      sender && sender.set('active', false);
      if(confirm('Are you sure you want to clean the canvas?')){
        editor.DomComponents.clear();
        setTimeout(function(){
          localStorage.clear();
        },0);
      }
    }
  });
  cmd.add('eoa-test', {
    run(editor, sender) {
      sender.set('active', 0);
      fetch('https://api.emailonacid.com/v5/email/tests', {
        method: 'POST',
        headers: { 'Authorization': 'Basic NTY3ZWIzM2I4MzZhNjExYTExNjRkMWM2NmI0ZjcyMzQwZmZlYzliMTp1cHNlbGxpdDEyMw==' },
        body: JSON.stringify({
          "subject": "My Email Subject",
          "html": editor.Commands.run('mjml-get-code').html
        })
      })
        .then((response) => response.json())
        .then((data) => {
          window.open("https://app.emailonacid.com/app/acidtest/"+data.id+"/list", "emailonacid");
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  });
  cmd.add('set-device-desktop', {
    run(editor) {
      editor.setDevice('Desktop');
    }
  });
  cmd.add('set-device-tablet', {
    run(editor) {
      editor.setDevice('Tablet');
    }
  });
  cmd.add('set-device-mobile', {
    run(editor) {
      editor.setDevice('Mobile portrait');
    }
  });

};
