let url = "https://corona.lmao.ninja/v3/covid-19/countries/Spain,Italy,Germany,Poland,Finland"
let warningCases = 20000

function timeFormatter(value, row) {
  let d = new Date(value)
  return d.toLocaleDateString()
}
function cellStyle(value, row, index) {

  if (value < warningCases) {
    return {
      classes: 'bg-success'
    }
  }
  return {
    classes: 'bg-warning'
  }
}

function addCountry(e) {
  console.log("entro")
  var $table = $('#tabla')
  e.preventDefault()
  url += ',' + document.querySelector('#next-country').value
  $table.bootstrapTable('refresh', {
    url: url
  })
}