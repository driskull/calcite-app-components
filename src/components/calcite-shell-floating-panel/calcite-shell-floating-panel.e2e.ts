import { newE2EPage } from "@stencil/core/testing";

describe("calcite-shell-floating-panel", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-floating-panel></calcite-shell-floating-panel>");
    const element = await page.find("calcite-shell-floating-panel");
    expect(element).toHaveClass("hydrated");
  });

  it("position defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-floating-panel></calcite-shell-floating-panel>");

    const element = await page.find("calcite-shell-floating-panel");
    const placement = await element.getProperty("placement");
    const positionElement = await element.getProperty("positionElement");

    await page.waitForChanges();

    const style = element.getAttribute("style");

    expect(placement).toBeUndefined();
    expect(positionElement).toBeUndefined();
    expect(style).toBeNull();
  });

  it("should fire event when closed", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-floating-panel></calcite-shell-floating-panel>");

    const eventSpy = await page.spyOnEvent("calciteShellFloatingPanelClose", "window");

    const closeButton = await page.find("calcite-shell-floating-panel >>> calcite-action");

    closeButton.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });
});
