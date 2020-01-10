export default (editor, opt = {}) => {
  const bm = editor.BlockManager;
  const allBlocks = {
    category: opt.categoryLabel,
  };
  const subject = document.getElementById("subject").value;
  const from = document.getElementById("from").value;
  const preheader = document.getElementById("preheader").value;

  opt.resetBlocks && bm.getAll().reset();
  
  bm.add('mj-wrapper', {
    label: 'Wrapper',
    content: `<mj-wrapper></mj-wrapper>`,
    attributes: { class: 'fa fa-object-group' },
    ...allBlocks,
  });

  bm.add('mj-section', {
    label: 'Section',
    content: `<mj-section>
        <mj-column></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    ...allBlocks,
  });

  bm.add('mj-column', {
    label: 'Column',
    content: `<mj-column></mj-column>`,
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    ...allBlocks,
  });

  bm.add('mj-text', {
    label: 'Text',
    content: `<mj-text>Hello,<br />Thank you for visiting.<br /><br />Sincerely,<br /><b>${from}</b></mj-text>`,
    attributes: { class: 'gjs-fonts gjs-f-text' },
    ...allBlocks,
  });

  bm.add('mj-navbar', {
    label: 'NavBar',
    content: `<mj-navbar>
    <mj-navbar-link>Getting started</mj-navbar-link>
    <mj-navbar-link>Try it live</mj-navbar-link>
    <mj-navbar-link>Templates</mj-navbar-link>
    <mj-navbar-link>Components</mj-navbar-link>
    </mj-navbar>`,
    attributes: { class: 'fa fa-bars' },
    ...allBlocks,
  });

  bm.add('mj-navbar-link', {
    label: 'NavBar Link',
    content: `<mj-navbar-link>Link 1</mj-navbar-link>`,
    attributes: { class: 'gjs-fonts gjs-f-button' },
    ...allBlocks,
  });

  bm.add('mj-hero', {
    label: 'Hero Element',
    content: `<mj-hero mode="fixed-height" height="469px" background-width="600px" background-height="469px" background-url="https://via.placeholder.com/600x300?text=BACKGROUND" background-color="#2a3448" padding="100px 0px">
      <mj-text padding="20px" color="#ffffff" align="center" font-size="45px" line-height="45px" font-weight="900">
        GO TO SPACE
      </mj-text>
      <mj-button href="https://mjml.io/" align="center">
        ORDER YOUR TICKET NOW
      </mj-button>
    </mj-hero>`,
    attributes: { class: 'fa fa-square' },
    ...allBlocks,
  });

  bm.add('mj-button', {
    label: 'Button',
    content: '<mj-button>Button</mj-button>',
    attributes: { class: 'gjs-fonts gjs-f-button' },
    ...allBlocks,
  });

  bm.add('mj-image', {
    label: 'Image',
    content: '<mj-image src="https://via.placeholder.com/650x250?text=MJ-IMAGE">',
    attributes: { class: 'fa fa-image' },
    ...allBlocks,
  });

  bm.add('mj-divider', {
    label: 'Divider',
    content: '<mj-divider/>',
    attributes: { class: 'gjs-fonts gjs-f-divider' },
    ...allBlocks,
  });

  bm.add('mj-spacer', {
    label: 'Spacer',
    content: '<mj-spacer/>',
    attributes: { class: 'fa fa-arrows-v' },
    ...allBlocks,
  });

  bm.add('mj-social-group', {
    label: 'Group Social',
    content: `<mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">
        <mj-social-element name="facebook"></mj-social-element>
        <mj-social-element name="google"></mj-social-element>
        <mj-social-element name="twitter"></mj-social-element>
      </mj-social>`,
    attributes: { class: 'fa fa-share-alt' },
    ...allBlocks,
  });

  bm.add('mj-social-element', {
    label: 'Social Element',
    content: '<mj-social-element name="facebook" />',
    attributes: { class: 'fa fa-share-alt' },
    ...allBlocks,
  });
};
