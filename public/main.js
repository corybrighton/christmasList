import ListController from "./components/listController.js";

class App {
  constructor() {

    this.ctrl = {
      listCtrl: new ListController()
    }
  }
}

// @ts-ignore
window.app = new App()