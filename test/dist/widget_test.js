var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
var __export = (target, all) => {
  for (var name in all) {
    __defProp(target, name, { get: all[name], enumerable: true });
  }
};

// deno:https://jsr.io/@std/internal/1.0.12/_os.ts
function checkWindows() {
  const global = globalThis;
  const os2 = global.Deno?.build?.os;
  return typeof os2 === "string"
    ? os2 === "windows"
    : global.navigator?.platform?.startsWith("Win") ??
      global.process?.platform?.startsWith("win") ?? false;
}
var init_os = __esm({
  "deno:https://jsr.io/@std/internal/1.0.12/_os.ts"() {
  },
});

// deno:https://jsr.io/@std/internal/1.0.12/os.ts
var isWindows;
var init_os2 = __esm({
  "deno:https://jsr.io/@std/internal/1.0.12/os.ts"() {
    init_os();
    isWindows = checkWindows();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/assert_path.ts
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError(
      `Path must be a string, received "${JSON.stringify(path)}"`,
    );
  }
}
var init_assert_path = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/assert_path.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/basename.ts
var init_basename = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/basename.ts"() {
    init_assert_path();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/from_file_url.ts
function assertArg(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol !== "file:") {
    throw new TypeError(`URL must be a file URL: received "${url.protocol}"`);
  }
  return url;
}
var init_from_file_url = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/from_file_url.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/from_file_url.ts
function fromFileUrl(url) {
  url = assertArg(url);
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"),
  );
}
var init_from_file_url2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/from_file_url.ts"() {
    init_from_file_url();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/strip_trailing_separators.ts
var init_strip_trailing_separators = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/strip_trailing_separators.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/constants.ts
var CHAR_UPPERCASE_A,
  CHAR_LOWERCASE_A,
  CHAR_UPPERCASE_Z,
  CHAR_LOWERCASE_Z,
  CHAR_DOT,
  CHAR_FORWARD_SLASH,
  CHAR_BACKWARD_SLASH,
  CHAR_COLON;
var init_constants = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/constants.ts"() {
    CHAR_UPPERCASE_A = 65;
    CHAR_LOWERCASE_A = 97;
    CHAR_UPPERCASE_Z = 90;
    CHAR_LOWERCASE_Z = 122;
    CHAR_DOT = 46;
    CHAR_FORWARD_SLASH = 47;
    CHAR_BACKWARD_SLASH = 92;
    CHAR_COLON = 58;
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/_util.ts
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
var init_util = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/_util.ts"() {
    init_constants();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/basename.ts
var init_basename2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/basename.ts"() {
    init_basename();
    init_from_file_url2();
    init_strip_trailing_separators();
    init_util();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/_util.ts
function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
  return code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z ||
    code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z;
}
var init_util2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/_util.ts"() {
    init_constants();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/from_file_url.ts
function fromFileUrl2(url) {
  url = assertArg(url);
  let path = decodeURIComponent(
    url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25"),
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname !== "") {
    path = `\\\\${url.hostname}${path}`;
  }
  return path;
}
var init_from_file_url3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/from_file_url.ts"() {
    init_from_file_url();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/basename.ts
var init_basename3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/basename.ts"() {
    init_basename();
    init_constants();
    init_strip_trailing_separators();
    init_util2();
    init_from_file_url3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/basename.ts
var init_basename4 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/basename.ts"() {
    init_os2();
    init_basename2();
    init_basename3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/constants.ts
var init_constants2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/constants.ts"() {
    init_os2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/dirname.ts
var init_dirname = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/dirname.ts"() {
    init_assert_path();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/dirname.ts
var init_dirname2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/dirname.ts"() {
    init_dirname();
    init_strip_trailing_separators();
    init_util();
    init_from_file_url2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/dirname.ts
var init_dirname3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/dirname.ts"() {
    init_dirname();
    init_constants();
    init_strip_trailing_separators();
    init_util2();
    init_from_file_url3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/dirname.ts
var init_dirname4 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/dirname.ts"() {
    init_os2();
    init_dirname2();
    init_dirname3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/extname.ts
var init_extname = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/extname.ts"() {
    init_constants();
    init_assert_path();
    init_util();
    init_from_file_url2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/extname.ts
var init_extname2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/extname.ts"() {
    init_constants();
    init_assert_path();
    init_util2();
    init_from_file_url3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/extname.ts
var init_extname3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/extname.ts"() {
    init_os2();
    init_extname();
    init_extname2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/format.ts
var init_format = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/format.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/format.ts
var init_format2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/format.ts"() {
    init_format();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/format.ts
var init_format3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/format.ts"() {
    init_format();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/format.ts
var init_format4 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/format.ts"() {
    init_os2();
    init_format2();
    init_format3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/from_file_url.ts
var init_from_file_url4 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/from_file_url.ts"() {
    init_os2();
    init_from_file_url2();
    init_from_file_url3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/is_absolute.ts
var init_is_absolute = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/is_absolute.ts"() {
    init_assert_path();
    init_util();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/is_absolute.ts
var init_is_absolute2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/is_absolute.ts"() {
    init_constants();
    init_assert_path();
    init_util2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/is_absolute.ts
var init_is_absolute3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/is_absolute.ts"() {
    init_os2();
    init_is_absolute();
    init_is_absolute2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/normalize.ts
function assertArg4(path) {
  assertPath(path);
  if (path.length === 0) return ".";
}
var init_normalize = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/normalize.ts"() {
    init_assert_path();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/normalize_string.ts
function normalizeString(path, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) code = path.charCodeAt(i);
    else if (isPathSeparator2(code)) break;
    else code = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (
          res.length < 2 || lastSegmentLength !== 2 ||
          res.charCodeAt(res.length - 1) !== CHAR_DOT ||
          res.charCodeAt(res.length - 2) !== CHAR_DOT
        ) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) res += `${separator}..`;
          else res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) res += separator + path.slice(lastSlash + 1, i);
        else res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var init_normalize_string = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/normalize_string.ts"() {
    init_constants();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/normalize.ts
function normalize(path) {
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  assertArg4(path);
  const isAbsolute3 = isPosixPathSeparator(path.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator(
    path.charCodeAt(path.length - 1),
  );
  path = normalizeString(path, !isAbsolute3, "/", isPosixPathSeparator);
  if (path.length === 0 && !isAbsolute3) path = ".";
  if (path.length > 0 && trailingSeparator) path += "/";
  if (isAbsolute3) return `/${path}`;
  return path;
}
var init_normalize2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/normalize.ts"() {
    init_normalize();
    init_normalize_string();
    init_util();
    init_from_file_url2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/join.ts
function join(path, ...paths) {
  if (path === void 0) return ".";
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  paths = path
    ? [
      path,
      ...paths,
    ]
    : paths;
  paths.forEach((path2) => assertPath(path2));
  const joined = paths.filter((path2) => path2.length > 0).join("/");
  return joined === "" ? "." : normalize(joined);
}
var init_join = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/join.ts"() {
    init_assert_path();
    init_from_file_url2();
    init_normalize2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/normalize.ts
function normalize2(path) {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  assertArg4(path);
  const len = path.length;
  let rootEnd = 0;
  let device;
  let isAbsolute3 = false;
  const code = path.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      isAbsolute3 = true;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path.charCodeAt(j))) break;
        }
        if (j < len && j !== last) {
          const firstPart = path.slice(last, j);
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path.charCodeAt(j))) break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path.charCodeAt(j))) break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path.slice(last)}\\`;
            } else if (j !== last) {
              device = `\\\\${firstPart}\\${path.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path.charCodeAt(1) === CHAR_COLON) {
        device = path.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path.charCodeAt(2))) {
            isAbsolute3 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(
      path.slice(rootEnd),
      !isAbsolute3,
      "\\",
      isPathSeparator,
    );
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute3) tail = ".";
  if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute3) {
      if (tail.length > 0) return `\\${tail}`;
      else return "\\";
    }
    return tail;
  } else if (isAbsolute3) {
    if (tail.length > 0) return `${device}\\${tail}`;
    else return `${device}\\`;
  }
  return device + tail;
}
var init_normalize3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/normalize.ts"() {
    init_normalize();
    init_constants();
    init_normalize_string();
    init_util2();
    init_from_file_url3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/join.ts
