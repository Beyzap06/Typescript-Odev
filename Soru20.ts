type ParseRouteParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ParseRouteParams<`/${Rest}`>]: string }
    : T extends `${string}:${infer Param}`
      ? { [K in Param]: string }
      : {};

type Route1 = "/users/:id";
type Route2 = "/posts/:postId/comments/:commentId";

type Params1 = ParseRouteParams<Route1>;
type Params2 = ParseRouteParams<Route2>;

const p1: Params1 = { id: "123" };
const p2: Params2 = { postId: "abc", commentId: "xyz" };

// @ts-expect-error - 'userId' HATA VERMELİ
const errorP1: Params1 = { userId: "123" };

// @ts-expect-error - 'commentId' eksik, HATA VERMELİ
const errorP2: Params2 = { postId: "abc" };

console.log("Soru 20 Başarılı!", p1.id, p2.postId);
