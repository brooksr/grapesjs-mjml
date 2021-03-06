export default (editor, opt = {}) => {
  const tltAttr = 'title';
  const tltPosAttr = 'data-tooltip-pos';
  const pnm = editor.Panels;
  const optPanel = pnm.getPanel('options');
  const cmdPanel = pnm.getPanel('options');
  const updateTooltip = (coll) => {
    coll.each((item) => {
      var attrs = item.get('attributes');
      attrs[tltPosAttr] = 'bottom';
      item.set('attributes', attrs);
    });
  };

  pnm.addButton('options', {
    id: 'edit-code',
    className: 'fa fa-pencil',
    command: 'edit-code',
  });
  
  pnm.addButton('options', {
    id: opt.cmdTglImages,
    className: 'fa fa-warning',
    command: opt.cmdTglImages,
    attributes: {[tltAttr]: opt.cmtTglImagesLabel},
  });

  pnm.addButton('options', {
    id: 'clear-all',
    className: 'fa fa-trash',
    attributes: {title: 'Clear canvas'},
    command: 'clear-all'
  });

  pnm.addButton('options', {
    id: 'eoa-test',
    className: 'fa fa-paper-plane',
    attributes: {title: 'EOA Test'},
    command: 'eoa-test'
  });

  if (optPanel) {
    // Fix tooltip position
    const cmdBtns = optPanel.get('buttons');
    cmdBtns.each((btn) => {
      const attrs = btn.get('attributes');
      attrs[tltPosAttr] = 'bottom';
      btn.set('attributes', attrs);
    });
    // Remove preview
    const prvBtn = pnm.addButton('options', 'preview');
    prvBtn && cmdBtns.remove(prvBtn);
  }

  // Clean commands panel
  if (cmdPanel) {
    const cmdBtns = cmdPanel.get('buttons');
    // cmdBtns.reset();
    cmdBtns.add([{
      id: 'undo',
      className: 'fa fa-undo',
      command: 'undo',
      attributes: { [tltAttr]: opt.cmdBtnUndoLabel }
    }, {
      id: 'redo',
      className: 'fa fa-repeat',
      command: 'redo',
      attributes: { [tltAttr]: opt.cmdBtnRedoLabel }
    }]);
    updateTooltip(cmdBtns);
  }
  // Turn off default devices select and create new one
  editor.getConfig().showDevices = 0;
  const devicePanel = pnm.addPanel({ id: 'devices-c' });
  const deviceBtns = devicePanel.get('buttons');
  devicePanel.get('buttons').add([{
    id: 'deviceDesktop',
    command: 'set-device-desktop',
    className: 'fa fa-desktop',
  }, {
    id: 'deviceTablet',
    command: 'set-device-tablet',
    className: 'fa fa-tablet',
  }, {
    id: 'deviceMobile',
    command: 'set-device-mobile',
    className: 'fa fa-mobile',
  }]);
  updateTooltip(deviceBtns);

};
