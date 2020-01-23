export default (editor, opt = {}) => {
  const bm = editor.BlockManager;
  const allBlocks = {
    category: opt.categoryLabel,
  };
  const subject = document.getElementById("subject").value;
  const from = document.getElementById("from").value;
  const preheader = document.getElementById("preheader").value;

  opt.resetBlocks && bm.getAll().reset();

  window.data.blocks().forEach(function (block) {
    bm.add(block.name, {
      ...block,
      ...allBlocks
    });
  });

};