type User = { id: number; name: string; email: string };

const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

// 1. Overload imzaları:
function search(param: number): User | undefined;
function search(param: string): User[];

// 2. Implementasyon:
function search(param: number | string): User | User[] | undefined {
  if (typeof param === "number") {
    return users.find(user => user.id === param);
  } else {
    return users.filter(user => user.name === param);
  }
}

console.log(search(1));
console.log(search("Ayşe"));

// BEKLENEN ÇIKTI:
// { id: 1, name: 'Ali', email: 'ali@mail.com' }
// [ { id: 2, name: 'Ayşe', email: 'ayse@mail.com' } ]
