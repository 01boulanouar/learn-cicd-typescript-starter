
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";
import { beforeAll, describe, expect, test } from "vitest";


describe("Api Test", () => {
    test("Empty Headers", () => {
        const result = getAPIKey({});
        expect(result).toBeNull();
    });
    test("inValid Authorization Apikey", () => {
       const headers: IncomingHttpHeaders = {
        authorization: "ApiKey",
        }
        const result = getAPIKey(headers);
        expect(result).toBeNull();
    })
    test("Valid Apikey", () => {
        const headers: IncomingHttpHeaders = {
            authorization: "ApiKey valid_api_key",
            };
        const result = getAPIKey(headers);  
        expect(result).toEqual("valid_sapi_key");
    })
});