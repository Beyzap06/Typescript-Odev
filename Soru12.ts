// Soru 12: infer ile Fonksiyon Dönüş Tipi
// Bir fonksiyonun dönüş tipini çıkaran tip.

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// ---- TEST ----
const fn1 = () => "hello";
const fn2 = (a: number) => a * 2;

let ret1: GetReturnType<typeof fn1> = "world";
let ret2: GetReturnType<typeof fn2> = 100;

// @ts-expect-error - Bu satırın HATA vermesi beklenir
let error1: GetReturnType<typeof fn1> = 123;

console.log("Soru 12 Başarılı!", ret1, ret2);
