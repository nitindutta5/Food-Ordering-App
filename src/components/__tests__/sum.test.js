import { sum } from "../sum";

test("Check sum of two postive number", ()=>{
    expect(sum(2,5)).toBe(7);
})