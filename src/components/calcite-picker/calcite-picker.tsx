import Sortable from "sortablejs";
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";
import { pencil16 } from "@esri/calcite-ui-icons";
import CalciteIcon from "../_support/CalciteIcon";
import { CSS } from "./resources";

@Component({
  tag: "calcite-picker",
  styleUrl: "./calcite-picker.scss",
  shadow: true
})
export class CalcitePicker {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) textHeading: string;

  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";

  @Prop({ reflect: true }) multiple = false;

  @Prop({ reflect: true }) dragEnabled = false; /* ignored unless mode is configuration */

  @Prop({ reflect: true }) editEnabled = false; /* ignored unless mode is configuration */

  @Prop({ reflect: false }) data = [];

  @State() selectedValues = new Set();

  @Watch("selectedValues")
  selectedValuesChangeHandler() {
    this.pickerSelectionChange.emit(this.selectedValues);
  }

  @State() editing = false;

  @Watch("editing")
  editingChangeHandler() {
    this.slottedRows.forEach((item) => {
      item.toggleAttribute("editing", this.editing);
    });
  }

  @State() dataForFilter = this.data;

  deletedRows = new Set();
  slottedRows: any;
  rows: any;
  lastSelectedRow = null;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  sortable = null;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    const rows = this.el.querySelectorAll("calcite-picker-row");
    rows.forEach((row) => {
      row.setAttribute("icon", this.getIconType());
    });
  }

  componentDidLoad() {
    const slot = this.el.shadowRoot.querySelector("slot");
    this.slottedRows = slot ? slot.assignedElements() : [];
    this.rows = [
      ...Array.from(this.el.shadowRoot.querySelectorAll("calcite-picker-row")),
      ...this.slottedRows
    ];
    if (this.dragEnabled && this.mode === "configuration") {
      this.setupDragAndDrop();
    }
    this.dataForFilter = [...this.data, ...this.getSlottedData()];
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() pickerSelectionChange: EventEmitter;

  @Event() pickerRowsDeleted: EventEmitter;

  @Listen("rowToggled")
  rowToggledHandler(event) {
    const { row, selected, shiftPressed } = event.detail;
    if (selected) {
      if (this.multiple && shiftPressed && this.lastSelectedRow) {
        const start = this.rows.indexOf(this.lastSelectedRow);
        const end = this.rows.indexOf(row);
        this.rows.slice(Math.min(start, end), Math.max(start, end)).forEach((currentRow) => {
          currentRow.toggleAttribute("selected", true);
          this.selectedValues.add(currentRow);
        });
      } else {
        this.selectedValues.add(row);
      }
    } else {
      this.selectedValues.delete(row);
    }
    if (!this.multiple && selected) {
      this.rows.forEach((item) => {
        if (item !== row) {
          this.deselectRow(item);
        }
      });
    }
    this.lastSelectedRow = row;
    this.pickerSelectionChange.emit(this.selectedValues);
  }

  @Listen("rowDeleted")
  rowDeletedHandler(event) {
    const { row } = event.detail;
    row.toggleAttribute("hidden", true);
    this.deletedRows.add(row);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setupDragAndDrop(): void {
    const sortGroups = [this.el, ...Array.from(this.el.querySelectorAll("calcite-picker-group"))];
    sortGroups.forEach((sortGroup) => {
      Sortable.create(sortGroup, {
        group: "whateva",
        handle: ".handle",
        draggable: "calcite-picker-row"
      });
    });
  }

  deselectRow(item) {
    item.toggleAttribute("selected", false);
    this.selectedValues.delete(item);
  }

  startEdit() {
    this.editing = true;
  }

  cancelDelete() {
    this.deletedRows.forEach((row: HTMLCalcitePickerRowElement) => {
      row.toggleAttribute("hidden", false);
    });
    this.deletedRows = new Set();
    this.editing = false;
  }

  confirmDelete() {
    let selectedChanged = false;
    this.deletedRows.forEach((row: HTMLCalcitePickerRowElement) => {
      if (this.selectedValues.has(row.value)) {
        this.selectedValues.delete(row.value);
        selectedChanged = true;
      }
      row.remove();
    });
    if (selectedChanged) {
      this.pickerSelectionChange.emit(this.selectedValues);
    }
    this.deletedRows = new Set();
    this.editing = false;
  }

  handleFilter(filteredData) {
    const values = filteredData.map((item) => item.value);
    const rows = [
      ...this.slottedRows,
      ...Array.from(this.el.shadowRoot.querySelectorAll("calcite-picker-row"))
    ];
    rows.forEach((row) => {
      row.toggleAttribute("hidden", values.indexOf(row.value) === -1);
    });
  }

  getSlottedData() {
    const result = [];
    this.slottedRows.forEach((row) => {
      const obj = {};
      Array.from(row.attributes).forEach((item: any) => {
        obj[item.name] = item.value;
      });
      result.push(obj);
    });
    return result;
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async getSelectedRows() {
    return this.selectedValues;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  getIconType() {
    let type = null;
    if (this.mode === "configuration" && this.dragEnabled) {
      type = "grip";
    } else if (this.mode === "selection" && this.multiple) {
      type = "square";
    } else if (this.mode === "selection" && !this.multiple) {
      type = "circle";
    }
    return type;
  }

  renderSecondaryAction(action) {
    return action ? (
      <calcite-action slot="secondaryAction" onClick={action.onclick || void 0}>
        <CalciteIcon size={action.icon.size} path={action.icon.path} />
      </calcite-action>
    ) : null;
  }

  renderEditButton() {
    return this.editEnabled ? (
      !this.editing ? (
        <section>
          <calcite-action onClick={() => this.startEdit()}>
            <CalciteIcon size="16" path={pencil16} />
          </calcite-action>
        </section>
      ) : (
        <section>
          <button onClick={() => this.cancelDelete()}>Cancel</button>
          <button onClick={() => this.confirmDelete()}>OK</button>
        </section>
      )
    ) : null;
  }

  render() {
    return (
      <Host>
        <section class={CSS.container}>
          <header>
            <h2>{this.textHeading}</h2>
            <calcite-filter
              data={this.dataForFilter}
              textPlaceholder="filter results"
              onCalciteFilterChange={(e) => this.handleFilter(e.detail)}
            />
          </header>
          {this.renderEditButton()}
          {this.data.map((item) => {
            const { heading, description, value, selected } = item;
            return (
              <calcite-picker-row
                textHeading={heading}
                textDescription={description}
                value={value}
                selected={selected}
                icon={this.getIconType()}
                editing={this.editing}
              >
                {this.renderSecondaryAction(item.secondaryAction)}
              </calcite-picker-row>
            );
          })}
          <slot />
        </section>
      </Host>
    );
  }
}
