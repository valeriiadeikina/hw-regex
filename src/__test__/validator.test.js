import Validator from "../index";

const valid = new Validator();

const name0 = "valid-Name";
const name1 = "valid-Name_123";
const name2 = "invalid-Name_1234";
const name3 = "invalid-Name-";
const name4 = "123invalid-Name";
const name5 = "valid~Name";


test("check userName 1", () => {
  const result0 = valid.validateUsername(name0);
  expect(result0).toBe(true);
  const result1 = valid.validateUsername(name1);
  expect(result1).toBe(false);
  const result2 = valid.validateUsername(name2);
  expect(result2).toBe(false);
  const result3 = valid.validateUsername(name3);
  expect(result3).toBe(false);
  const result4 = valid.validateUsername(name4);
  expect(result4).toBe(false);
  const result5 = valid.validateUsername(name5);
  expect(result5).toBe(false);
});
