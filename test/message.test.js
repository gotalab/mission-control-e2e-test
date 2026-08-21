import assert from "node:assert/strict";
import test from "node:test";

import { missionMessage, missionPrReadyMessage } from "../src/message.js";

test("reports the deterministic baseline message", () => {
  assert.equal(missionMessage(), "mission-control-ready");
});

test("reports the cursor cloud pull request ready message", () => {
  assert.equal(missionPrReadyMessage(), "cursor-cloud-pr-ready");
});
