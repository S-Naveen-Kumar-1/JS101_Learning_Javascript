var stored_username = "iron man";
var stored_password = 3000;
var input_username = "hulk";
var input_password = 3000;

if(stored_username===input_username){
  if(stored_password===input_password){
    console.log("login sucess")
  }
  else{
    console.log("invalid password");
  }
}
else{
  console.log("invalid username")
}