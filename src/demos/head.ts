(() => {
  const root = window.location.pathname.split("demos").shift();

  function loadCss(url: string): void {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = root + url;
    document.head.appendChild(link);
  }

  function loadScript(url: string, options?: Partial<{ noModule: boolean; type: "module" }>): void {
    const script = document.createElement("script");
    if (options) {
      Object.keys(options).forEach((key) => {
        script[key] = options[key];
      });
    }
    script.src = root + url;

    document.head.appendChild(script);
  }

  loadCss("demos/demos.css");
  loadCss("build/calcite-app.css");
  loadCss("vendor/@esri/calcite-components/calcite.css");
  loadScript("demos/demoPageReloader.js");
  loadScript("demos/toggles.js");
  loadScript("build/calcite-app.esm.js", { type: "module" });
  loadScript("build/calcite-app.js", { noModule: true });
  loadScript("vendor/@esri/calcite-components/calcite.esm.js", { type: "module" });
  loadScript("vendor/@esri/calcite-components/calcite.js", { noModule: true });
})();