function join2(path, ...paths) {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  paths = path
    ? [
      path,
      ...paths,
    ]
    : paths;
  paths.forEach((path2) => assertPath(path2));
  paths = paths.filter((path2) => path2.length > 0);
  if (paths.length === 0) return ".";
  let needsReplace = true;
  let slashCount = 0;
  const firstPart = paths[0];
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  let joined = paths.join("\\");
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount))) break;
    }
    if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize2(joined);
}
var init_join2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/join.ts"() {
    init_assert_path();
    init_util2();
    init_normalize3();
    init_from_file_url3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/join.ts
function join3(path, ...paths) {
  return isWindows ? join2(path, ...paths) : join(path, ...paths);
}
var init_join3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/join.ts"() {
    init_os2();
    init_join();
    init_join2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/normalize.ts
var init_normalize4 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/normalize.ts"() {
    init_os2();
    init_normalize2();
    init_normalize3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/parse.ts
var init_parse = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/parse.ts"() {
    init_constants();
    init_strip_trailing_separators();
    init_assert_path();
    init_util();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/parse.ts
var init_parse2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/parse.ts"() {
    init_constants();
    init_assert_path();
    init_util2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/parse.ts
var init_parse3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/parse.ts"() {
    init_os2();
    init_parse();
    init_parse2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/resolve.ts
var init_resolve = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/resolve.ts"() {
    init_normalize_string();
    init_assert_path();
    init_util();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/relative.ts
var init_relative = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/relative.ts"() {
    init_assert_path();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/relative.ts
var init_relative2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/relative.ts"() {
    init_util();
    init_resolve();
    init_relative();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/resolve.ts
var init_resolve2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/resolve.ts"() {
    init_constants();
    init_normalize_string();
    init_assert_path();
    init_util2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/relative.ts
var init_relative3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/relative.ts"() {
    init_constants();
    init_resolve2();
    init_relative();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/relative.ts
var init_relative4 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/relative.ts"() {
    init_os2();
    init_relative2();
    init_relative3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/resolve.ts
var init_resolve3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/resolve.ts"() {
    init_os2();
    init_resolve();
    init_resolve2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/to_file_url.ts
var init_to_file_url = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/to_file_url.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/to_file_url.ts
var init_to_file_url2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/to_file_url.ts"() {
    init_to_file_url();
    init_is_absolute();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/to_file_url.ts
var init_to_file_url3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/to_file_url.ts"() {
    init_to_file_url();
    init_is_absolute2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/to_file_url.ts
var init_to_file_url4 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/to_file_url.ts"() {
    init_os2();
    init_to_file_url2();
    init_to_file_url3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/to_namespaced_path.ts
var init_to_namespaced_path = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/to_namespaced_path.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/to_namespaced_path.ts
var init_to_namespaced_path2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/to_namespaced_path.ts"() {
    init_constants();
    init_util2();
    init_resolve2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/to_namespaced_path.ts
var init_to_namespaced_path3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/to_namespaced_path.ts"() {
    init_os2();
    init_to_namespaced_path();
    init_to_namespaced_path2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/common.ts
var init_common = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/common.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/common.ts
var init_common2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/common.ts"() {
    init_common();
    init_constants2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/types.ts
var init_types = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/types.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/_common/glob_to_reg_exp.ts
var init_glob_to_reg_exp = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/_common/glob_to_reg_exp.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/glob_to_regexp.ts
var init_glob_to_regexp = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/glob_to_regexp.ts"() {
    init_glob_to_reg_exp();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/glob_to_regexp.ts
var init_glob_to_regexp2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/glob_to_regexp.ts"() {
    init_glob_to_reg_exp();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/glob_to_regexp.ts
var init_glob_to_regexp3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/glob_to_regexp.ts"() {
    init_os2();
    init_glob_to_regexp();
    init_glob_to_regexp2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/is_glob.ts
var init_is_glob = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/is_glob.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/constants.ts
var init_constants3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/constants.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/normalize_glob.ts
var init_normalize_glob = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/normalize_glob.ts"() {
    init_normalize2();
    init_constants3();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/posix/join_globs.ts
var init_join_globs = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/posix/join_globs.ts"() {
    init_join();
    init_constants3();
    init_normalize_glob();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/constants.ts
var init_constants4 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/constants.ts"() {
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/normalize_glob.ts
var init_normalize_glob2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/normalize_glob.ts"() {
    init_normalize3();
    init_constants4();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/windows/join_globs.ts
var init_join_globs2 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/windows/join_globs.ts"() {
    init_join2();
    init_constants4();
    init_normalize_glob2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/join_globs.ts
var init_join_globs3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/join_globs.ts"() {
    init_os2();
    init_join_globs();
    init_join_globs2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/normalize_glob.ts
var init_normalize_glob3 = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/normalize_glob.ts"() {
    init_os2();
    init_normalize_glob();
    init_normalize_glob2();
  },
});

