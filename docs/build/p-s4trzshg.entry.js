import{r as e,h as t,H as l,g as s,c as n}from"./p-f5c2cb95.js";import{c as r,a}from"./p-77be21af.js";const o=class{constructor(t){e(this,t)}renderHeader(){return this.el.querySelector("[slot=shell-header]")?t("slot",{name:"shell-header"}):null}renderContent(){return t("div",{class:"content"},t("slot",null))}renderFooter(){return this.el.querySelector("[slot=shell-footer]")?t("div",{class:"footer"},t("slot",{name:"shell-footer"})):null}renderMain(){var e,l;const s=this.el.querySelector("[slot=primary-panel]"),n={"main--reversed":"end"===a(null===(e=s)||void 0===e?void 0:e.position,null===(l=s)||void 0===l?void 0:l.layout)};return t("div",{class:r("main",n)},t("slot",{name:"primary-panel"}),this.renderContent(),t("slot",{name:"contextual-panel"}),t("slot",{name:"tip-manager"}))}render(){return t(l,null,this.renderHeader(),this.renderMain(),this.renderFooter())}get el(){return s(this)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;--calcite-app-shell-tip-spacing:26vw}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.main{height:100%;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;border-top:1px solid var(--calcite-app-border-subtle);border-bottom:1px solid var(--calcite-app-border-subtle);-ms-flex-pack:justify;justify-content:space-between;overflow:hidden}.main--reversed{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.content{height:100%;width:100%;position:absolute;left:0;right:0;bottom:0;top:0;z-index:0}::slotted(calcite-shell-panel){position:relative;z-index:1}::slotted(calcite-tip-manager){-webkit-animation:calcite-app-fade-in-up var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in-up var(--calcite-app-animation-time) var(--calcite-app-easing-function);border-radius:var(--calcite-app-border-radius);bottom:var(--calcite-app-cap-spacing);-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);-webkit-box-sizing:border-box;box-sizing:border-box;left:var(--calcite-app-shell-tip-spacing);position:absolute;right:var(--calcite-app-shell-tip-spacing);z-index:2}.footer{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing)}"}},i=class{constructor(t){e(this,t),this.collapsed=!1,this.detached=!1,this.detachedScale="m",this.calciteShellPanelToggle=n(this,"calciteShellPanelToggle",7)}watchHandler(){this.calciteShellPanelToggle.emit()}render(){const{collapsed:e,detached:s,layout:n,position:o}=this,i=t("div",{class:r("content",{"content--detached":s}),hidden:e},t("slot",null)),c=[t("slot",{name:"action-bar"}),i];return"end"===a(o,n)&&c.reverse(),t(l,null,c)}static get watchers(){return{collapsed:["watchHandler"]}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-app-background-transparent);pointer-events:none;--calcite-app-shell-panel-width:20vw;--calcite-app-shell-panel-min-width:240px;--calcite-app-shell-panel-max-width:360px;--calcite-app-shell-panel-min-height:4rem;--calcite-app-shell-panel-max-height-small:35vh;--calcite-app-shell-panel-max-height-medium:55vh;--calcite-app-shell-panel-max-height-large:85vh}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.content{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-app-background-content);-ms-flex-flow:column nowrap;flex-flow:column nowrap;display:-ms-flexbox;display:flex;width:var(--calcite-app-shell-panel-width);min-width:var(--calcite-app-shell-panel-min-width);max-width:var(--calcite-app-shell-panel-max-width);min-height:var(--calcite-app-shell-panel-min-height);border-left:1px solid var(--calcite-app-border);border-right:1px solid var(--calcite-app-border);padding:0;pointer-events:auto}.content--detached{border:1px solid var(--calcite-app-border);border-radius:var(--calcite-app-border-radius);-webkit-box-shadow:var(--calcite-app-shadow-0);box-shadow:var(--calcite-app-shadow-0);margin:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) auto;max-height:var(--calcite-app-shell-panel-max-height-medium);overflow:auto}:host([detached-scale=s]) .content--detached{max-height:var(--calcite-app-shell-panel-max-height-small)}:host([detached-scale=l]) .content--detached{max-height:var(--calcite-app-shell-panel-max-height-large)}.content[hidden]{display:none}:host([layout=leading]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar){border-right:1px solid var(--calcite-app-border)}:host([layout=trailing]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar){border-left:1px solid var(--calcite-app-border)}"}};export{o as calcite_shell,i as calcite_shell_panel};