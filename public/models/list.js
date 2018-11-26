export default class List {
  constructor(data) {
    this.name = data.name || "Millennium Falcon"
    this.img = data.img || "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg/250px-A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg"
    this.description = data.description || "Who doesn't want this"
  }
}