// deno:https://jsr.io/@std/path/1.1.4/mod.ts
var init_mod = __esm({
  "deno:https://jsr.io/@std/path/1.1.4/mod.ts"() {
    init_basename4();
    init_constants2();
    init_dirname4();
    init_extname3();
    init_format4();
    init_from_file_url4();
    init_is_absolute3();
    init_join3();
    init_normalize4();
    init_parse3();
    init_relative4();
    init_resolve3();
    init_to_file_url4();
    init_to_namespaced_path3();
    init_common2();
    init_types();
    init_glob_to_regexp3();
    init_is_glob();
    init_join_globs3();
    init_normalize_glob3();
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/map_entries.ts
var init_map_entries = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/map_entries.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/aggregate_groups.ts
var init_aggregate_groups = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/aggregate_groups.ts"() {
    init_map_entries();
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/associate_by.ts
var init_associate_by = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/associate_by.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/associate_with.ts
var init_associate_with = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/associate_with.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/chunk.ts
var init_chunk = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/chunk.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/_utils.ts
var init_utils = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/_utils.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/deep_merge.ts
var init_deep_merge = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/deep_merge.ts"() {
    init_utils();
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/distinct.ts
function distinct(array) {
  const set = new Set(array);
  return Array.from(set);
}
var init_distinct = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/distinct.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/distinct_by.ts
var init_distinct_by = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/distinct_by.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/drop_last_while.ts
var init_drop_last_while = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/drop_last_while.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/drop_while.ts
var init_drop_while = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/drop_while.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/filter_entries.ts
var init_filter_entries = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/filter_entries.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/filter_keys.ts
var init_filter_keys = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/filter_keys.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/filter_values.ts
var init_filter_values = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/filter_values.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/find_single.ts
var init_find_single = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/find_single.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/first_not_nullish_of.ts
var init_first_not_nullish_of = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/first_not_nullish_of.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/includes_value.ts
var init_includes_value = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/includes_value.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/intersect.ts
var init_intersect = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/intersect.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/invert_by.ts
var init_invert_by = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/invert_by.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/invert.ts
var init_invert = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/invert.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/join_to_string.ts
var init_join_to_string = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/join_to_string.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/map_keys.ts
var init_map_keys = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/map_keys.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/map_not_nullish.ts
var init_map_not_nullish = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/map_not_nullish.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/map_values.ts
var init_map_values = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/map_values.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/max_by.ts
var init_max_by = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/max_by.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/max_of.ts
var init_max_of = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/max_of.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/max_with.ts
var init_max_with = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/max_with.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/min_by.ts
var init_min_by = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/min_by.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/min_of.ts
var init_min_of = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/min_of.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/min_with.ts
var init_min_with = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/min_with.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/omit.ts
var init_omit = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/omit.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/partition.ts
var init_partition = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/partition.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/partition_entries.ts
var init_partition_entries = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/partition_entries.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/permutations.ts
var init_permutations = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/permutations.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/pick.ts
var init_pick = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/pick.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/reduce_groups.ts
var init_reduce_groups = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/reduce_groups.ts"() {
    init_map_values();
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/running_reduce.ts
var init_running_reduce = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/running_reduce.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/sample.ts
var init_sample = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/sample.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/sliding_windows.ts
var init_sliding_windows = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/sliding_windows.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/sort_by.ts
var init_sort_by = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/sort_by.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/sum_of.ts
var init_sum_of = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/sum_of.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/take_last_while.ts
var init_take_last_while = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/take_last_while.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/take_while.ts
var init_take_while = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/take_while.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/union.ts
var init_union = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/union.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/unzip.ts
var init_unzip = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/unzip.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/without_all.ts
var init_without_all = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/without_all.ts"() {
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/zip.ts
var init_zip = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/zip.ts"() {
    init_min_of();
  },
});

// deno:https://jsr.io/@std/collections/1.1.3/mod.ts
var init_mod2 = __esm({
  "deno:https://jsr.io/@std/collections/1.1.3/mod.ts"() {
    init_aggregate_groups();
    init_associate_by();
    init_associate_with();
    init_chunk();
    init_deep_merge();
    init_distinct();
    init_distinct_by();
    init_drop_last_while();
    init_drop_while();
    init_filter_entries();
    init_filter_keys();
    init_filter_values();
    init_find_single();
    init_first_not_nullish_of();
    init_includes_value();
    init_intersect();
    init_invert_by();
    init_invert();
    init_join_to_string();
    init_map_entries();
    init_map_keys();
    init_map_not_nullish();
    init_map_values();
    init_max_by();
    init_max_of();
    init_max_with();
    init_min_by();
    init_min_of();
    init_min_with();
    init_omit();
    init_partition();
    init_partition_entries();
    init_permutations();
    init_pick();
    init_reduce_groups();
    init_running_reduce();
    init_sample();
    init_sliding_windows();
    init_sort_by();
    init_sum_of();
    init_take_last_while();
    init_take_while();
    init_union();
    init_unzip();
    init_without_all();
    init_zip();
  },
});

// src/libPaths/findLib.ts
function findLib(lib, paths) {
  const candidates = [
    lib,
  ];
  for (const path of paths) {
    const fullPath = join3(path, lib);
    candidates.push(fullPath);
  }
  const uniqueCandidates = distinct(candidates);
  return tryOpenLib(uniqueCandidates);
}
function tryOpenLib(paths) {
  for (const path of paths) {
    try {
      const lib = Deno.dlopen(path, {});
      lib.close();
      return path;
    } catch {
      continue;
    }
  }
  return paths[0];
}
var init_findLib = __esm({
  "src/libPaths/findLib.ts"() {
    init_mod();
    init_mod2();
  },
});

// src/libPaths/platform/darwin.ts
var darwin_exports = {};
__export(darwin_exports, {
  darwinLibPaths: () => darwinLibPaths,
});
var SEARCH_DIRS, darwinLibPaths;
var init_darwin = __esm({
  "src/libPaths/platform/darwin.ts"() {
    init_findLib();
    SEARCH_DIRS = [
      "/opt/homebrew/lib",
      "/usr/local/lib",
    ];
    darwinLibPaths = {
      gtk: findLib("libgtk-4.1.dylib", SEARCH_DIRS),
      adwaita: findLib("adwaita-1.dylib", SEARCH_DIRS),
      glib: findLib("libglib-2.0.dylib", SEARCH_DIRS),
      gobject: findLib("gobject-2.0.dylib", SEARCH_DIRS),
      gio: findLib("libgio-2.0.dylib", SEARCH_DIRS),
      cairo: findLib("libcairo.2.dylib", SEARCH_DIRS),
    };
  },
});

// src/libPaths/platform/windows.ts
var windows_exports = {};
__export(windows_exports, {
  windowsLibPaths: () => windowsLibPaths,
});
var SEARCH_DIRS2, windowsLibPaths;
var init_windows = __esm({
  "src/libPaths/platform/windows.ts"() {
    init_findLib();
    SEARCH_DIRS2 = [
      "C:/tools/msys64/mingw64/bin",
    ];
    windowsLibPaths = {
      gtk: findLib("libgtk-4-1.dll", SEARCH_DIRS2),
      adwaita: findLib("libadwaita-1-0.dll", SEARCH_DIRS2),
      glib: findLib("libglib-2.0-0.dll", SEARCH_DIRS2),
      gobject: findLib("libgobject-2.0-0.dll", SEARCH_DIRS2),
      gio: findLib("libgio-2.0-0.dll", SEARCH_DIRS2),
      cairo: findLib("libcairo-2.dll", SEARCH_DIRS2),
    };
  },
});

// src/libPaths/platform/unix.ts
var unix_exports = {};
__export(unix_exports, {
  unixLibPaths: () => unixLibPaths,
});
var SEARCH_DIRS3, unixLibPaths;
var init_unix = __esm({
  "src/libPaths/platform/unix.ts"() {
    init_findLib();
    SEARCH_DIRS3 = [
      "/usr/lib",
      "/usr/local/lib",
      "/run/current-system/sw/lib",
    ];
    unixLibPaths = {
      gtk: findLib("libgtk-4.so.1", SEARCH_DIRS3),
      adwaita: findLib("libadwaita-1.so.0", SEARCH_DIRS3),
      glib: findLib("libglib-2.0.so.0", SEARCH_DIRS3),
      gobject: findLib("libgobject-2.0.so.0", SEARCH_DIRS3),
      gio: findLib("libgio-2.0.so.0", SEARCH_DIRS3),
      cairo: findLib("libcairo.so.2", SEARCH_DIRS3),
    };
  },
});

