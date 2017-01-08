import {TransparentHeaderLayout, FixedDrawerLayout, FixedHeaderLayout, 
        ScrollingHeaderLayout, WaterfallHeaderLayout, ScrollableTabLayout, LayoutContent, 
        Navigation, NavigationLink, TabBar, Tab, TabPanel, PageContent} from './modules/layout';
import {Slider} from './modules/slider';
import {Checkbox, IconToggle, RadioButton, Switch} from './modules/toggle';
import {FlatButton, FloatingActionButton, IconButton, MiniFloatingActionButton, RaisedButton} from './modules/button';
import {Card, CardAction, CardActions, CardMenu, CardTitle, EventCard, Icon, ImageCard, LayoutSpacer, SupportingText} from './modules/card';
import {ButtonChip, Chip, ContactChip, DeletableChip, DeletableContactChip} from './modules/chip';
import {ActionList, ActionListItem, List, ListItem, ListItemIconAction,
        ListItemAvatar, ListItemIcon, ListItemPrimaryContent, ListItemSecondaryAction,
        ListItemSecondaryContent, ListItemSecondaryInformation, ListItemSubTitle, ListItemTextBody} from './modules/list';

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
document.registerElement('mdl-icon-button', IconButton);
document.registerElement('mdl-mini-fab', MiniFloatingActionButton);
document.registerElement('mdl-raised-button', RaisedButton);
document.registerElement('mdl-card', Card);
document.registerElement('mdl-card-action', CardAction);
document.registerElement('mdl-card-actions', CardActions);
document.registerElement('mdl-card-menu', CardMenu);
document.registerElement('mdl-card-title', CardTitle);
document.registerElement('mdl-event-card', EventCard);
document.registerElement('mdl-icon', Icon);
document.registerElement('mdl-image-card', ImageCard);
document.registerElement('mdl-layout-spacer', LayoutSpacer);
document.registerElement('mdl-supporting-text', SupportingText);
document.registerElement('mdl-button-chip', ButtonChip);
document.registerElement('mdl-chip', Chip);
document.registerElement('mdl-contact-chip', ContactChip);
document.registerElement('mdl-deletable-chip', DeletableChip);
document.registerElement('mdl-deletable-contact-chip', DeletableContactChip);
document.registerElement('mdl-action-list', ActionList);
document.registerElement('mdl-action-list-item', ActionListItem);
document.registerElement('mdl-list', List);
document.registerElement('mdl-list-item', ListItem);
document.registerElement('mdl-li-icon-action', ListItemIconAction);
document.registerElement('mdl-list-item-avatar', ListItemAvatar);
document.registerElement('mdl-list-item-icon', ListItemIcon);
document.registerElement('mdl-li-primary-content', ListItemPrimaryContent);
document.registerElement('mdl-li-secondary-action', ListItemSecondaryAction);
document.registerElement('mdl-li-secondary-content', ListItemSecondaryContent);
document.registerElement('mdl-li-secondary-info', ListItemSecondaryInformation);
document.registerElement('mdl-li-sub-title', ListItemSubTitle);
document.registerElement('mdl-li-text-body', ListItemTextBody);
