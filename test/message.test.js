import assert from "node:assert/strict";
import test from "node:test";

import { missionMessage } from "../src/message.js";

test("reports the deterministic baseline message", () => {
  assert.equal(missionMessage(), "mission-control-ready");
});
