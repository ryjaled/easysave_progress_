<?php
include_once("adb.php");

	class transactions extends adb
	{

		/**
		* Creates a new constructor of the class
		*/
		function transactions(){

		}



		/**
     * add a transaction to the database once fattened and executed in the databasecommand page
     * @param [type] $merchantid     [utilize merchantId in keeping track of the source]
     * @param [type] $userid         [utilize userId in keeping track of the destination of the transaction]
     * @param [type] $merchantamount [this is the amount that was involved from merchant to source]
     */
		function addTransaction($merchantid, $userid, $merchantamount){
			$strQuery="insert into transactions set
							customer_id='$userid',
							merchant_id='$merchantid',
							amount_sent='$merchantamount',
							status='pending',";
			return $this->query($strQuery);
		}

/**
 * This is to fetch transactions that the particular customer has had so far. e.g. manipulating this code will populate the transaction history page on the fornt screen
 * @param  [int] $id [the user ID whose transaction history you would like to fetch]
 * @return [string]     [return all the past transaction in a JSON array to be handled by the javascript]
 */
		function getTransactionsById($id){
			$strQuery="select * from transactions where customer_id='$id'";
			return $this->query($strQuery);
		}



	}
?>
