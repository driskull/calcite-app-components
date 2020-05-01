import { newE2EPage } from "@stencil/core/testing";

import { CSS } from "./resources";
import { accessible, renders } from "../../tests/commonTests";

describe("calcite-shell-center-row", () => {
  it("renders", async () => renders("calcite-shell-center-row"));

  it("should show row content", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-center-row><div>content</div></calcite-shell-center-row>");

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-center-row >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(true);
  });

  it("should be accessible", async () => {
    accessible("<calcite-shell-center-row><div>content</div></calcite-shell-center-row>");
  });
});
