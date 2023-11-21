import { assert } from "chai";
import { Person, addPerson, people, removePerson } from "..";

describe("test add people", () => {
  const person: Person = {
    name: "Mario",
    surname: "Merola",
    fiscalCode: "MMR",
  };
  after(() => {
    people.length = 0;
  });
  it("test add people", () => {
    const lengthOfPeople = people.length;
    addPerson(person);
    assert.equal(lengthOfPeople + 1, people.length);
  });
});
describe("test remove people", () => {
  const person: Person = {
    name: "Mario",
    surname: "Merola",
    fiscalCode: "MMR",
  };
  before(() => {
    people.push(person);
  });
  it("test remove people", () => {
    const lengthOfPeople = people.length;
    removePerson(person);
    assert.equal(lengthOfPeople - 1, people.length);
  });
});

describe("test equal person not added", () => {
  const person: Person = {
    name: "Mario",
    surname: "Merola",
    fiscalCode: "MMR",
  };
  before(() => {
    people.push(person);
  });
  it("test equal person not added", () => {
    const lengthOfPeople = people.length;
    addPerson(person);
    assert.equal(people.length, lengthOfPeople);
  });
});
