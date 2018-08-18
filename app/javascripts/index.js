var qrcode = new QRCode('qrcode')

function makeCode () {
  var elText = document.getElementById('text')
  var contractAddress = document.getElementById('contractAddress')
  var locationId = document.getElementById('locationId')
  var locationName = document.getElementById('locationName')
  var secret = document.getElementById('secret')
  var passPhrase = document.getElementById('passPhrase')

  var elText = contractAddress.value + locationName.value + locationId.value + secret.value + passPhrase.value
  if (!elText) {
    alert('Input a text')
    elText.focus()
    return
  }

  qrcode.makeCode(elText)
}

makeCode()

// $('#text')
//     .on('blur', function () {
//       makeCode()
//     })
//     .on('keydown', function (e) {
//       if (e.keyCode == 13) {
//         makeCode()
//       }
//     })