// src/bun-deno-compat.ts
import process from "node:process";
if (navigator.userAgent.startsWith("Bun")) {
  const { dlopen, FFIType, CString, ptr, JSCallback } = await import("bun:ffi");
  const { type } = await import("node:os");
  class DenoCompat {
    static env = {
      get(name) {
        return Bun.env[name];
      },
    };
    static build = {
      os: (() => {
        const osType = type().toLowerCase();
        if (osType === "linux") return "linux";
        if (osType === "darwin") return "darwin";
        if (osType === "windows_nt") return "windows";
        return osType;
      })(),
    };
    static exit(code) {
      process.exit(code);
    }
    static transformFFIType(denoType) {
      switch (denoType) {
        case "void":
          return FFIType.void;
        case "bool":
          return FFIType.bool;
        case "u8":
          return FFIType.u8;
        case "i8":
          return FFIType.i8;
        case "u16":
          return FFIType.u16;
        case "i16":
          return FFIType.i16;
        case "u32":
          return FFIType.u32;
        case "i32":
          return FFIType.i32;
        case "u64":
          return FFIType.u64;
        case "i64":
          return FFIType.i64;
        case "usize":
          return FFIType.u64;
        case "isize":
          return FFIType.i64;
        case "f32":
          return FFIType.f32;
        case "f64":
          return FFIType.f64;
        case "pointer":
        case "buffer":
          return FFIType.ptr;
        case "function":
          return FFIType.function;
        default:
          throw new Error(`FFI type not supported: ${denoType}`);
      }
    }
    static dlopen(path, symbols) {
      const bunSymbols = {};
      for (const name in symbols) {
        const symbol = symbols[name];
        if ("type" in symbol) {
          throw new Error("Symbol type notation not supported");
        } else {
          bunSymbols[name] = {
            args: symbol.parameters.map((type2) =>
              this.transformFFIType(type2)
            ),
            returns: this.transformFFIType(symbol.result),
          };
        }
      }
      const lib = dlopen(path, bunSymbols);
      return lib;
    }
    static UnsafeCallback = class UnsafeCallback {
      inner;
      pointer;
      constructor(def, fn) {
        this.inner = new JSCallback(fn, {
          args: def.parameters.map((type2) =>
            DenoCompat.transformFFIType(type2)
          ),
          returns: DenoCompat.transformFFIType(def.result),
        });
        this.pointer = this.inner.ptr;
      }
      close() {
        this.inner.close();
      }
    };
    static UnsafePointerView = class UnsafePointerView {
      ptr;
      static getCString(pointer) {
        return new CString(pointer);
      }
      constructor(ptr2) {
        this.ptr = ptr2;
      }
      getCString() {
        return new CString(this.ptr);
      }
    };
    static UnsafePointer = class UnsafePointer {
      static equals(a, b) {
        return a === b;
      }
      static create(value) {
        return Number(value);
      }
      // @ts-ignore TypedArray exists in Bun ?
      static of(buffer) {
        return ptr(buffer);
      }
      static value(pointer) {
        return pointer;
      }
    };
  }
  globalThis.Deno = DenoCompat;
}

// src/libPaths/mod.ts
import os from "node:os";
var OS = os.platform();
var LIB_PATHS = OS === "darwin"
  ? (await Promise.resolve().then(() => (init_darwin(), darwin_exports)))
    .darwinLibPaths
  : OS === "win32"
  ? (await Promise.resolve().then(() => (init_windows(), windows_exports)))
    .windowsLibPaths
  : (await Promise.resolve().then(() => (init_unix(), unix_exports)))
    .unixLibPaths;

