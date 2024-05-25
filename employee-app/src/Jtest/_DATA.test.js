const { _saveQuestion, _saveQuestionAnswer } = require("../commonUltis/_DATA");

describe("_saveQuestion", () => {
    it("if parameters send to _saveQuestion correct then it return true", async () => {
        const response = await _saveQuestion({
            optionOneText: "this is question one",
            optionTwoText: "this is question two",
            author: "khanhnh11"
        });

        expect(response).toBeTruthy();
    });

    it("if parameters send to _saveQuestion not correct then it return a error", async () => {
        const response = await _saveQuestion({
            optionOneText: undefined,
            optionTwoText: "this is question two",
            author: "khanhnh11"
        }).catch(e => e);

        expect(response).toBe("Please provide optionOneText, optionTwoText, and author");
    });
});

describe("_saveQuestionAnswer", () => {
    it("if parameters send to _saveQuestionAnswer correct then it return true", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "khanhnh11",
            qid: "6ni6ok3ym7mf1p33lnez",
            answer: "optionOne"
        });

        expect(response).toBeTruthy();
    });

    it("if parameters send to _saveQuestionAnswer not correct then it return a error", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "khanhnh11",
            qid: undefined,
            answer: "optionOne"
        }).catch(e => e);

        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
});