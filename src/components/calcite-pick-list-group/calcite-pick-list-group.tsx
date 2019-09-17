import { Component, Host, Prop, h } from "@stencil/core";
import { CSS } from "./resources";

@Component({
  tag: "calcite-pick-list-group",
  shadow: true
})
export class CalcitePickListGroup {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The title used for all nested calcite-pick-list rows. Not to be confused with the heading of the entire component.
   */
  @Prop({ reflect: true }) textGroupTitle: string;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        {this.textGroupTitle ? <h3 class={CSS.heading}>{this.textGroupTitle}</h3> : null}
        <slot />
      </Host>
    );
  }
}
