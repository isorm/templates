import { After, Controller, Get, render } from "@isorm/core";
import MainService from "./main.service";
import Main from "../../pages/$$Main";

@Controller()
class MainController {
  constructor(private service: MainService) {}

  @After(render(Main))
  @Get()
  getMain() {
    return { props: {} };
  }
}

export default MainController;
