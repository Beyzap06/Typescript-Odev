// Soru 11: Koşullu Tipler (Conditional Types)
// Eğer T bir Promise ise iç tipini çıkar, değilse T'yi döndür.

type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

// ---- TEST ----
type pNum = Promise<number>;
type regularNum = number;

let val1: UnwrapPromise<pNum> = 10;
let val2: UnwrapPromise<regularNum> = 20;

// @ts-expect-error - Bu satırın HATA vermesi beklenir
let val3: UnwrapPromise<pNum> = "string";

console.log("Soru 11 Başarılı!", val1, val2);
