<SCRIPT>
function passWord() {
  var password = document.getElementById("passwordBox");
  var passwordText = password.value;
var testV = 1;
var pass1 = prompt('Please Enter the Password',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "letmein") {
alert('You have successfully entered the password.');
window.open('game.html');
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 
</SCRIPT>
<CENTER>
<FORM>
<input type="button" value="Click This to Enter Password" onClick="passWord()">
</FORM>
</CENTER>
