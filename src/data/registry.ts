export interface ComponentDefinition {
    name: string;
    tagName: string;
    category: 'General' | 'Data Display' | 'Forms' | 'Feedback' | 'Navigation' | 'Effects';
    description: string;
    usage: string;
}

export const components: ComponentDefinition[] = [
    {
        name: 'Button',
        tagName: 'zen-button',
        category: 'General',
        description: 'Standard interactive button with various styles.',
        usage: '<zen-button variant="primary">Click Me</zen-button>'
    },
    {
        name: 'Button Variants',
        tagName: 'zen-button',
        category: 'General',
        description: 'Button style variations: secondary, outline, ghost, glass.',
        usage: `<div style="display:flex; gap:8px; flex-wrap:wrap;">
      <zen-button variant="secondary">Secondary</zen-button>
      <zen-button variant="outline">Outline</zen-button>
      <zen-button variant="ghost">Ghost</zen-button>
      <zen-button variant="glass">Glass</zen-button>
    </div>`
    },
    {
        name: 'Magnetic Button',
        tagName: 'zen-magnetic-button',
        category: 'General',
        description: 'Button that magnetically attracts to the cursor.',
        usage: '<zen-magnetic-button variant="primary">Magnetic</zen-magnetic-button>'
    },
    {
        name: 'Morph Button',
        tagName: 'zen-morph-button',
        category: 'General',
        description: 'Button with shape-shifting liquid effect.',
        usage: '<zen-morph-button variant="liquid">Morph</zen-morph-button>'
    },
    {
        name: 'Icon',
        tagName: 'zen-icon',
        category: 'General',
        description: 'Renders an SVG icon from the built-in icon library.',
        usage: `<div style="display:flex; gap:16px; align-items:center;">
      <zen-icon name="home" size="28px"></zen-icon>
      <zen-icon name="heart" size="28px" variant="glow"></zen-icon>
      <zen-icon name="star" size="28px"></zen-icon>
      <zen-icon name="settings" size="28px"></zen-icon>
    </div>`
    },
    {
        name: 'Text',
        tagName: 'zen-text',
        category: 'General',
        description: 'Typography component for consistent text styling.',
        usage: '<zen-text variant="h2" gradient="aurora">Aurora Text</zen-text>'
    },
    {
        name: 'Theme Toggle',
        tagName: 'zen-theme-toggle',
        category: 'General',
        description: 'Toggle switch for light/dark/system mode.',
        usage: '<zen-theme-toggle></zen-theme-toggle>'
    },
    {
        name: 'Theme Picker',
        tagName: 'zen-theme-picker',
        category: 'General',
        description: 'Advanced picker for color themes.',
        usage: '<zen-theme-picker></zen-theme-picker>'
    },
    {
        name: 'Card',
        tagName: 'zen-card',
        category: 'Data Display',
        description: 'Basic container component with hover effects.',
        usage: '<zen-card hover><div style="padding:20px;">Card Content</div></zen-card>'
    },
    {
        name: 'Spotlight Card',
        tagName: 'zen-spotlight-card',
        category: 'Data Display',
        description: 'Card with a spotlight effect that follows the mouse.',
        usage: '<zen-spotlight-card border><div style="padding:30px; text-align:center;">Hover to see spotlight</div></zen-spotlight-card>'
    },
    {
        name: 'Tilt Card',
        tagName: 'zen-tilt-card',
        category: 'Data Display',
        description: '3D Tilt effect card with glare.',
        usage: '<zen-tilt-card glare><div style="padding:30px; text-align:center;">3D Tilt Effect</div></zen-tilt-card>'
    },
    {
        name: 'Hover Card',
        tagName: 'zen-hover-card',
        category: 'Data Display',
        description: 'Card with enhanced hover effects.',
        usage: '<zen-hover-card><div style="padding:20px;">Hover Me</div></zen-hover-card>'
    },
    {
        name: 'Flip Card',
        tagName: 'zen-flip-card',
        category: 'Data Display',
        description: 'Card that flips to reveal back content on click.',
        usage: `<zen-flip-card trigger="click" direction="horizontal" style="width:200px; height:140px; cursor:pointer;">
      <div slot="front" style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-weight:600; background:var(--zen-bg-3);">Click to Flip</div>
      <div slot="back" style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-weight:600; background:var(--zen-primary); color:#000;">Back Side!</div>
    </zen-flip-card>`
    },
    {
        name: 'Aurora Border',
        tagName: 'zen-aurora-border',
        category: 'Data Display',
        description: 'Container with animated aurora gradient border.',
        usage: '<zen-aurora-border variant="neon"><div style="padding:20px; background:var(--zen-bg-1);">Neon Border</div></zen-aurora-border>'
    },
    {
        name: 'Badge',
        tagName: 'zen-badge',
        category: 'Data Display',
        description: 'Small status indicator or label.',
        usage: `<div style="display:flex; gap:8px; flex-wrap:wrap;">
      <zen-badge variant="primary">Primary</zen-badge>
      <zen-badge variant="success">Success</zen-badge>
      <zen-badge variant="warning">Warning</zen-badge>
      <zen-badge variant="error">Error</zen-badge>
    </div>`
    },
    {
        name: 'Avatar',
        tagName: 'zen-avatar',
        category: 'Data Display',
        description: 'User profile image with status indicator.',
        usage: `<div style="display:flex; gap:12px;">
      <zen-avatar src="https://i.pravatar.cc/150?img=3" alt="User" status="online"></zen-avatar>
      <zen-avatar src="https://i.pravatar.cc/150?img=5" alt="User" status="away"></zen-avatar>
      <zen-avatar src="https://i.pravatar.cc/150?img=8" alt="User" status="offline"></zen-avatar>
    </div>`
    },
    {
        name: 'Accordion',
        tagName: 'zen-accordion',
        category: 'Data Display',
        description: 'Collapsible content sections.',
        usage: `<zen-accordion>
      <zen-accordion-item header="Section One">Content for section one</zen-accordion-item>
      <zen-accordion-item header="Section Two">Content for section two</zen-accordion-item>
    </zen-accordion>`
    },
    {
        name: 'Counter',
        tagName: 'zen-counter',
        category: 'Data Display',
        description: 'Animated numerical counter.',
        usage: '<zen-counter value="1234" prefix="$" suffix="+" duration="2000"></zen-counter>'
    },
    {
        name: 'Calendar',
        tagName: 'zen-calendar',
        category: 'Data Display',
        description: 'Date picker / calendar view.',
        usage: '<zen-calendar></zen-calendar>'
    },
    {
        name: 'Bar Chart',
        tagName: 'zen-bar-chart',
        category: 'Data Display',
        description: 'Animated bar chart visualization with data.',
        usage: '<zen-bar-chart id="barDemo" style="height:180px;"></zen-bar-chart><script>document.getElementById("barDemo").data=[{label:"Jan",value:30},{label:"Feb",value:55},{label:"Mar",value:45},{label:"Apr",value:80}];</script>'
    },
    {
        name: 'Donut Chart',
        tagName: 'zen-donut-chart',
        category: 'Data Display',
        description: 'Circular donut chart with legend.',
        usage: '<zen-donut-chart id="donutDemo" size="140" showLegend></zen-donut-chart><script>document.getElementById("donutDemo").data=[{label:"Sales",value:45},{label:"Marketing",value:30},{label:"Dev",value:25}];</script>'
    },
    {
        name: 'Table',
        tagName: 'zen-table',
        category: 'Data Display',
        description: 'Data table component with styled rows.',
        usage: '<zen-table id="tableDemo"></zen-table><script>document.getElementById("tableDemo").columns=[{key:"name",label:"Name"},{key:"role",label:"Role"}];document.getElementById("tableDemo").data=[{name:"Alice",role:"Developer"},{name:"Bob",role:"Designer"}];</script>'
    },
    {
        name: 'Skeleton Text',
        tagName: 'zen-skeleton',
        category: 'Data Display',
        description: 'Loading placeholder for text content.',
        usage: `<div style="display:flex; flex-direction:column; gap:8px;">
      <zen-skeleton variant="text" width="80%" height="16px"></zen-skeleton>
      <zen-skeleton variant="text" width="60%" height="16px"></zen-skeleton>
      <zen-skeleton variant="text" width="70%" height="16px"></zen-skeleton>
    </div>`
    },
    {
        name: 'Skeleton Shapes',
        tagName: 'zen-skeleton',
        category: 'Data Display',
        description: 'Loading placeholders for various shapes.',
        usage: `<div style="display:flex; gap:16px; align-items:center;">
      <zen-skeleton variant="circular" width="50px" height="50px"></zen-skeleton>
      <zen-skeleton variant="rectangular" width="100px" height="60px"></zen-skeleton>
    </div>`
    },
    {
        name: 'Input',
        tagName: 'zen-input',
        category: 'Forms',
        description: 'Text input field with label and validation.',
        usage: '<zen-input label="Username" placeholder="Enter your name"></zen-input>'
    },
    {
        name: 'Textarea',
        tagName: 'zen-textarea',
        category: 'Forms',
        description: 'Multi-line text input.',
        usage: '<zen-textarea label="Message" placeholder="Write something..." rows="3"></zen-textarea>'
    },
    {
        name: 'Select',
        tagName: 'zen-select',
        category: 'Forms',
        description: 'Dropdown selection input.',
        usage: '<zen-select label="Choose" placeholder="Select option" id="selectDemo"></zen-select><script>document.getElementById("selectDemo").options=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}];</script>'
    },
    {
        name: 'Checkbox',
        tagName: 'zen-checkbox',
        category: 'Forms',
        description: 'Boolean toggle checkbox.',
        usage: '<zen-checkbox>Accept terms and conditions</zen-checkbox>'
    },
    {
        name: 'Radio',
        tagName: 'zen-radio',
        category: 'Forms',
        description: 'Radio button for selection groups.',
        usage: `<div style="display:flex; flex-direction:column; gap:8px;">
      <zen-radio name="opt" value="a" checked>Option A</zen-radio>
      <zen-radio name="opt" value="b">Option B</zen-radio>
    </div>`
    },
    {
        name: 'Switch',
        tagName: 'zen-switch',
        category: 'Forms',
        description: 'Toggle switch.',
        usage: '<zen-switch checked></zen-switch>'
    },
    {
        name: 'Progress',
        tagName: 'zen-progress',
        category: 'Feedback',
        description: 'Linear progress bar.',
        usage: '<zen-progress value="65" max="100" variant="gradient" size="md" showValue></zen-progress>'
    },
    {
        name: 'Circular Progress',
        tagName: 'zen-circular-progress',
        category: 'Feedback',
        description: 'Circular progress indicator.',
        usage: `<div style="display:flex; gap:16px; align-items:center;">
      <zen-circular-progress value="25" size="60" variant="gradient" showValue></zen-circular-progress>
      <zen-circular-progress value="50" size="60" variant="gradient" showValue></zen-circular-progress>
      <zen-circular-progress value="75" size="60" variant="gradient" showValue></zen-circular-progress>
    </div>`
    },
    {
        name: 'Tooltip',
        tagName: 'zen-tooltip',
        category: 'Feedback',
        description: 'Hover tooltip that appears above content.',
        usage: '<div style="padding:30px 20px; overflow:visible;"><zen-tooltip content="This is a tooltip!" position="top" style="z-index:1000;"><zen-button variant="outline">Hover me</zen-button></zen-tooltip></div>'
    },
    {
        name: 'Dialog',
        tagName: 'zen-dialog',
        category: 'Feedback',
        description: 'Modal dialog component.',
        usage: '<zen-button variant="outline" onclick="this.nextElementSibling.open=true">Open Dialog</zen-button><zen-dialog title="Dialog Title"><p style="color:var(--zen-text-2);">Dialog content goes here.</p></zen-dialog>'
    },
    {
        name: 'Tabs',
        tagName: 'zen-tabs',
        category: 'Navigation',
        description: 'Tabbed navigation container.',
        usage: `<zen-tabs active="tab1">
      <zen-tab slot="tabs" value="tab1">Tab One</zen-tab>
      <zen-tab slot="tabs" value="tab2">Tab Two</zen-tab>
      <zen-tab-panel value="tab1"><p>Content for tab one</p></zen-tab-panel>
      <zen-tab-panel value="tab2"><p>Content for tab two</p></zen-tab-panel>
    </zen-tabs>`
    },
    {
        name: 'Breadcrumbs',
        tagName: 'zen-breadcrumbs',
        category: 'Navigation',
        description: 'Breadcrumb navigation trail.',
        usage: '<zen-breadcrumbs id="bcDemo"></zen-breadcrumbs><script>document.getElementById("bcDemo").items=[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Current"}];</script>'
    },
    {
        name: 'Navbar',
        tagName: 'zen-navbar',
        category: 'Navigation',
        description: 'Top navigation bar with logo and links.',
        usage: `<zen-navbar logoText="⚡ App" style="position:relative;">
      <zen-nav-link slot="links" href="#">Home</zen-nav-link>
      <zen-nav-link slot="links" href="#">About</zen-nav-link>
    </zen-navbar>`
    },
    {
        name: 'Nav Link',
        tagName: 'zen-nav-link',
        category: 'Navigation',
        description: 'Navigation link for navbars.',
        usage: `<div style="display:flex; gap:16px;">
      <zen-nav-link href="#">Default</zen-nav-link>
      <zen-nav-link href="#" variant="glow">Glow</zen-nav-link>
    </div>`
    },
    {
        name: 'Nav Button',
        tagName: 'zen-nav-button',
        category: 'Navigation',
        description: 'Navigation call-to-action button.',
        usage: `<div style="display:flex; gap:8px;">
      <zen-nav-button variant="primary" size="sm">Primary</zen-nav-button>
      <zen-nav-button variant="outline" size="sm">Outline</zen-nav-button>
    </div>`
    },
    {
        name: 'Footer',
        tagName: 'zen-footer',
        category: 'Navigation',
        description: 'Site footer with links and social icons.',
        usage: '<div style="overflow:hidden; border-radius:12px;"><zen-footer style="position:relative;"><span slot="logo" style="font-weight:700; color:var(--zen-primary);">ZEN UI</span></zen-footer></div>'
    },
    {
        name: 'Hamburger Menu',
        tagName: 'zen-hamburger-menu',
        category: 'Navigation',
        description: 'Animated hamburger menu icon.',
        usage: '<zen-hamburger-menu></zen-hamburger-menu>'
    },
    {
        name: 'Command Palette',
        tagName: 'zen-command-palette',
        category: 'Navigation',
        description: 'Keyboard-driven command search (⌘K).',
        usage: '<zen-button variant="glass" onclick="this.nextElementSibling.open=true">Open Command (⌘K)</zen-button><zen-command-palette id="cmdDemo"></zen-command-palette><script>document.getElementById("cmdDemo").items=[{id:"1",label:"Go Home",shortcut:"⌘H"},{id:"2",label:"Settings",shortcut:"⌘,"}];</script>'
    },
    {
        name: 'Notification Bell',
        tagName: 'zen-notification-bell',
        category: 'Navigation',
        description: 'Notification indicator bell icon.',
        usage: `<div style="display:flex; gap:24px;">
      <zen-notification-bell count="3"></zen-notification-bell>
      <zen-notification-bell count="12"></zen-notification-bell>
    </div>`
    },
    {
        name: 'Particles',
        tagName: 'zen-particles',
        category: 'Effects',
        description: 'Background particle animation.',
        usage: '<div style="width:100%; height:200px; position:relative; border-radius:12px; overflow:hidden; background:var(--zen-bg-1);"><zen-particles count="40" connected></zen-particles></div>'
    },
    {
        name: 'Gradient Blob',
        tagName: 'zen-gradient-blob',
        category: 'Effects',
        description: 'Animated background gradient blobs.',
        usage: '<div style="width:100%; height:200px; position:relative; border-radius:12px; overflow:hidden;"><zen-gradient-blob variant="aurora" interactive></zen-gradient-blob></div>'
    },
    {
        name: 'Typewriter',
        tagName: 'zen-typewriter',
        category: 'Effects',
        description: 'Typewriter text animation effect.',
        usage: `<zen-typewriter texts='["Hello World", "Welcome", "Zen UI"]' speed="80" loop cursor></zen-typewriter>`
    },
    {
        name: 'Marquee',
        tagName: 'zen-marquee',
        category: 'Effects',
        description: 'Scrolling text marquee.',
        usage: '<zen-marquee speed="40"><span style="padding:30px;">✨ Scrolling Text</span><span style="padding:30px;">🚀 More Text</span><span style="padding:30px;">⚡ Zen UI</span></zen-marquee>'
    },
    {
        name: 'Glitch Text',
        tagName: 'zen-glitch-text',
        category: 'Effects',
        description: 'Text with glitch animation.',
        usage: '<zen-glitch-text text="GLITCH" variant="cyberpunk"></zen-glitch-text>'
    },
    {
        name: 'Text Reveal',
        tagName: 'zen-text-reveal',
        category: 'Effects',
        description: 'Animated text reveal on scroll.',
        usage: '<zen-text-reveal variant="slide" trigger>Revealed Text</zen-text-reveal>'
    },
    {
        name: 'Glitch Text Neon',
        tagName: 'zen-glitch-text',
        category: 'Effects',
        description: 'Neon variant of glitch text.',
        usage: '<zen-glitch-text text="NEON" variant="neon"></zen-glitch-text>'
    },
    {
        name: 'Gradient Blob Sunset',
        tagName: 'zen-gradient-blob',
        category: 'Effects',
        description: 'Sunset variant of gradient blobs.',
        usage: '<div style="width:100%; height:180px; position:relative; border-radius:12px; overflow:hidden;"><zen-gradient-blob variant="sunset"></zen-gradient-blob></div>'
    }
];
