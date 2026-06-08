import {
  DEMO_PASSWORD,
  DEMO_USERNAME,
  PLATFORM_LAYOUT,
  PLATFORM_URL,
} from "./constants";

type OpenPlatformOptions = {
  target?: "popup" | "sameTab";
};

export function openPlatformWithLogin({
  target = "popup",
}: OpenPlatformOptions = {}) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = PLATFORM_URL;
  form.style.display = "none";

  const fields: Record<string, string> = {
    layout: PLATFORM_LAYOUT,
    user: DEMO_USERNAME,
    password: DEMO_PASSWORD,
    fast_login: DEMO_USERNAME,
    fast_pass: DEMO_PASSWORD,
  };

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);

  if (target === "popup") {
    const width = Math.min(1280, window.screen.width - 80);
    const height = Math.min(800, window.screen.height - 80);
    const left = Math.round((window.screen.width - width) / 2);
    const top = Math.round((window.screen.height - height) / 2);

    window.open(
      "",
      "ontime-plataforma",
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
    form.target = "ontime-plataforma";
  }

  form.submit();
  document.body.removeChild(form);
}
