var data = {
  'blocks': () => (
    [{
      name: 'mj-wrapper',
      label: 'Wrapper',
      content: `<mj-wrapper></mj-wrapper>`,
      attributes: {
        class: 'fa fa-object-group'
      }
    }, {
      name: 'mj-section',
      label: 'Section',
      content: `<mj-section>
            <mj-column></mj-column>
          </mj-section>`,
      attributes: {
        class: 'gjs-fonts gjs-f-b1'
      }
    }, {
      name: 'mj-column',
      label: 'Column',
      content: `<mj-column></mj-column>`,
      attributes: {
        class: 'gjs-fonts gjs-f-b2'
      }
    }, {
      name: 'mj-text',
      label: 'Text',
      content: `<mj-text>Hello,<br />Thank you for visiting.<br /><br />Sincerely,<br /><b>${from}</b></mj-text>`,
      attributes: {
        class: 'gjs-fonts gjs-f-text'
      }
    }, {
      name: 'mj-navbar',
      label: 'NavBar',
      content: `<mj-navbar>
        <mj-navbar-link>Getting started</mj-navbar-link>
        <mj-navbar-link>Try it live</mj-navbar-link>
        <mj-navbar-link>Templates</mj-navbar-link>
        <mj-navbar-link>Components</mj-navbar-link>
        </mj-navbar>`,
      attributes: {
        class: 'fa fa-bars'
      }
    }, {
      name: 'mj-navbar-link',
      label: 'NavBar Link',
      content: `<mj-navbar-link>Link 1</mj-navbar-link>`,
      attributes: {
        class: 'gjs-fonts gjs-f-button'
      }
    }, {
      name: 'mj-hero',
      label: 'Hero Element',
      content: `<mj-hero mode="fixed-height" height="469px" background-width="600px" background-height="469px" background-url="https://via.placeholder.com/600x300?text=BACKGROUND" background-color="#2a3448" padding="100px 0px">
          <mj-text padding="20px" color="#ffffff" align="center" font-size="45px" line-height="45px" font-weight="900">
            GO TO SPACE
          </mj-text>
          <mj-button href="https://mjml.io/" align="center">
            ORDER YOUR TICKET NOW
          </mj-button>
        </mj-hero>`,
      attributes: {
        class: 'fa fa-square'
      }
    }, {
      name: 'mj-button',
      label: 'Button',
      content: '<mj-button>Button</mj-button>',
      attributes: {
        class: 'gjs-fonts gjs-f-button'
      }
    }, {
      name: 'mj-image',
      label: 'Image',
      content: '<mj-image src="https://via.placeholder.com/650x250?text=MJ-IMAGE">',
      attributes: {
        class: 'fa fa-image'
      }
    }, {
      name: 'mj-divider',
      label: 'Divider',
      content: '<mj-divider/>',
      attributes: {
        class: 'gjs-fonts gjs-f-divider'
      }
    }, {
      name: 'mj-spacer',
      label: 'Spacer',
      content: '<mj-spacer/>',
      attributes: {
        class: 'fa fa-arrows-v'
      }
    }, {
      name: 'mj-social-element',
      label: 'Social Group',
      content: `<mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">
            <mj-social-element name="facebook-noshare"></mj-social-element>
            <mj-social-element name="google-noshare"></mj-social-element>
            <mj-social-element name="twitter-noshare"></mj-social-element>
          </mj-social>`,
      attributes: {
        class: 'fa fa-share-alt'
      }
    }, {
      name: 'mj-social',
      label: 'Social Element',
      content: '<mj-social-element name="facebook-noshare" />',
      attributes: {
        class: 'fa fa-share-alt'
      }
    }]
  ),
  'templates': {
    'empty': `<mjml>
    <mj-head>
      <!--Optional title element-->
      <mj-title></mj-title>
      <!--Fix for iphone 10-->
      <mj-raw>
        <meta name="x-apple-disable-message-reformatting">
      </mj-raw>
      <!--Set a custom breakpoint for the mobile size-->
      <mj-breakpoint width="480px" />
      <!--Optional hidden preview text-->
      <mj-preview></mj-preview>
      <mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto" />
      <mj-attributes>
        <!--Any default attribute can be overwritten here-->
        <mj-text align="center" color="#333333" font-size="18px" line-height="140%" />
        <mj-body background-color="#eeeeee" />
        <mj-section background-color="#ffffff" />
        <mj-all font-family="Roboto, Helvetica, Arial, sans-serif" />
      </mj-attributes>
      <!--Fix so that alt text shows for images-->
      <mj-style inline="inline">
        img {
        color: #000000;
        font-size: 14px;
        line-height: 1;
        text-align: center;
        }
      </mj-style>
    </mj-head>
    <mj-body>
    </mj-body>
  </mjml>`,
    'default': `<mjml>
    <mj-head>
      <!--Optional title element-->
      <mj-title></mj-title>
      <!--Fix for iphone 10-->
      <mj-raw>
        <meta name="x-apple-disable-message-reformatting">
      </mj-raw>
      <!--Set a custom breakpoint for the mobile size-->
      <mj-breakpoint width="480px"></mj-breakpoint>
      <!--Optional hidden preview text-->
      <mj-preview></mj-preview>
      <mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto"></mj-font>
      <mj-attributes>
        <!--Any default attribute can be overwritten here-->
        <mj-all font-family="Roboto, Helvetica, Arial, sans-serif" align="center" color="#333333" font-size="18px" line-height="140%"></mj-all>
      </mj-attributes>
      <!--Fix so that alt text shows for images-->
      <mj-style inline="inline">
        img {
        color: #000000;
        font-size: 14px;
        line-height: 1;
        text-align: center;
        }
      </mj-style>
    </mj-head>
    <mj-body background-color="#eeeeee">
      <mj-section>
        <mj-column>
          <mj-image alt="" src="https://via.placeholder.com/200x50?text=LOGO" width="200px" href="{{LINK1}}" padding="0" />
        </mj-column>
      </mj-section>
  
      <mj-section padding="0">
        <mj-column>
          <mj-image alt="" src="https://via.placeholder.com/600x300?text=HERO" href="{{LINK1}}" padding="0" />
        </mj-column>
      </mj-section>
  
      <mj-section background-color="#fff">
        <mj-column>
          <mj-text align="left">
            <p>EXAMPLE_TEXT</p>
            <p>Sincerely<br />
              <b>COMPANY</b></p>
          </mj-text>
        </mj-column>
      </mj-section>
  
      <mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">
        <mj-social-element name="facebook-noshare"></mj-social-element>
        <mj-social-element name="instagram-noshare"></mj-social-element>
        <mj-social-element name="twitter-noshare"></mj-social-element>
        <mj-social-element name="youtube-noshare"></mj-social-element>
        <mj-social-element name="pinterest-noshare"></mj-social-element>
      </mj-social>
  
      <mj-section background-color="#eeeeee" padding="0">
        <mj-column>
          <mj-text font-size="12px" align="center">
            <p>&copy; {{date_now:yyyy}} COMPANY | ADDRESS<br />
              <a href="https://www.upsellit.com/hound/nomore.jsp?{{SESSIONID}}" style="color:#333">Unsubscribe</a>
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
  
    </mj-body>
  </mjml>`
  }
}