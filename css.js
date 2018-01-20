sessionStorage.logoutCount= 0;
sessionStorage.currentPage=".dashboard";
//CSS Animations
//Index Page
$(".ti-power-off").click(function(){
    var options = {
        settings: {
            duration: 1000
        }
    };
    if(sessionStorage.logoutCount== 1){
        iqwerty.toast.Toast('Loggin Out...');
        sessionStorage.clear();
        setTimeout(function() {
            window.location="index.html";
        }, 3000);
    }
    if(sessionStorage.logoutCount== 0){
        sessionStorage.logoutCount= 1;
        iqwerty.toast.Toast('Press Again to Logout',options);
    }
    setTimeout(function() {
        sessionStorage.logoutCount= 0;
    }, 10000);
});

$(".login-pop").click(function(){
    $(".login-panel").slideToggle();
    $(".login-pop").hide();
    $(".fa").removeClass("fa-chevron-up");
    $(".fa").addClass("fa-chevron-down");
});

$(".panel-hide").click(function(){
    $(".login-panel").slideToggle();
    $(".login-pop").fadeIn();
    $(".fa").removeClass("fa-chevron-down");
    $(".fa").addClass("fa-chevron-up");
});

$(".signpanel-btn").click(function(){
    $(".signup-panel").slideToggle();
    $(".login-panel").slideToggle();
    $(".user-type-panel").fadeIn(800);
    $(".user-type-panel").css("display","inline-block");
    $(".sign-fa").removeClass("fa-chevron-up");
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-chevron-down");
});

$(".signup-panel-hide").click(function(){
    $(".user-type-panel").fadeOut(300);
    $(".signup-panel").slideToggle();
    $(".login-panel").slideToggle();
    $(".signup-form").fadeOut(100);
    $(".verification-form").hide();
    $(".signup-form").hide();
    $(".sign-fa").removeClass("fa-chevron-up");
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-chevron-down");
    $(".input").val("");
});

$(".type-merchant").click(function(){
    $(".user-type-panel").hide();
    $(".signup-form").fadeIn(600);
    $(".signup-form").css("display","inline-block");
    $(".sign-fa").removeClass("fa-chevron-down");
    $(".sign-fa").addClass("fa-chevron-left");
});

$(".type-customer").click(function(){
    $(".user-type-panel").hide();
    $(".signup-form").fadeIn(600);
    $(".signup-form").css("display","inline-block");
    $(".sign-fa").removeClass("fa-chevron-down");
    $(".sign-fa").addClass("fa-chevron-left");
});

$(".back").click(function(){
    $(".signup-form").fadeIn(600);
    $(".verification-form").hide();
    $(".sign-fa").addClass("fa-chevron-left");
    $(".sign-fa").removeClass("fa-close");
});

$(".code-back").click(function(){
    $(".verification-form").fadeIn(600);
    $(".code-form").hide();
});

$(".confirm").click(function(){
    $(".code-form").fadeIn(600);
    $(".verification-form").hide();
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-close");
});

$(".confirm-code ").click(function(){
    iqwerty.toast.Toast('Signing In...');
    setTimeout(function() {
        window.location="dashboard.html";
    }, 3000);
});

$(".signup-btn").click(function(){
    $(".signup-form").hide();
    $(".verification-form").fadeIn(600);
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-close");
});

// $(".login-btn").click(function(){
//     iqwerty.toast.Toast('Loggin In...');
//     console.log($('.homeUsername').val());
//     // setTimeout(function() {
//     //     window.location="Pages/dashboard.html";
//     // }, 3000);
// });

/* to display any information just put this snippet wherever you want some displaying to be done*/

//iqwerty.toast.Toast('Your message here');


//Dashboard Page
$(".info-down").click(function(){
    $(".cover").fadeIn();
    $(".modal-div").fadeIn();
    $(".modal").fadeIn(600);
});

$(".ti-share").click(function(){
    $(".info-modal-info").html("AUTOMATIC CASHOUT");
    $(".info-modal-content").html('<span class="modal-info">We can automate cash outs to your primary account.'
                                  +'Please let us know at what available balance this should occur</span>'
                                  +'<input type="number" placeholder="GHS">'
                                  +'<div class="cashout-btn btn" >Cashout</div>');
    $(".info-cover").fadeIn();
    $(".info-modal-div").fadeIn();
    $(".info-modal").fadeIn(600);
});

$(".modal-close").click(function(){
    $(".modal").fadeOut();
    $(".cover").fadeOut();
    $(".modal-div").fadeOut();
});

$(".ti-home").click(function(){
    $( ".cashout" ).hide();
    if( $( ".dashboard" ).css("display")=="none"){
        $( ".dashboard" ).fadeIn(600);
    }
    $(".ti-wallet").removeClass("active");
    $(".ti-home").addClass("active");
    sessionStorage.currentPage=".dashboard";
});

$(".ti-settings").click(function(){
    $( ".dashboard" ).hide();
    if( $( ".settings" ).css("display")=="none"){
        $(sessionStorage.currentPage).hide();
        $( ".settings" ).fadeIn(600);
    }
});

$(".ti-wallet").click(function(){
    $( ".dashboard" ).hide();
    if( $( ".cashout" ).css("display")=="none"){
        $( ".cashout" ).fadeIn(600);
    }
    $(".ti-home").removeClass("active");
    $(".ti-wallet").addClass("active");
    sessionStorage.currentPage=".cashout";
});

