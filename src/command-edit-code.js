import mjml2html from 'mjml';

export default (editor, opt = {}) => {
  const config = editor.getConfig();
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  const container = document.createElement('div');
  const cmdm = editor.Commands;
  //container.style = 'display: flex; justify-content: space-between;';

  // Init code viewer
  codeViewer.set({
    codeName: 'htmlmixed',
    theme: opt.codeViewerTheme,
  });

  const getMjml = () => {
    const mjml = opt.preMjml + editor.getHtml() + opt.postMjml;
    return mjml2html(mjml);
  };

  // Set the command which could be used outside
  cmdm.add('edit-code', {
    run() {
      return getMjml();
    }
  });

  let mjmlCode;

  return {

    buildEditor(label) {
      const ecm = editor.CodeManager;
      const cm = ecm.getViewer('CodeMirror').clone();
      const txtarea = document.createElement('textarea');
      const el = document.createElement('div');
      el.style = 'flex:1 0 auto; padding:5px; max-width:100%; box-sizing:border-box;';

      const codeEditor = cm.set({
        label: label,
        codeName: 'htmlmixed',
        theme: opt.codeViewerTheme,
        input: txtarea,
        readOnly: false
      });

      const btn = document.createElement("button");
      btn.textContent = "Save";
      btn.onclick = () => {
        editor.DomComponents.clear();
        editor.addComponents(opt.preMjml + codeEditor.getContent() + opt.postMjml);
      };
      container.appendChild(btn);

      const elEditor = new ecm.EditorView({ model: codeEditor, config }).render().el;
      el.appendChild(elEditor);
      codeEditor.init(txtarea);
      return { codeEditor, el };
    },

    run(editor, sender = {}) {
      const modal = editor.Modal;
      modal.setTitle("Edit Code");
      modal.setContent('');
      modal.setContent(container);

      if (!mjmlCode) {
        const codeViewer = this.buildEditor('MJML');
        mjmlCode = codeViewer.codeEditor;
        container.appendChild(codeViewer.el);
      }

      modal.open();

      if (mjmlCode) {
        mjmlCode.setContent(opt.preMjml + editor.getHtml() + opt.postMjml);
        mjmlCode.editor.refresh();
      }

      sender.set && sender.set('active', 0);
    },

  };
};
