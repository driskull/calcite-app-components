import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";

import { CalciteLayout, CalciteTheme } from "../interfaces";

import { ExpandToggle } from "../utils/ExpandToggle";

import { CSS } from "./resources";

/**
 * @slot bottom-actions - A slot for adding `calcite-actions` that will appear at the bottom of the action bar, above the collapse/expand button.
 * @slot - A slot for adding `calcite-actions` that will appear at the top of the action bar.
 */
@Component({
  tag: "calcite-action-bar",
  styleUrl: "calcite-action-bar.scss",
  shadow: true
})
export class CalciteActionBar {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------
  /**
   * Indicates whether widget can be expanded.
   */
  @Prop({ reflect: true }) expand = true;

  /**
   * Indicates whether widget is expanded.
   */
  @Prop({ reflect: true }) expanded = false;

  @Watch("expanded")
  expandedHandler(newValue: boolean) {
    this.setActionTextEnabled(newValue);

    this.calciteActionBarToggle.emit();
  }

  /**
   * Updates the label of the expand icon when the component is not expanded.
   */
  @Prop() textExpand = "Expand";

  /**
   * Updates the label of the collapse icon when the component is expanded.
   */
  @Prop() textCollapse = "Collapse";

  /**
   * Arrangement of the component.
   */
  @Prop({ reflect: true }) layout: CalciteLayout;

  /**
   * Used to set the component's color scheme.
   */

  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when expanded has been toggled.
   */
  @Event() calciteActionBarToggle: EventEmitter;

  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteActionBarElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad() {
    this.setActionTextEnabled(this.expanded);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setActionTextEnabled(expanded: boolean): void {
    this.el.querySelectorAll("calcite-action").forEach((action) => (action.textEnabled = expanded));
  }

  toggleExpand = (): void => {
    this.expanded = !this.expanded;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderBottomActionGroup() {
    const { expanded, expand, textExpand, textCollapse, el, layout } = this;

    const expandToggleNode = expand ? (
      <ExpandToggle
        expanded={expanded}
        textExpand={textExpand}
        textCollapse={textCollapse}
        el={el}
        layout={layout}
      />
    ) : null;

    return this.el.querySelector("[slot=bottom-actions]") || expandToggleNode ? (
      <calcite-action-group class={CSS.actionGroupBottom}>
        <div class={CSS.actionGroupBottomContainer}>
          <slot name="bottom-actions" />
        </div>
        {expandToggleNode}
      </calcite-action-group>
    ) : null;
  }

  render() {
    return (
      <Host>
        <slot />
        {this.renderBottomActionGroup()}
      </Host>
    );
  }
}