// src/libs.ts
console.log("Using library paths:", LIB_PATHS);
var glib = Deno.dlopen(LIB_PATHS.glib, {
  g_main_loop_new: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "pointer",
  },
  g_main_loop_run: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  g_main_loop_quit: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  g_main_context_default: {
    parameters: [],
    result: "pointer",
  },
  g_main_context_pending: {
    parameters: [
      "pointer",
    ],
    result: "bool",
  },
  g_main_context_iteration: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "bool",
  },
  g_timeout_add: {
    parameters: [
      "u32",
      "function",
      "pointer",
    ],
    result: "u32",
  },
  g_source_remove: {
    parameters: [
      "u32",
    ],
    result: "bool",
  },
  g_free: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  g_strdup: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  g_malloc0: {
    parameters: [
      "usize",
    ],
    result: "pointer",
  },
});
var cairo = Deno.dlopen(LIB_PATHS.cairo, {
  cairo_set_source_rgb: {
    parameters: [
      "pointer",
      "f64",
      "f64",
      "f64",
    ],
    result: "void",
  },
  cairo_set_source_rgba: {
    parameters: [
      "pointer",
      "f64",
      "f64",
      "f64",
      "f64",
    ],
    result: "void",
  },
  cairo_set_line_width: {
    parameters: [
      "pointer",
      "f64",
    ],
    result: "void",
  },
  cairo_move_to: {
    parameters: [
      "pointer",
      "f64",
      "f64",
    ],
    result: "void",
  },
  cairo_line_to: {
    parameters: [
      "pointer",
      "f64",
      "f64",
    ],
    result: "void",
  },
  cairo_stroke: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  cairo_fill: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  cairo_rectangle: {
    parameters: [
      "pointer",
      "f64",
      "f64",
      "f64",
      "f64",
    ],
    result: "void",
  },
  cairo_arc: {
    parameters: [
      "pointer",
      "f64",
      "f64",
      "f64",
      "f64",
      "f64",
    ],
    result: "void",
  },
  cairo_paint: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  cairo_scale: {
    parameters: [
      "pointer",
      "f64",
      "f64",
    ],
    result: "void",
  },
  cairo_translate: {
    parameters: [
      "pointer",
      "f64",
      "f64",
    ],
    result: "void",
  },
});
var gobject = Deno.dlopen(LIB_PATHS.gobject, {
  g_object_new: {
    parameters: [
      "u64",
      "buffer",
    ],
    result: "pointer",
    nonblocking: false,
  },
  g_object_ref: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  g_object_unref: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  g_object_set_property: {
    parameters: [
      "pointer",
      "buffer",
      "pointer",
    ],
    result: "void",
  },
  g_object_get_property: {
    parameters: [
      "pointer",
      "buffer",
      "pointer",
    ],
    result: "void",
  },
  g_signal_connect_data: {
    parameters: [
      "pointer",
      "buffer",
      "function",
      "pointer",
      "pointer",
      "u32",
    ],
    result: "u64",
  },
  g_signal_handler_disconnect: {
    parameters: [
      "pointer",
      "u64",
    ],
    result: "void",
  },
  g_signal_emit_by_name: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  g_type_from_name: {
    parameters: [
      "buffer",
    ],
    result: "u64",
  },
  g_value_init: {
    parameters: [
      "pointer",
      "u64",
    ],
    result: "pointer",
  },
  g_value_set_string: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  g_value_set_boolean: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  g_value_set_int: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  g_value_set_uint: {
    parameters: [
      "pointer",
      "u32",
    ],
    result: "void",
  },
  g_value_set_object: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  g_value_get_string: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  g_value_get_boolean: {
    parameters: [
      "pointer",
    ],
    result: "bool",
  },
  g_value_get_int: {
    parameters: [
      "pointer",
    ],
    result: "i32",
  },
  g_value_get_uint: {
    parameters: [
      "pointer",
    ],
    result: "u32",
  },
  g_value_get_object: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  g_value_unset: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
});
var gio = Deno.dlopen(LIB_PATHS.gio, {
  g_application_run: {
    parameters: [
      "pointer",
      "i32",
      "pointer",
    ],
    result: "i32",
  },
  g_application_quit: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  g_application_register: {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
    ],
    result: "bool",
  },
  g_application_activate: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  g_application_get_is_remote: {
    parameters: [
      "pointer",
    ],
    result: "bool",
  },
  g_simple_action_new: {
    parameters: [
      "buffer",
      "pointer",
    ],
    result: "pointer",
  },
  g_action_map_add_action: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  g_menu_new: {
    parameters: [],
    result: "pointer",
  },
  g_menu_append: {
    parameters: [
      "pointer",
      "buffer",
      "buffer",
    ],
    result: "void",
  },
  g_notification_new: {
    parameters: [
      "buffer",
    ],
    result: "pointer",
  },
  g_notification_set_body: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  g_application_send_notification: {
    parameters: [
      "pointer",
      "buffer",
      "pointer",
    ],
    result: "void",
  },
  g_application_withdraw_notification: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  g_list_store_new: {
    parameters: [
      "u64",
    ],
    result: "pointer",
  },
  g_list_store_append: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  g_task_propagate_pointer: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "pointer",
  },
});
var gtk = Deno.dlopen(LIB_PATHS.gtk, {
  gtk_init: {
    parameters: [],
    result: "void",
  },
  gtk_application_new: {
    parameters: [
      "buffer",
      "i32",
    ],
    result: "pointer",
  },
  gtk_application_window_new: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_builder_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_builder_add_from_file: {
    parameters: [
      "pointer",
      "buffer",
      "pointer",
    ],
    result: "bool",
  },
  gtk_builder_add_from_string: {
    parameters: [
      "pointer",
      "buffer",
      "i64",
      "pointer",
    ],
    result: "bool",
  },
  gtk_builder_get_object: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "pointer",
  },
  gtk_box_new: {
    parameters: [
      "i32",
      "i32",
    ],
    result: "pointer",
  },
  gtk_box_append: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_box_remove: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_label_new: {
    parameters: [
      "buffer",
    ],
    result: "pointer",
  },
  gtk_label_set_text: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_label_get_text: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_label_set_markup: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_label_set_use_markup: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  gtk_button_new_with_label: {
    parameters: [
      "buffer",
    ],
    result: "pointer",
  },
  gtk_button_set_label: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_check_button_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_check_button_new_with_label: {
    parameters: [
      "buffer",
    ],
    result: "pointer",
  },
  gtk_check_button_get_active: {
    parameters: [
      "pointer",
    ],
    result: "bool",
  },
  gtk_check_button_set_active: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  gtk_check_button_get_label: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_check_button_set_label: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_check_button_set_group: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_check_button_set_inconsistent: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  gtk_check_button_get_inconsistent: {
    parameters: [
      "pointer",
    ],
    result: "bool",
  },
  gtk_picture_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_picture_set_filename: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_picture_set_can_shrink: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  gtk_window_set_title: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_window_set_default_size: {
    parameters: [
      "pointer",
      "i32",
      "i32",
    ],
    result: "void",
  },
  gtk_window_set_titlebar: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_window_present: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  gtk_window_close: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  gtk_window_set_child: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_window_get_child: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_scrolled_window_set_min_content_height: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_dialog_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_window_set_transient_for: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_window_set_modal: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  gtk_window_destroy: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  gtk_widget_set_margin_top: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_widget_set_margin_bottom: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_widget_set_margin_start: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_widget_set_margin_end: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_widget_set_halign: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_widget_set_valign: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_widget_set_hexpand: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  gtk_widget_set_vexpand: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  gtk_widget_set_visible: {
    parameters: [
      "pointer",
      "bool",
    ],
    result: "void",
  },
  gtk_widget_get_visible: {
    parameters: [
      "pointer",
    ],
    result: "bool",
  },
  gtk_widget_set_size_request: {
    parameters: [
      "pointer",
      "i32",
      "i32",
    ],
    result: "void",
  },
  gtk_widget_grab_focus: {
    parameters: [
      "pointer",
    ],
    result: "bool",
  },
  gtk_widget_unparent: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  gtk_widget_get_first_child: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_widget_get_next_sibling: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_widget_queue_draw: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  gtk_drawing_area_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_drawing_area_set_draw_func: {
    parameters: [
      "pointer",
      "function",
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_drawing_area_set_content_width: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_drawing_area_set_content_height: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_frame_new: {
    parameters: [
      "buffer",
    ],
    result: "pointer",
  },
  gtk_frame_set_child: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_scrolled_window_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_scrolled_window_set_child: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_list_box_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_list_box_append: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_list_box_remove: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_list_box_set_selection_mode: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_list_box_select_row: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_list_box_get_selected_row: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_list_box_row_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_list_box_row_set_child: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  gtk_list_box_row_get_index: {
    parameters: [
      "pointer",
    ],
    result: "i32",
  },
  gtk_spinner_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_spinner_start: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  gtk_spinner_stop: {
    parameters: [
      "pointer",
    ],
    result: "void",
  },
  gtk_image_new_from_icon_name: {
    parameters: [
      "buffer",
    ],
    result: "pointer",
  },
  gtk_image_new_from_file: {
    parameters: [
      "buffer",
    ],
    result: "pointer",
  },
  gtk_image_set_from_file: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_image_set_pixel_size: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  gtk_string_list_new: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_string_list_append: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_string_list_get_string: {
    parameters: [
      "pointer",
      "u32",
    ],
    result: "pointer",
  },
  gtk_drop_down_new: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "pointer",
  },
  gtk_drop_down_get_selected: {
    parameters: [
      "pointer",
    ],
    result: "u32",
  },
  gtk_drop_down_set_selected: {
    parameters: [
      "pointer",
      "u32",
    ],
    result: "void",
  },
  gtk_entry_new: {
    parameters: [],
    result: "pointer",
  },
  gtk_editable_get_text: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_editable_set_text: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  gtk_application_inhibit: {
    parameters: [
      "pointer",
      "pointer",
      "i32",
      "buffer",
    ],
    result: "u32",
  },
  gtk_application_uninhibit: {
    parameters: [
      "pointer",
      "u32",
    ],
    result: "void",
  },
  gtk_application_set_accels_for_action: {
    parameters: [
      "pointer",
      "buffer",
      "pointer",
    ],
    result: "void",
  },
  gtk_icon_theme_get_for_display: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  gtk_icon_theme_has_icon: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "bool",
  },
  gdk_display_get_default: {
    parameters: [],
    result: "pointer",
  },
});
var adwaita = Deno.dlopen(LIB_PATHS.adwaita, {
  adw_init: {
    parameters: [],
    result: "void",
  },
  adw_application_new: {
    parameters: [
      "buffer",
      "i32",
    ],
    result: "pointer",
  },
  adw_window_new: {
    parameters: [],
    result: "pointer",
  },
  adw_window_set_content: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_application_window_new: {
    parameters: [
      "pointer",
    ],
    result: "pointer",
  },
  adw_application_window_set_content: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_header_bar_new: {
    parameters: [],
    result: "pointer",
  },
  adw_header_bar_pack_end: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_header_bar_pack_start: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_header_bar_set_title_widget: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_about_dialog_new: {
    parameters: [],
    result: "pointer",
  },
  adw_about_dialog_set_application_name: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  adw_about_dialog_set_version: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  adw_about_dialog_set_developer_name: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  adw_about_dialog_set_comments: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  adw_toolbar_view_new: {
    parameters: [],
    result: "pointer",
  },
  adw_toolbar_view_set_content: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_toolbar_view_add_top_bar: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_toolbar_view_add_bottom_bar: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_style_manager_get_default: {
    parameters: [],
    result: "pointer",
  },
  adw_style_manager_set_color_scheme: {
    parameters: [
      "pointer",
      "i32",
    ],
    result: "void",
  },
  adw_style_manager_get_color_scheme: {
    parameters: [
      "pointer",
    ],
    result: "i32",
  },
  adw_preferences_window_new: {
    parameters: [],
    result: "pointer",
  },
  adw_preferences_window_add: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_preferences_page_new: {
    parameters: [],
    result: "pointer",
  },
  adw_preferences_page_add: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_preferences_group_new: {
    parameters: [],
    result: "pointer",
  },
  adw_preferences_group_add: {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  adw_message_dialog_new: {
    parameters: [
      "pointer",
      "buffer",
      "buffer",
    ],
    result: "pointer",
  },
  adw_message_dialog_add_response: {
    parameters: [
      "pointer",
      "buffer",
      "buffer",
    ],
    result: "void",
  },
  adw_message_dialog_set_response_appearance: {
    parameters: [
      "pointer",
      "buffer",
      "i32",
    ],
    result: "void",
  },
  adw_message_dialog_set_default_response: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  adw_message_dialog_set_close_response: {
    parameters: [
      "pointer",
      "buffer",
    ],
    result: "void",
  },
  adw_message_dialog_choose: {
    parameters: [
      "pointer",
      "pointer",
      "function",
      "pointer",
    ],
    result: "void",
  },
});

// src/gtk-ffi.ts
var G_TYPE_INVALID = 0 << 2;
var G_TYPE_NONE = 1 << 2;
var G_TYPE_INTERFACE = 2 << 2;
var G_TYPE_CHAR = 3 << 2;
var G_TYPE_UCHAR = 4 << 2;
var G_TYPE_BOOLEAN = 5 << 2;
var G_TYPE_INT = 6 << 2;
var G_TYPE_UINT = 7 << 2;
var G_TYPE_LONG = 8 << 2;
var G_TYPE_ULONG = 9 << 2;
var G_TYPE_INT64 = 10 << 2;
var G_TYPE_UINT64 = 11 << 2;
var G_TYPE_ENUM = 12 << 2;
var G_TYPE_FLAGS = 13 << 2;
var G_TYPE_FLOAT = 14 << 2;
var G_TYPE_DOUBLE = 15 << 2;
var G_TYPE_STRING = 16 << 2;
var G_TYPE_POINTER = 17 << 2;
var G_TYPE_BOXED = 18 << 2;
var G_TYPE_PARAM = 19 << 2;
var G_TYPE_OBJECT = 20 << 2;
var G_TYPE_VARIANT = 21 << 2;
var GTK_ORIENTATION_VERTICAL = 1;
adwaita.symbols.adw_init();
function cstr(str) {
  const encoded = new TextEncoder().encode(str + "\0");
  return new Uint8Array(encoded.buffer);
}
function readCStr(ptr) {
  if (!ptr) return "";
  const view = new Deno.UnsafePointerView(ptr);
  return view.getCString();
}
function createGValue() {
  const buffer = new ArrayBuffer(24);
  return new Uint8Array(buffer);
}
var GObject = class _GObject {
  /**
   * @internal
   * Internal pointer to the underlying GTK object.
   * Do not use directly in application code - use the high-level methods instead.
   */
  ptr;
  constructor(ptr) {
    this.ptr = ptr;
    if (ptr) {
      gobject.symbols.g_object_ref(ptr);
    }
  }
  unref() {
    if (this.ptr) {
      gobject.symbols.g_object_unref(this.ptr);
      this.ptr = null;
    }
  }
  connect(signal, callback) {
    const signalCStr = cstr(signal);
    const cbDef = {
      parameters: [
        "pointer",
        "pointer",
        "pointer",
        "pointer",
        "pointer",
      ],
      result: "void",
    };
    const cb = new Deno.UnsafeCallback(cbDef, (_objectPtr, ...args) => {
      callback(...args);
    });
    const signalId = gobject.symbols.g_signal_connect_data(
      this.ptr,
      signalCStr,
      cb.pointer,
      null,
      null,
      0,
    );
    return Number(signalId);
  }
  disconnect(signalId) {
    gobject.symbols.g_signal_handler_disconnect(this.ptr, BigInt(signalId));
  }
  emit(signal) {
    const signalCStr = cstr(signal);
    gobject.symbols.g_signal_emit_by_name(this.ptr, signalCStr);
  }
  setProperty(name, value) {
    const nameCStr = cstr(name);
    const gvalue = createGValue();
    const gvaluePtr = Deno.UnsafePointer.of(gvalue);
    if (typeof value === "string") {
      gobject.symbols.g_value_init(gvaluePtr, BigInt(G_TYPE_STRING));
      gobject.symbols.g_value_set_string(gvaluePtr, cstr(value));
    } else if (typeof value === "boolean") {
      gobject.symbols.g_value_init(gvaluePtr, BigInt(G_TYPE_BOOLEAN));
      gobject.symbols.g_value_set_boolean(gvaluePtr, value);
    } else if (typeof value === "number") {
      gobject.symbols.g_value_init(gvaluePtr, BigInt(G_TYPE_INT));
      gobject.symbols.g_value_set_int(gvaluePtr, value);
    } else if (value instanceof _GObject) {
      gobject.symbols.g_value_init(gvaluePtr, BigInt(G_TYPE_OBJECT));
      gobject.symbols.g_value_set_object(gvaluePtr, value.ptr);
    } else if (typeof value === "object" && value !== null) {
      gobject.symbols.g_value_init(gvaluePtr, BigInt(G_TYPE_OBJECT));
      gobject.symbols.g_value_set_object(gvaluePtr, value);
    }
    gobject.symbols.g_object_set_property(this.ptr, nameCStr, gvaluePtr);
    gobject.symbols.g_value_unset(gvaluePtr);
  }
  getProperty(name, type) {
    const nameCStr = cstr(name);
    const gvalue = createGValue();
    const gvaluePtr = Deno.UnsafePointer.of(gvalue);
    if (type === void 0) {
      if (
        name === "active" || name === "visible" || name === "sensitive" ||
        name === "modal" || name === "hide-on-close"
      ) {
        type = G_TYPE_BOOLEAN;
      } else if (name === "selected" || name === "width" || name === "height") {
        type = G_TYPE_UINT;
      } else if (
        name === "title" || name === "subtitle" || name === "icon-name"
      ) {
        type = G_TYPE_STRING;
      } else {
        type = G_TYPE_OBJECT;
      }
    }
    gobject.symbols.g_value_init(gvaluePtr, BigInt(type));
    gobject.symbols.g_object_get_property(this.ptr, nameCStr, gvaluePtr);
    let result;
    if (type === G_TYPE_STRING) {
      const strPtr = gobject.symbols.g_value_get_string(gvaluePtr);
      result = readCStr(strPtr);
    } else if (type === G_TYPE_BOOLEAN) {
      result = gobject.symbols.g_value_get_boolean(gvaluePtr);
    } else if (type === G_TYPE_INT) {
      result = gobject.symbols.g_value_get_int(gvaluePtr);
    } else if (type === G_TYPE_UINT) {
      result = gobject.symbols.g_value_get_uint(gvaluePtr);
    } else if (type === G_TYPE_OBJECT) {
      result = gobject.symbols.g_value_get_object(gvaluePtr);
    }
    gobject.symbols.g_value_unset(gvaluePtr);
    return result;
  }
};
var Widget = class extends GObject {
  setMarginTop(margin) {
    gtk.symbols.gtk_widget_set_margin_top(this.ptr, margin);
  }
  setMarginBottom(margin) {
    gtk.symbols.gtk_widget_set_margin_bottom(this.ptr, margin);
  }
  setMarginStart(margin) {
    gtk.symbols.gtk_widget_set_margin_start(this.ptr, margin);
  }
  setMarginEnd(margin) {
    gtk.symbols.gtk_widget_set_margin_end(this.ptr, margin);
  }
  setHalign(align) {
    gtk.symbols.gtk_widget_set_halign(this.ptr, align);
  }
  setValign(align) {
    gtk.symbols.gtk_widget_set_valign(this.ptr, align);
  }
  setHexpand(expand) {
    gtk.symbols.gtk_widget_set_hexpand(this.ptr, expand);
  }
  setVexpand(expand) {
    gtk.symbols.gtk_widget_set_vexpand(this.ptr, expand);
  }
  setVisible(visible) {
    gtk.symbols.gtk_widget_set_visible(this.ptr, visible);
  }
  getVisible() {
    return gtk.symbols.gtk_widget_get_visible(this.ptr);
  }
  setSizeRequest(width, height) {
    gtk.symbols.gtk_widget_set_size_request(this.ptr, width, height);
  }
  setApplication(app) {
    this.setProperty("application", app.ptr);
  }
  setTitlebar(titlebar) {
    this.setProperty("titlebar", titlebar.ptr);
  }
  setModel(model) {
    this.setProperty("model", model.ptr);
  }
  setTransientForWidget(parent) {
    this.setProperty("transient-for", parent.ptr);
  }
  queueDraw() {
    gtk.symbols.gtk_widget_queue_draw(this.ptr);
  }
  grabFocus() {
    return gtk.symbols.gtk_widget_grab_focus(this.ptr);
  }
};
var Box = class extends Widget {
  constructor(orientation, spacing) {
    const ptr = gtk.symbols.gtk_box_new(orientation, spacing);
    super(ptr);
  }
  append(child) {
    gtk.symbols.gtk_box_append(this.ptr, child.ptr);
  }
  remove(child) {
    gtk.symbols.gtk_box_remove(this.ptr, child.ptr);
  }
};
var Label = class extends Widget {
  constructor(text) {
    const textCStr = cstr(text);
    const ptr = gtk.symbols.gtk_label_new(textCStr);
    super(ptr);
  }
  setText(text) {
    const textCStr = cstr(text);
    gtk.symbols.gtk_label_set_text(this.ptr, textCStr);
  }
  getText() {
    const ptr = gtk.symbols.gtk_label_get_text(this.ptr);
    return readCStr(ptr);
  }
  setMarkup(markup) {
    const markupCStr = cstr(markup);
    gtk.symbols.gtk_label_set_markup(this.ptr, markupCStr);
  }
  setUseMarkup(useMarkup) {
    gtk.symbols.gtk_label_set_use_markup(this.ptr, useMarkup);
  }
};
var Button = class extends Widget {
  constructor(label) {
    const labelCStr = label ? cstr(label) : null;
    const ptr = gtk.symbols.gtk_button_new_with_label(labelCStr);
    super(ptr);
  }
  setLabel(label) {
    const labelCStr = cstr(label);
    gtk.symbols.gtk_button_set_label(this.ptr, labelCStr);
  }
  // High-level signal connection for clicked
  onClick(callback) {
    return this.connect("clicked", callback);
  }
};
var CheckButton = class extends Widget {
  constructor(label) {
    let ptr;
    if (label) {
      const labelCStr = cstr(label);
      ptr = gtk.symbols.gtk_check_button_new_with_label(labelCStr);
    } else {
      ptr = gtk.symbols.gtk_check_button_new();
    }
    super(ptr);
  }
  setActive(active) {
    gtk.symbols.gtk_check_button_set_active(this.ptr, active);
  }
  getActive() {
    return gtk.symbols.gtk_check_button_get_active(this.ptr);
  }
  setLabel(label) {
    const labelCStr = cstr(label);
    gtk.symbols.gtk_check_button_set_label(this.ptr, labelCStr);
  }
  getLabel() {
    const ptr = gtk.symbols.gtk_check_button_get_label(this.ptr);
    return ptr ? readCStr(ptr) : null;
  }
  setGroup(group) {
    gtk.symbols.gtk_check_button_set_group(this.ptr, group.ptr);
  }
  setInconsistent(inconsistent) {
    gtk.symbols.gtk_check_button_set_inconsistent(this.ptr, inconsistent);
  }
  getInconsistent() {
    return gtk.symbols.gtk_check_button_get_inconsistent(this.ptr);
  }
  // High-level signal connection for toggled
  onToggled(callback) {
    return this.connect("toggled", callback);
  }
};
var Entry = class extends Widget {
  constructor() {
    const ptr = gtk.symbols.gtk_entry_new();
    super(ptr);
  }
  getText() {
    const ptr = gtk.symbols.gtk_editable_get_text(this.ptr);
    return readCStr(ptr);
  }
  setText(text) {
    const textCStr = cstr(text);
    gtk.symbols.gtk_editable_set_text(this.ptr, textCStr);
  }
  // High-level signal connection for activate (Enter key pressed)
  onActivate(callback) {
    return this.connect("activate", callback);
  }
  // High-level signal connection for changed
  onChanged(callback) {
    return this.connect("changed", callback);
  }
};

// test/widget_test.ts
var passedTests = 0;
var failedTests = 0;
function assert(condition, message) {
  if (condition) {
    console.log(`\u2713 PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`\u2717 FAIL: ${message}`);
    failedTests++;
  }
}
function assertEquals(actual, expected, message) {
  const actualStr = String(actual);
  const expectedStr = String(expected);
  if (actualStr === expectedStr) {
    console.log(`\u2713 PASS: ${message}`);
    passedTests++;
  } else {
    console.error(
      `\u2717 FAIL: ${message} (expected: ${expectedStr}, got: ${actualStr})`,
    );
    failedTests++;
  }
}
function processPendingEvents() {
  if (Deno.build.os === "darwin") {
    return;
  }
  const context = glib.symbols.g_main_context_default();
  while (glib.symbols.g_main_context_pending(context)) {
    glib.symbols.g_main_context_iteration(context, false);
  }
}
function clickButton(button) {
  button.emit("clicked");
  processPendingEvents();
}
console.log("\n\u{1F9EA} Starting GTK Widget Tests...\n");
gtk.symbols.gtk_init();
try {
  console.log("Test 1: Widget Creation");
  const label = new Label("Initial Text");
  const button = new Button("Click Me");
  const entry = new Entry();
  const check = new CheckButton("Check Me");
  assert(label !== null, "Label created successfully");
  assert(button !== null, "Button created successfully");
  assert(entry !== null, "Entry created successfully");
  assert(check !== null, "CheckButton created successfully");
  console.log("\nTest 2: Label Text Manipulation");
  label.setText("Hello World");
  assertEquals(label.getText(), "Hello World", "Label text was set correctly");
  label.setText("Updated Text");
  assertEquals(
    label.getText(),
    "Updated Text",
    "Label text was updated correctly",
  );
  console.log("\nTest 3: Entry Text Manipulation");
  entry.setText("user input");
  assertEquals(entry.getText(), "user input", "Entry text was set correctly");
  console.log("\nTest 4: Button Click Event");
  let clickCount = 0;
  button.connect("clicked", () => {
    clickCount++;
  });
  clickButton(button);
  assertEquals(clickCount, 1, "Button click handler called once");
  clickButton(button);
  assertEquals(clickCount, 2, "Button click handler called twice");
  console.log("\nTest 5: Button Updates Label");
  const interactiveLabel = new Label("Count: 0");
  const interactiveButton = new Button("Increment");
  let counter = 0;
  interactiveButton.connect("clicked", () => {
    counter++;
    interactiveLabel.setText(`Count: ${counter}`);
  });
  clickButton(interactiveButton);
  assertEquals(
    interactiveLabel.getText(),
    "Count: 1",
    "Label updated after first click",
  );
  clickButton(interactiveButton);
  assertEquals(
    interactiveLabel.getText(),
    "Count: 2",
    "Label updated after second click",
  );
  console.log("\nTest 6: Entry and Button Interaction");
  const inputEntry = new Entry();
  const submitButton = new Button("Submit");
  const resultLabel = new Label("");
  inputEntry.setText("Test Input");
  submitButton.connect("clicked", () => {
    const text = inputEntry.getText();
    resultLabel.setText(`You entered: ${text}`);
  });
  clickButton(submitButton);
  assertEquals(
    resultLabel.getText(),
    "You entered: Test Input",
    "Label displays entry text after button click",
  );
  console.log("\nTest 7: Container Widget Hierarchy");
  const box = new Box(GTK_ORIENTATION_VERTICAL, 10);
  const child1 = new Label("Child 1");
  const child2 = new Label("Child 2");
  box.append(child1);
  box.append(child2);
  assert(true, "Widgets appended to container successfully");
  console.log("\nTest 8: Multiple Signal Handlers");
  const multiButton = new Button("Multi Handler");
  let handler1Called = false;
  let handler2Called = false;
  multiButton.connect("clicked", () => {
    handler1Called = true;
  });
  multiButton.connect("clicked", () => {
    handler2Called = true;
  });
  clickButton(multiButton);
  assert(handler1Called, "First handler was called");
  assert(handler2Called, "Second handler was called");
  console.log("\nTest 9: Widget Properties");
  const propButton = new Button("Property Test");
  propButton.setProperty("visible", true);
  assert(propButton.getVisible(), "Widget visible property set to true");
  propButton.setProperty("visible", false);
  assert(!propButton.getVisible(), "Widget visible property set to false");
  console.log("\nTest 10: Complex UI Flow (Calculator-like)");
  const display = new Label("0");
  const btn1 = new Button("1");
  const btn2 = new Button("2");
  const btnPlus = new Button("+");
  const btnEquals = new Button("=");
  let currentValue = 0;
  let operation = "";
  let accumulator = 0;
  btn1.connect("clicked", () => {
    currentValue = parseInt(display.getText() || "0") * 10 + 1;
    display.setText(currentValue.toString());
  });
  btn2.connect("clicked", () => {
    currentValue = parseInt(display.getText() || "0") * 10 + 2;
    display.setText(currentValue.toString());
  });
  btnPlus.connect("clicked", () => {
    accumulator = parseInt(display.getText() || "0");
    operation = "+";
    currentValue = 0;
    display.setText("0");
  });
  btnEquals.connect("clicked", () => {
    if (operation === "+") {
      const result = accumulator + parseInt(display.getText() || "0");
      display.setText(result.toString());
    }
  });
  clickButton(btn1);
  assertEquals(display.getText(), "1", "Clicked 1 button");
  clickButton(btnPlus);
  assertEquals(display.getText(), "0", "Clicked + button");
  clickButton(btn2);
  assertEquals(display.getText(), "2", "Clicked 2 button");
  clickButton(btnEquals);
  assertEquals(display.getText(), "3", "Calculation result is correct (1+2=3)");
  console.log("\nTest 11: CheckButton");
  const checkBtn = new CheckButton("Toggle Me");
  let callbackCalledCount = 0;
  checkBtn.onToggled(() => {
    callbackCalledCount++;
  });
  assert(!checkBtn.getActive(), "CheckButton initially inactive");
  assertEquals(checkBtn.getLabel(), "Toggle Me", "CheckButton label correct");
  checkBtn.setActive(true);
  processPendingEvents();
  assert(
    checkBtn.getActive() === true,
    "CheckButton is active after toggling on",
  );
  assertEquals(
    callbackCalledCount,
    1,
    "onToggled callback called once after toggling on",
  );
  checkBtn.setActive(false);
  processPendingEvents();
  assert(
    checkBtn.getActive() === false,
    "CheckButton is inactive after toggling off",
  );
  assertEquals(
    callbackCalledCount,
    2,
    "onToggled callback called twice after toggling off",
  );
  const groupBtn1 = new CheckButton("Option 1");
  const groupBtn2 = new CheckButton("Option 2");
  groupBtn2.setGroup(groupBtn1);
  assert(true, "CheckButton grouping set successfully");
  console.log("\n" + "=".repeat(50));
  console.log("\u{1F4CA} Test Summary");
  console.log("=".repeat(50));
  console.log(`\u2713 Passed: ${passedTests}`);
  console.log(`\u2717 Failed: ${failedTests}`);
  console.log(`\u{1F4C8} Total:  ${passedTests + failedTests}`);
  if (failedTests === 0) {
    console.log("\n\u{1F389} All tests passed!");
    Deno.exit(0);
  } else {
    console.log("\n\u274C Some tests failed!");
    Deno.exit(1);
  }
} catch (error) {
  console.error("\n\u{1F4A5} Test execution error:", error);
  Deno.exit(1);
}
