import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "calcite-picker-group",
  shadow: true
})
export class CalcitePickerGroup {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The title used for all nested picker rows
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
        {this.textGroupTitle ? <h3>{this.textGroupTitle}</h3> : null}
        <slot />
      </Host>
    );
  }
}
