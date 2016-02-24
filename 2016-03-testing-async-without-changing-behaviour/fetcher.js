/*global $*/
window.Fetcher = class Fetcher {
  constructor () {
    this.error = false
    this.result = null
  }

  fetch () {
    $.ajax('/foo').done(data => {
      this.result = data
    }).fail(() => {
      this.error = true
    })
  }
}
