import { newE2EPage } from "@stencil/core/testing";

import { CSS } from "./resources";
import { accessible, defaults, hidden, renders } from "../../tests/commonTests";

describe("calcite-shell-panel", () => {
  it("renders", async () => renders("calcite-shell-panel"));

  it("honors hidden attribute", async () => hidden("calcite-shell-panel"));

  it("defaults", async () =>
    defaults("calcite-shell-panel", [
      {
        propertyName: "collapsed",
        defaultValue: false
      }
    ]));

  it("has a slot", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-panel></calcite-shell-panel>");
    const element = await page.find("calcite-shell-panel");
    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });

  it("should show panel content", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-panel >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(true);
  });

  it("collapsed property should hide panel content", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel collapsed><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-panel >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(false);
  });

  it("collapsed change should fire event", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find(`calcite-shell-panel`);

    const eventSpy = await page.spyOnEvent("calciteShellPanelToggle", "window");

    element.setProperty("collapsed", true);

    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("deprecated: leading layout property should have action slot first", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel layout="leading"><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });

  it("start position property should have action slot first", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel position="start"><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });

  it("deprecated: trailing layout property should have DIV first", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel layout="trailing"><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("DIV");
  });

  it("trailing position property should have DIV first", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel position="end"><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("DIV");
  });

  it("should be accessible", async () =>
    accessible(`
    <calcite-shell-panel slot="primary-panel" position="start">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add">
            <calcite-icon icon="plus" scale="s"></calcite-icon>
          </calcite-action>
          <calcite-action text="Save">
            <calcite-icon icon="save" scale="s"></calcite-icon>
          </calcite-action>
          <calcite-action text="Layers">
            <calcite-icon icon="layers" scale="s"></calcite-icon>
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <p>Primary Content</p>
    </calcite-shell-panel>
    `));

  it("should have detached class when detached", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-panel><div>content</div></calcite-shell-panel>");

    let detachedElement = await page.find(`calcite-shell-panel >>> .${CSS.contentDetached}`);

    expect(detachedElement).toBeNull();

    const panel = await page.find("calcite-shell-panel");

    panel.setProperty("detached", true);

    await page.waitForChanges();

    detachedElement = await page.find(`calcite-shell-panel >>> .${CSS.contentDetached}`);

    expect(detachedElement).not.toBeNull();
  });
});
