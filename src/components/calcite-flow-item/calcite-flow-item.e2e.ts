import { newE2EPage } from "@stencil/core/testing";

import { CSS, TEXT } from "./resources";

describe("calcite-flow-item", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow-item></calcite-flow-item>");
    const element = await page.find("calcite-flow-item");
    expect(element).toHaveClass("hydrated");
  });

  it("should not render containers when there are no menu actions", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow-item></calcite-flow-item>");

    const menuContainer = await page.find(`calcite-flow-item >>> .${CSS.menuContainer}`);

    const singleActionContainer = await page.find(`calcite-flow-item >>> .${CSS.singleActionContainer}`);

    expect(menuContainer).toBeNull();
    expect(singleActionContainer).toBeNull();
  });

  it("should show single action container when one action exists", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-flow-item><div slot="menu-actions"><calcite-action text="hello"></calcite-action></div></calcite-flow-item>'
    );

    const singleActionContainer = await page.find(`calcite-flow-item >>> .${CSS.singleActionContainer}`);

    expect(singleActionContainer).not.toBeNull();
  });

  it("should have default heading and text", async () => {
    const page = await newE2EPage();

    await page.setContent('<calcite-flow-item heading="test"></calcite-flow-item>');

    const element = await page.find(`calcite-flow-item >>> .${CSS.heading}`);

    expect(element).toEqualText("test");
  });

  it("text defaults should be present", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow-item></calcite-flow-item>");

    await page.waitForChanges();

    const element = await page.find("calcite-flow-item");

    const textBack = await element.getProperty("textBack");
    const textOpen = await element.getProperty("textOpen");
    const textClose = await element.getProperty("textClose");

    expect(textBack).toEqual(TEXT.back);
    expect(textOpen).toEqual(TEXT.open);
    expect(textClose).toEqual(TEXT.close);
  });

  it("menuOpen should show/hide when toggled", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-flow-item><div slot="menu-actions"><calcite-action text="hello"></calcite-action><calcite-action text="hello"></calcite-action></div></calcite-flow-item>'
    );

    const element = await page.find("calcite-flow-item");

    expect(element.getAttribute("menuOpen")).toBeNull();

    element.setAttribute("menuOpen", true);

    await page.waitForChanges();

    expect(element.getAttribute("menuOpen")).not.toBeNull();

    const menuButton = await page.find(`calcite-flow-item >>> .${CSS.menuButton}`);

    expect(menuButton).not.toBeNull();
  });
});

it("back button / showBackButton", async () => {
  const page = await newE2EPage();

  await page.setContent("<calcite-flow-item></calcite-flow-item>");

  const element = await page.find("calcite-flow-item");

  const showBackButton = await element.getProperty("showBackButton");

  expect(showBackButton).toBe(false);

  element.setProperty("showBackButton", true);

  await page.waitForChanges();

  const backButton = await page.find(`calcite-flow-item >>> .${CSS.backButton}`);

  expect(backButton).not.toBeNull();

  const eventSpy = await page.spyOnEvent("calciteFlowItemBackClick", "window");

  backButton.click();

  await page.waitForChanges();

  expect(eventSpy).toHaveReceivedEvent();
});
