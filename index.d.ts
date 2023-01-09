declare module "*";

namespace JSX {
  interface IntrinsicElements {
    div: unknown;
  }
}

declare module "express" {
  type Response = { [key: string]: Function };
}
