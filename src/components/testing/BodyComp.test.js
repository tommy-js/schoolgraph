import { field } from "../BodyComp";

test("Field function test", () => {
  const expected = { id: 1000 };
  expect(field(1)).toMatchObject(expected);
});
