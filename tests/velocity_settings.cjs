"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const bootstrap = read("patches/src/main/resources/venus/bootstrap.js");
const kotlin = read("patches/src/main/kotlin/app/venus/patches/DiscordPatches.kt");
const patches = JSON.parse(read("patches-list.json"));
const readme = read("README.md");

assert.equal(patches.version, "1.26.0");
assert.equal(patches.patches.length, 80, "Safe Mode should be the 80th install-time patch");
assert.ok(patches.patches.some((patch) => patch.name === "Safe Mode"));
assert.match(kotlin, /bundledPlugin\("safeMode", "Safe Mode"/);
assert.match(kotlin, /"fakeDeafen", "safeMode"\)/);
assert.match(bootstrap, /safeModeSnapshot/);
assert.match(bootstrap, /restore\.forEach\(feature => setSetting\(feature, false\)\)/);
assert.match(bootstrap, /restore\.forEach\(feature => setSetting\(feature, true\)\)/);
assert.match(bootstrap, /data\.app === "Conduit Patches"/);

for (const key of [
  "customRPCShowDetails",
  "customRPCShowState",
  "customRPCShowLarge",
  "customRPCShowSmall",
  "customRPCShowLargeText",
  "customRPCShowSmallText",
]) {
  assert.ok(bootstrap.includes(key), `Rich Presence should expose ${key}`);
}

assert.match(readme, /^# Velocity Patches Discord/m);
assert.match(readme, /Discord Settings → Velocity Patches Discord → Features/);
assert.doesNotMatch(readme, /Conduit/);
console.log("Velocity Patches Discord settings and patch metadata checks passed.");
