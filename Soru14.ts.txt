// Soru 14: Rekürsif Tipler (Recursive Types)
// DeepReadonly<T> iç içe tüm nesneleri readonly yapar.

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// ---- TEST ----
type Config = { api: { url: string; }, features: string[] };
const config: DeepReadonly<Config> = {
  api: { url: "http://..." },
  features: ["A", "B"]
};

// @ts-expect-error - Değiştirilemez
config.api.url = "yeni-url";

// @ts-expect-error - Diziye ekleme yapılamaz
config.features.push("C");

console.log("Soru 14 Başarılı!", config.api.url);
