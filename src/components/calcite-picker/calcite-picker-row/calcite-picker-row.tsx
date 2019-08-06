import { Component, Element, Event, EventEmitter, Host, Method, Prop, h } from "@stencil/core";
import {
  checkSquare16,
  circle16F,
  circleFilled16F,
  handleVertical24,
  square16,
  x16
} from "@esri/calcite-ui-icons";
import { CSS } from "./resources";
import CalciteIcon from "../../_support/CalciteIcon";

@Component({
  tag: "calcite-picker-row",
  styleUrl: "./calcite-picker-row.scss",
  shadow: true
})
export class CalcitePickerRow {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) textHeading: string;

  @Prop({ reflect: true }) textDescription: string;

  @Prop({ reflect: true }) value: string;

  @Prop({ reflect: true, mutable: true }) selected = false;

  @Prop({ reflect: true }) icon: "square" | "circle" | "grip" | null = null;

  @Prop({ reflect: true }) editing = false;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() rowToggled: EventEmitter;
  @Event() rowDeleted: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async toggle() {
    this.selected = !this.selected;
    this.rowToggled.emit({ row: this.el, value: this.value, selected: this.selected });
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  deleteRow() {
    this.rowDeleted.emit({ row: this.el, value: this.value });
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderIcon() {
    if (!this.icon) {
      return null;
    }
    if (this.icon === "grip") {
      return (
        <span class="handle">
          <CalciteIcon size="24" path={handleVertical24} />
        </span>
      );
    } else {
      /* tslint:disable */
      let path;
      if (this.icon === "square") {
        path = this.selected ? checkSquare16 : square16;
      } else {
        path = this.selected ? circleFilled16F : circle16F;
      }
      /* tslint:enable */
      return (
        <span class="icon">
          <CalciteIcon size="16" path={path} />
        </span>
      );
    }
  }

  renderSecondaryAction() {
    return this.editing ? (
      <calcite-action
        onClick={() => {
          this.deleteRow();
        }}
      >
        <CalciteIcon size="16" path={x16} />
      </calcite-action>
    ) : (
      <slot name="secondaryAction" />
    );
  }

  render() {
    return (
      <Host
        class={this.icon !== "square" && this.icon !== "circle" ? "highlight" : null}
        onClick={() => this.toggle()}
      >
        {this.renderIcon()}
        <div class={CSS.label}>
          <h4 class={CSS.heading}>{this.textHeading}</h4>
          <p class={CSS.description}>{this.textDescription}</p>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {this.renderSecondaryAction()}
        </div>
      </Host>
    );
  }
}
