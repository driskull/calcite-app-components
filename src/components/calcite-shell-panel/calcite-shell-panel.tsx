import classnames from "classnames";
import { Component, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";
import { CSS, SLOTS } from "./resources";
import { CalciteLayout, CalcitePosition, CalciteScale } from "../interfaces";

/**
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 * @slot - A slot for adding content to the shell panel.
 */
@Component({
  tag: "calcite-shell-panel",
  styleUrl: "calcite-shell-panel.scss",
  shadow: true
})
export class CalciteShellPanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Hide the content panel.
   */
  @Prop({ reflect: true }) collapsed = false;

  @Watch("collapsed")
  watchHandler() {
    this.calciteShellPanelToggle.emit();
  }

  /**
   * This property makes the content area appear like a "floating" panel.
   */
  @Prop({ reflect: true }) detached = false;

  /**
   * This sets limits the height of the content area. It only applies when detached is true.
   */
  @Prop({ reflect: false }) detachedScale: CalciteScale = "m";

  /**
   * @deprecated since 5.3 - use "position" instead.
   * Arrangement of the component.
   */
  @Prop({ reflect: true }) layout: CalciteLayout;

  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  @Prop({ reflect: true }) position: CalcitePosition;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when collapse has been toggled.
   */
  @Event() calciteShellPanelToggle: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { collapsed, detached, layout, position } = this;
    const positionFallback: CalcitePosition = layout
      ? layout === "trailing"
        ? "end"
        : "start"
      : position || "start";

    const contentNode = (
      <div class={classnames(CSS.content, { [CSS.contentDetached]: detached })} hidden={collapsed}>
        <slot />
      </div>
    );

    const actionBarNode = <slot name={SLOTS.actionBar} />;

    const mainNodes = [actionBarNode, contentNode];

    if (positionFallback === "end") {
      mainNodes.reverse();
    }

    return <Host>{mainNodes}</Host>;
  }
}
