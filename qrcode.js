
/**
 * This is the function that generated the QR code on the merchant side. The ID and name of the merchant is fetched
 * from the session Storage on the device and used to generate a QR code that is intended to be scanned by a user's home page
 * camera button.
 * @return {[type]} [description]
 */
function generate_qrcode(){
  var _amount = $('#amount').val();
  var _merchantID = sessionStorage.loggedID;
  var _merchantName = sessionStorage.loggedName;

  alert(_amount);
  alert(_merchantID);
  alert(_merchantName);

  $.ajax({
    type: 'post',
    url: 'qrcode.php',
    data: {merchantID: _merchantID, merchantName: _merchantName, passedValue: _amount},
    success: function(code){
      $('#result').html(code);
    }
  })
}
