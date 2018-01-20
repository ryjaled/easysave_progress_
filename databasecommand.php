<?php

error_reporting(E_ALL);
ini_set('display_errors', 'on');

	//check command
	if(!isset($_REQUEST['cmd'])){
		echo "cmd is not provided";
		exit();
	}
	/*get command*/
	//A method is called based on the command
	$cmd=$_REQUEST['cmd'];
	switch($cmd){
		case 1:
			loginMerchant();
			break;
    case 2:
  		loginCustomer();
  		break;
    case 4:
    	prepareTransaction();
    	break;
		default:
			echo "wrong cmd";	//change to json message
			break;
	}


/**
 * This is the database command handler function to point to logging in a merchant account
 * @return [String] [reproduces the obj provided by the database query to be presented on utilized in the javascript]
 */
  function loginMerchant()
    {

       include("users.php");
       $user = new users();

       if($_REQUEST['email']=="")
       {
         echo '{"result": 0, "message": "No user email. Failed to log in."}';
         exit();
       }

       $email = $_REQUEST['email'];
       $password = $_REQUEST['password'];
       $validation = $user->loginUserMerchant($email,$password);
       // echo $validation;
 			if($validation==false){

 			   echo '{"result":0,"message":"Validation failed"}';

 			}
 			else{
        echo json_encode($validation);
 			}

 	}

  /**
   * This is the database command handler function to point to logging in a customer account
   * @return [String] [reproduces the obj provided by the database query to be presented on utilized in the javascript]
   */
  function loginCustomer()
    {

       include("users.php");
       $user = new users();

       if($_REQUEST['email']=="")
       {
         echo '{"result": 0, "message": "No user email. Failed to log in."}';
         exit();
       }

       $email = $_REQUEST['email'];
       $password = $_REQUEST['password'];
       $validation = $user->loginUserCustomer($email,$password);
       // echo $validation;
 			if($validation==false){

 			   echo '{"result":0,"message":"Validation failed"}';

 			}
 			else{
        echo json_encode($validation);
 			}

 	}


/**
 * This function prepares a transaction local to easysave_account to easysave_account. First steps are to receive the details between the two endpoints
 * That is, the userId and the merchantID. Next is to explode the transaction through explodeTransaction.
 * This function actually sends the funds.
 * The function continues on to add the transaction to the database for records.
 * [PLACE MOBILE MONEY ON BANK ACCOUNT OVERLAY HERE IF REQUIRED BUT RECOMMEND SEPARATE FUNCTION AS ITS A CASH IN/ CASHOUT]
 * @return [type] [description]
 */
  function prepareTransaction()
  {

    $merchantid = $_REQUEST['merchantid'];
    $merchantname = $_REQUEST['merchantname'];
    $merchantamount = $_REQUEST['merchantamount'];
    $userid = $_REQUEST['userid'];

    include("transactions.php");
    $transaction = new transactions();

    explodeTransaction($merchantid, $userid, $merchantamount);

    $validation = $transaction->addTransaction($merchantid, $userid, $merchantamount);

    if($validation==false){

       echo '{"result":0,"message":"Transaction failed"}';

    }
    else{
        echo '{"result":0,"message":"Transaction Created Successfully"}';
    }



  }


/**
 * This function to meant to credit and debit from 2 easysave_accounts.
 * @param  [int] $merchantid     [gets the id from the merchant who generated the QR code and enters the amount]
 * @param  [int] $userid         [gets the id from the user who  points the QR code reader at the merchants generated code]
 * @param  [int] $merchantamount [gets the amount form the QR code]
 * @return [type]                 [null]
 */
  function explodeTransaction($merchantid, $userid, $merchantamount)
  {

     include("easysave.php");
     $easysave = new easysave();

    //update merchant balance to deduct the amount from QR code
    $merchantDeduct = $easysave->easysaveAccountDeduct($merchantid,$merchantamount);


    //update user balance to credit the amount from QR code
    $customerCredit = $easysave->easysaveAccountCredit($userid,$merchantamount);

  }


?>
