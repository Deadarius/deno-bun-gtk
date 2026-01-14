import os from "node:os";

import type { LibPaths } from "./types.ts";

const OS = os.platform();

/** Paths to GTK and related libraries found in current OS' typical locations */
export const LIB_PATHS: LibPaths = OS === "darwin"
  ? (await import("./platform/darwin.ts")).darwinLibPaths
  : OS === "win32"
  ? (await import("./platform/windows.ts")).windowsLibPaths
  // For linux and all other platforms, use unix paths
  : (await import("./platform/unix.ts")).unixLibPaths;
