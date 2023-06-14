const ingredient = require("../ingredient")
// @ponicode
describe("ingredient.default", () => {
    test("0", () => {
        let result = ingredient.default({ type: "TopBread" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = ingredient.default({ type: "string" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = ingredient.default({ type: "object" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = ingredient.default({ type: "array" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = ingredient.default({ type: "number" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = ingredient.default({ type: "" })
        expect(result).toMatchSnapshot()
    })
})
