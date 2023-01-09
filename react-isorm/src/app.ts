import { Isorm, statics } from "@isorm/core";
import MainController from "./components/main/main.controller";

Isorm({
  controllers: [MainController],
  packages: [statics("static", "build")],
});