$(".ti-close").click(function(){
    $(".info-cover").fadeOut();
    $(".info-modal-div").fadeOut();
    $(".info-modal").fadeOut();
});

$(".ti-arrow-left").click(function(){
    $( ".settings" ).hide();
    if( $( sessionStorage.currentPage).css("display")=="none"){
        $( sessionStorage.currentPage ).fadeIn(600);
    }
});

$(".ti-plus").click(function(){
    $(".info-modal-info").html("ADD ACCOUNT");
    $(".info-modal-content").html('<span class="modal-info">Add a new account to your current ones.'
                                  +'This account is however not your primary account</span>'
                                  +'<input type="text" placeholder="Account Name">'
                                  +'<input type="number" placeholder="Account Number">'
                                  +'<select> <option value="MTN Mobile Money">MTN MM</option>'
                                  + '<option value="Vodafone Cash">Vodafone Cash</option>'
                                  + '<option value="Tigo Cash">Tigo Cash</option>'
                                  + '<option value="Airtel Money">Airtel Money</option>'
                                  +'</select>'
                                  +'<div class="cashout-btn btn" >Login</div>');
    $(".info-cover").fadeIn();
    $(".info-modal-div").fadeIn();
    $(".info-modal").fadeIn(600);
});



/**
 * This is the function that pops up a barcode reader when the client/customer logs into their dashboard. Here, once they point their
 * camera at the QR code, the train of logic is to execute the transaction.
 * @return {[type]} [description]
 */

(function() {

//barcode scanner

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	function onDeviceReady() {


		document.getElementById("barcodeScanner").onclick = function(){
			alert("here");
			cordova.plugins.barcodeScanner.scan(
		 function (result) {

       //split items separated by : once the QR code is caught.
       var fundsFrom = result.text.split(":");

       //The php script here adds the transaction to records and executes a function explode which does the deductions to the easysave_accounts
       var theUrl="databasecommand.php?cmd=4&merchantid="+fundsFrom[0]+"&merchantname="+fundsFrom[0]+"&merchantamount="+fundsFrom[3]+"&userid="+sessionStorage.loggedID+"&username="+sessionStorage.loggedName;
       $.ajax(theUrl,
             {
               async:true
             });


				 alert("We got a barcode\n" +
							 "Result: " + result.text + "\n" +
							 "Format: " + result.format + "\n" +
							 "Cancelled: " + result.cancelled);
		 },
		 function (error) {
				 alert("Scanning failed: " + error);
		 },
		 {
				 "preferFrontCamera" : true, // iOS and Android
				 "showFlipCameraButton" : true, // iOS and Android
				 "prompt" : "Place a barcode inside the scan area", // supported on Android only
				 "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				 "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
		 }
	);



	}
	} ;

	})();



  /**
   * This function is called when a user logs in as a merchant.
   * We pull the data from the textfield and pass it through a phpURL
   * to execute on the backend. The reason for this is that we intended to use cordova/phonegap.
   * As such AJAX is required otherwise phonegap/cordova doesnt work as smoothly.
   * @return {[type]} [description]
   */
function loginMerchant(){
  var username = $('#homeUsername').val();
  var password = $('#homePassword').val();
  console.log(username);
  console.log(password);

  var theUrl="databasecommand.php?cmd=1&email="+username+"&password="+password;
  $.ajax(theUrl,
        {
          async:true,
          complete:loginMerchantComplete
        });
}



function loginMerchantComplete(xhr, status){

var obj = JSON.parse(xhr.responseText);
console.log(obj);

sessionStorage.loggedID = obj.user_id;
sessionStorage.loggedName = obj.firstname+" "+obj.lastname;

  iqwerty.toast.Toast('Loggin In...');
    setTimeout(function() {
      window.location="dashboard.html";
    }, 3000);

}

/**
 * This function is called when a user logs in as a customer.
 * We pull the data from the textfield and pass it through a phpURL
 * to execute on the backend. The reason for this is that we intended to use cordova/phonegap.
 * As such AJAX is required otherwise phonegap/cordova doesnt work as smoothly.
 * @return {[type]} [description]
 */
function loginCustomer(){
  var username = $('#homeUsername').val();
  var password = $('#homePassword').val();
  console.log(username);
  console.log(password);

  var theUrl="databasecommand.php?cmd=2&email="+username+"&password="+password;
  $.ajax(theUrl,
        {
          async:true,
          complete:loginCustomerComplete
        });
}

/**
 * This is the function that calls onComplete of a CustomerLogin, once it is successful. The app proceeds to log in to the client side of the dashboard
 */
function loginCustomerComplete(xhr, status){

var obj = JSON.parse(xhr.responseText);
console.log(obj);

  iqwerty.toast.Toast('Loggin In...');
    setTimeout(function() {
      window.location="client-dashboard.html";
    }, 3000);

}


/**
 * placeholder function to point to let you know that the actual function exists under the jQuery function
 * @return {[null]} [null]
 */
function barcode(){
  alert("Refer to barcode scanner eventListener under jQuery functions.");
}


// $(".login-btn").click(function(){
//     iqwerty.toast.Toast('Loggin In...');
//     console.log($('.homeUsername').val());
//     // setTimeout(function() {
//     //     window.location="Pages/dashboard.html";
//     // }, 3000);
// });
