const cssDefaults = {
  width: '200px'
}

function Card({ title, artist, length }, css = cssDefaults) {
  return /*html*/ `
    <div style="width: ${css.width}; height: 200px" class="d-flex m-1 card row text-center">
      <h6>${title}</h6>
      <p>${artist}</p>
      <p>${length}</p>
    </div>
  `
}

export { Card }
