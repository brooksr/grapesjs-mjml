export default (editor, opt = {}) => {
  const config = editor.getConfig();
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  const container = document.createElement('div');

  // Init code viewer
  codeViewer.set({
    codeName: 'htmlmixed',
    theme: opt.codeViewerTheme,
  });

  let mjmlCode;

  return {

    buildEditor(label) {
      const ecm = editor.CodeManager;
      const cm = ecm.getViewer('CodeMirror').clone();
      const txtarea = document.createElement('textarea');
      const el = document.createElement('div');
      el.style = 'flex:1 0 auto; padding:5px; max-width:100%; box-sizing:border-box;';
      const pfx = config.stylePrefix || '';

      const codeEditor = cm.set({
        label: label,
        codeName: 'htmlmixed',
        theme: opt.codeViewerTheme,
        input: txtarea,
        readOnly: false
      });

      const btn = document.createElement("button");
      btn.textContent = "Save";
      btn.className = `${pfx}btn-prim ${pfx}btn-edit`;
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
