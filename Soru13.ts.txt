// Soru 13: Mapped Types ve Template Literals
// Bir nesnedeki özellikleri get<PropertyName> şeklinde metotlara dönüştürür.

type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// ---- TEST ----
type UserProps = { id: number; name: string; };
type UserGetters = CreateGetters<UserProps>;

const userGetters: UserGetters = {
  getId: () => 1,
  getName: () => "Ali"
};

// @ts-expect-error - Dönüş tipi 'string' olmalı, 'number' değil.
const errorGetter: UserGetters = {
  getId: () => 1,
  getName: () => 123
};
