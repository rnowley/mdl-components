import {TransparentHeaderLayout, FixedDrawerLayout, FixedHeaderLayout, 
        ScrollingHeaderLayout, WaterfallHeaderLayout, ScrollableTabLayout, LayoutContent, 
        Navigation, NavigationLink, TabBar, Tab, TabPanel, PageContent} from './modules/layout';
import {Slider} from './modules/slider';
import {Checkbox, IconToggle, RadioButton, Switch} from './modules/toggle';
import {FlatButton, FloatingActionButton, RaisedButton} from './modules/button';

document.registerElement('mdl-transparent-header-layout', TransparentHeaderLayout);
document.registerElement('mdl-fixed-drawer-layout', FixedDrawerLayout);
document.registerElement('mdl-fixed-header-layout', FixedHeaderLayout);
document.registerElement('mdl-scrolling-header-layout', ScrollingHeaderLayout);
document.registerElement('mdl-waterfall-header-layout', WaterfallHeaderLayout);
document.registerElement('mdl-scrollable-tab-layout', ScrollableTabLayout);
document.registerElement('mdl-layout-content', LayoutContent);
document.registerElement('mdl-navigation', Navigation);
document.registerElement('mdl-navigation-link', NavigationLink);
document.registerElement('mdl-tab-bar', TabBar);
document.registerElement('mdl-tab', Tab);
document.registerElement('mdl-tab-panel', TabPanel);
document.registerElement('mdl-page-content', PageContent);
document.registerElement('mdl-slider', Slider);
document.registerElement('mdl-check-box', Checkbox);
document.registerElement('mdl-icon-toggle', IconToggle);
document.registerElement('mdl-radio-button', RadioButton);
document.registerElement('mdl-switch', Switch);
document.registerElement('mdl-flat-button', FlatButton);
document.registerElement('mdl-fab', FloatingActionButton);
document.registerElement('mdl-raised-button', RaisedButton);
