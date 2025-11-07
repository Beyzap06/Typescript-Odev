// Soru 19: infer ile Dizi Elemanı Tipi
// Eğer T bir dizi ise eleman tipini, değilse T'nin kendisini döndürür.

type Flatten<T> = T extends (infer U)[] ? U : T;

// ---- TEST ----
type NumArray = number[];
type Str = string;

let el1: Flatten<NumArray> = 123;
let el2: Flatten<Str> = "hello";

// @ts-expect-error - NumArray’in elemanı number’dır
let errorEl: Flatten<NumArray> = "string";

console.log("Soru 19 Başarılı!", el1, el2);
