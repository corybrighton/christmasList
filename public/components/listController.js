import ListService from "./listService.js";

let _ls = new ListService()

function draw(data) {
  console.log(data)
}

export default class ListController {
  constructor() {
    _ls.getList(draw)
  }
  addItem(event) {

  }
}

