<?php
include_once("adb.php");

	class easysave extends adb
	{

		/**
		* Creates a new constructor of the class
		*/
		function easysave(){

		}

    /**
     * debit a source easy save account
     * @param  [int] $id     [passed in user ID - use to fetch the easy save account balance]
     * @param  [int] $amount [passed in amount - all params under this function are fetched from the QR code. Perform fattening to execute easysave to easy save transaction]
     * @return [type]         [return query detail]
     */
		function easysaveAccountDeduct($id,$amount){

      $oldbalance=getBalance($id);
      $newbalance = $oldbalance - $amount;
			$strQuery = "update easysave_account set balance='$newbalance' where userid='$id' ";

      return $this->query($strQuery);
		}

/**
 * credit a detination easy save account
 * @param  [int] $id     [passed in user ID - use to fetch the easy save account balance]
 * @param  [int] $amount [passed in amount - all params under this function are fetched from the QR code. Perform fattening to execute easysave to easy save transaction]
 * @return [type]         [return query detail]
 */
    function easysaveAccountCredit($id,$amount){

      $oldbalance=getBalance($id);
      $newbalance = $oldbalance + $amount;
			$strQuery = "update easysave_account set balance='$newbalance' where userid='$id' ";

			return $this->query($strQuery);
		}

    /*
    Fetch details of the users easy save account as a while
     */
		function getAccount($id){
			$strQuery="select * from easysave_account where userid='$id'";
			return $this->query($strQuery);
		}

		/**
		* get easysave_account balance
		* @param userid utilize the users ID to find their easy save account balance
		*/
		function getBalance($userid){
			$strQuery="Select balance from easysave_account where user_id = '$userid'";
			return $this->query($strQuery);
		}


	}
?>
