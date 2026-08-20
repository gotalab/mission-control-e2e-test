import assert from "node:assert/strict";
import test from "node:test";

import { missionMessage, missionProbeMessage } from "../src/message.js";

test("reports the deterministic baseline message", () => {
  assert.equal(missionMessage(), "mission-control-ready");
});

test("reports the cursor cloud probe message", () => {
  assert.equal(missionProbeMessage(), "cursor-cloud-probe-passed");
});
