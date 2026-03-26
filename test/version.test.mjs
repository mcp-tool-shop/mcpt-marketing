import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf-8"));
const changelog = readFileSync(join(ROOT, "CHANGELOG.md"), "utf-8");

describe("version consistency", () => {
  it("version is valid semver", () => {
    const parts = pkg.version.split(".");
    assert.ok(parts.length >= 3, `Expected semver, got ${pkg.version}`);
    assert.ok(parts.slice(0, 3).every((p) => /^\d+$/.test(p)));
  });

  it("version is >= 1.0.0", () => {
    const major = Number(pkg.version.split(".")[0]);
    assert.ok(major >= 1, `Expected major >= 1, got ${major}`);
  });

  it("CHANGELOG contains current version", () => {
    assert.ok(changelog.includes(`[${pkg.version}]`), `CHANGELOG missing [${pkg.version}]`);
  });

  it("LICENSE exists and is MIT", () => {
    const license = readFileSync(join(ROOT, "LICENSE"), "utf-8");
    assert.ok(license.includes("MIT"));
  });

  it("marketing directory exists", () => {
    assert.ok(existsSync(join(ROOT, "marketing")));
  });
});
