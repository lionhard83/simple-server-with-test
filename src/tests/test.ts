import { assert } from "chai";
import { Person, addPerson, getAvarage, people, removePerson } from "..";
const [p1, p2, p3] = [
  {
    name: "Mario",
    surname: "Merola",
    fiscalCode: "MMR",
    age: 31,
  },
  {
    name: "Gino",
    surname: "Paoli",
    fiscalCode: "MMR",
    age: 44,
  },
  {
    name: "Paolo",
    surname: "Bonolis",
    fiscalCode: "MMR",
    age: 55,
  },
  {
    name: "Paolo",
    surname: "Bonolis",
    fiscalCode: "MMR",
  },
];

describe("test add people", () => {
  after(() => {
    people.length = 0;
  });
  it("test add people", () => {
    const lengthOfPeople = people.length;
    addPerson(p1);
    assert.equal(lengthOfPeople + 1, people.length);
  });
});
describe("test remove people", () => {
  before(() => {
    people.push(p1);
  });
  it("test remove people", () => {
    const lengthOfPeople = people.length;
    removePerson(p1);
    assert.equal(lengthOfPeople - 1, people.length);
  });
});

describe("test equal person not added", () => {
  before(() => {
    people.push(p1);
  });
  after(() => {
    people.length = 0;
  });
  it("test equal person not added", () => {
    const lengthOfPeople = people.length;
    addPerson(p1);
    assert.equal(people.length, lengthOfPeople);
  });
});

describe("test with avarage", () => {
  before(() => {
    people.push(p1);
    people.push(p2);
    people.push(p3);
  });
  after(() => {
    people.length = 0;
  });
  it("test avarage with multiple users", () => {
    assert.equal(getAvarage().toFixed(2), "43.33");
  });
});
