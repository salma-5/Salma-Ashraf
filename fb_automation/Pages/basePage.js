import { Selector, t } from "testcafe";

export default class basePage {
    constructor() {}

    async type(selector, text) {
        await t.typeText(selector, text, {
            paste: true,
            replace: true,
            visibilityCheck: true,
            timeout: 3000
        });
    }

    async typeWithoutReplace(selector, text) {
        await t.typeText(selector, text, {
            paste: true,
            replace: false,
            visibilityCheck: true,
            timeout: 3000
        });
    }

    async click(selector) {
        await t.click(selector, {
            timeout: 5000
        });
    }

}
