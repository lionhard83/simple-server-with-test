console.log("Hello world");

export type Person = {
  name: string;
  surname: string;
  fiscalCode: string;
};

export let people: Person[] = [];

export const addPerson = (person: Person) => {
  const exists = people.some((p) => p.fiscalCode === person.fiscalCode);
  !exists && people.push(person);
};

export const removePerson = (person: Person) => {
  people = people.filter((p) => person.fiscalCode !== p.fiscalCode);
};

addPerson({ name: "Carlo", surname: "Leonardi", fiscalCode: "uiqwbfdw" });
