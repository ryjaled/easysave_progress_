<?php
include_once("adb.php");

	class users extends adb
	{

		/**
		* Creates a new constructor of the class
		*/
		function user(){

		}

    /**
     * login a user if the are a merchant attempting to log in
     * @param  [String] $email    [get the email field of a user attempting to login]
     * @param  [String] $password [get the password of a user attempting to login]
     * @return [String]           [return the merchant object if it was successful. User object has all details of the user.]
     */
		function loginUserMerchant($email,$password){
			$strQuery = "Select * from user where email = '$email' and password = '$password' and type = 'merchant'";

			$data = $this->query($strQuery);
			$result=$this->fetch();
			if($result=="")
			{
			$result=false;
			}

			return $result;
		}

    /**
     * login a user if the are a customer attempting to log in
     * @param  [String] $email    [get the email field of a user attempting to login]
     * @param  [String] $password [get the password of a user attempting to login]
     * @return [String]           [return the customer object if it was successful. User object has all details of the user.]
     */
    function loginUserCustomer($email,$password){
			$strQuery = "Select * from user where email = '$email' and password = '$password' and type = 'customer'";

			$data = $this->query($strQuery);
			$result=$this->fetch();
			if($result=="")
			{
			$result=false;
			}

			return $result;
		}

		/**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function addNewUser($firstname,$lastname,$email,$password,$region,$level){
			$strQuery="insert into user set
							firstname='$firstname',
							lastname='$lastname',
							email='$email',
							password='$password',
							region='$region',
							level='$level' ";
			return $this->query($strQuery);
		}

		function deleteUser($userid){
			$strQuery="update user set status='inactive' where userid='$userid' ";
			return $this->query($strQuery);
		}

		function reactivateUser($userid){
			$strQuery="update user set status='active' where userid='$userid' ";
			return $this->query($strQuery);
		}

		function getUser($id){
			$strQuery="select * from user where userid='$id'";
			return $this->query($strQuery);
		}

		/**
		* get user id
		* @param user's name
		* @return user's Id
		*/
		function getID($userName){
			$strQuery="Select ID from user where username = '$userName'";
			return $this->query($strQuery);
		}


	}
?>
