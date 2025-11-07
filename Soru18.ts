// Soru 18: infer ile Fonksiyon Parametresi
// Bir fonksiyonun son parametresinin tipini çıkarır.

type LastParameter<T> = T extends (...args: [...infer _, infer L]) => any ? L : never;

// ---- TEST ----
const fn1 = (a: string, b: number, c: boolean) => {};
const fn2 = (a: Date) => {};

let p1: LastParameter<typeof fn1> = true;
let p2: LastParameter<typeof fn2> = new Date();

// @ts-expect-error - fn1’in son parametresi boolean’dır
let errorP: LastParameter<typeof fn1> = "string";

console.log("Soru 18 Başarılı!", p1);
