System.register(["./p-c2917d38.system.js"],function(t){"use strict";var e,a,i,n,r;return{setters:[function(t){e=t.r;a=t.c;i=t.h;n=t.H;r=t.g}],execute:function(){var s=t("calcite_tab_nav",function(){function t(t){e(this,t);this.calciteTabChange=a(this,"calciteTabChange",7)}t.prototype.selectedTabChanged=function(){if(localStorage&&this.storageId&&this.selectedTab!==undefined&&this.selectedTab!==null){localStorage.setItem("calcite-tab-nav-"+this.storageId,JSON.stringify(this.selectedTab))}this.calciteTabChange.emit({tab:this.selectedTab})};t.prototype.componentWillLoad=function(){var t="calcite-tab-nav-"+this.storageId;if(localStorage&&this.storageId&&localStorage.getItem(t)){this.selectedTab=JSON.parse(localStorage.getItem(t));this.calciteTabChange.emit({tab:this.selectedTab})}};t.prototype.render=function(){return i(n,{role:"tablist"},i("nav",{class:"tab-nav"},i("slot",null)))};t.prototype.componentDidRender=function(){var t=this;if(this.tabTitles.every(function(t){return!t.isActive})&&!this.selectedTab){this.tabTitles[0].getTabIdentifier().then(function(e){t.calciteTabChange.emit({tab:e})})}};t.prototype.focusPreviousTabHandler=function(t){var e=this.getIndexOfTabTitle(t.target);var a=this.tabTitles[e-1]||this.tabTitles[this.tabTitles.length-1];a.focus();t.stopPropagation();t.preventDefault()};t.prototype.focusNextTabHandler=function(t){var e=this.getIndexOfTabTitle(t.target);var a=this.tabTitles[e+1]||this.tabTitles[0];a.focus();t.stopPropagation();t.preventDefault()};t.prototype.activateTabHandler=function(t){if(t.detail.tab){this.selectedTab=t.detail.tab}else{this.selectedTab=this.getIndexOfTabTitle(t.target)}t.stopPropagation();t.preventDefault()};t.prototype.globalTabChangeHandler=function(t){if(this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab){this.selectedTab=t.detail.tab}};t.prototype.getIndexOfTabTitle=function(t){return this.tabTitles.indexOf(t)};Object.defineProperty(t.prototype,"tabTitles",{get:function(){return this.el.shadowRoot.querySelector("slot").assignedElements()},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selectedTab:["selectedTabChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}.tab-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--calcite-tabs-layout);justify-content:var(--calcite-tabs-layout);overflow:auto}::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-start);margin-left:var(--calcite-tabs-tab-margin-end)}:host([dir=rtl]) ::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-end);margin-left:var(--calcite-tabs-tab-margin-start)}"},enumerable:true,configurable:true});return t}())}}});