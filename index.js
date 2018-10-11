class Message {
  constructor(options) {
    this.handleOptions(options)
  }

  handleOptions(options) {
    if (typeof options === 'string') {
      this.message = options
    } else {
      this.message = options.message
      this.duration = options.duration || 3000
      this.showClose = false || options.showClose
      this.customClass = options.customClass
    }
  }

  createMessage() {
    let template = `
      <div>
        <p>${this.message}</p>
      </div>
    `

    let div = document.createElement('div')

    div.innerHTML = template
    this.el = div.firstElementChild
    document.body.appendChild(this.el)
    return this.el
  }

  showMessage() {

  }

  hideMessage() {

  }

  destroyMessage() {

  }
}