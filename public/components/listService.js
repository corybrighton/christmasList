// @ts-ignore
let _listAPI = axios.create({
  baseURL: 'api/list'
})

function handleError(err) {
  throw new Error(err)
}
export default class ListService {
  createList(draw) {
    _listAPI.post('/')
  }
  getList(draw) {
    _listAPI.get('/')
      .then(res => draw(res.data))
  }
  updateList(id, draw) {
    _listAPI.put('/' + id)
      .then(res => draw(res.data))
  }
  deleteList(id, draw) {
    _listAPI.delete('/' + id)
      .then(res => draw(res.data))
  }
}