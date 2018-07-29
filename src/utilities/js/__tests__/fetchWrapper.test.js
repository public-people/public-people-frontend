/* eslint-disable import/no-extraneous-dependencies */
/* Used in Jest test and not on client facing JavaScript */
import nock from "nock";
import fetch from "node-fetch";
/* eslint-enable */
import fetchWrapper from "./../fetchWrapper";

window.fetch = fetch;

const response = {
  id: "test",
  number: 123,
  toggle: true
};

nock("http://test.dev")
  .get("/api/")
  .reply(200, response);

const request = fetchWrapper("http://test.dev/api/");

test("Successfully returns response", () =>
  expect(request).resolves.toEqual(response));
