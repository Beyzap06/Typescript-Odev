// Soru 17: Dağıtılmış Koşullu Tipler (Distributed Conditionals)

type FilterUnion<T, U> = T extends U ? never : T;

// ---- TEST ----
type AllStatus = 'pending' | 'active' | 'inactive' | 'deleted';
type ActiveStatus = 'active' | 'pending';

type InactiveStatus = FilterUnion<AllStatus, ActiveStatus>;

let status1: InactiveStatus = 'inactive';
let status2: InactiveStatus = 'deleted';

// @ts-expect-error - 'pending' filtrelendi
let errorStatus: InactiveStatus = 'pending';

console.log("Soru 17 Başarılı!", status1, status2);
