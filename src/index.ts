console.log("Hello world");

export type Person = {
  name: string;
  surname: string;
  fiscalCode: string;
  age?: number;
  address?: {
    street: string;
    civic: string;
    x: number;
  };
  phone?: {
    model: string;
    brand: string;
    x: number;
  };
};

export let people: Person[] = [];

export const addPerson = (person: Person) => {
  const exists = people.some(
    ({ fiscalCode }) => fiscalCode === person.fiscalCode
  );
  !exists && people.push(person);
};

export const removePerson = ({ fiscalCode }: Person) => {
  people = people.filter(({ fiscalCode: f1 }) => fiscalCode !== f1);
};

export const getAvarage = () =>
  people
    .filter(({ age }) => age !== undefined)
    .reduce((acc, { age }, _, { length }) => acc + (age || 0) / length, 0);
