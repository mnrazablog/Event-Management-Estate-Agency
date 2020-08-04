	document.getElementById('submitForm').addEventListener('click', function(e){
 	  		e.preventDefault();
 	  		var username = document.getElementById('username').value;
 	  		var emailid = document.getElementById('emailid').value;
 	  		var subject = document.getElementById('subject').value;
 	  		// alert(subject);
 	  		if (username=="") {
 	  			document.getElementById('usernameError').style.display="block";
 	  			document.getElementById('username').style.border="2px solid red";
 	  		}else if(emailid==""){
 	  			document.getElementById('username').style.border="2px solid green";
 	  			document.getElementById('emailid').style.border="2px solid red";
 	  			document.getElementById('usernameError').style.display="none";
 	  			document.getElementById('emailidError').style.display="block";
 	  		}else if(subject==""){
 	  			document.getElementById('username').style.border="2px solid green";
 	  			document.getElementById('emailid').style.border="2px solid green";
 	  			document.getElementById('subject').style.border="2px solid red";
 	  			document.getElementById('usernameError').style.display="none";
 	  			document.getElementById('emailidError').style.display="none";
 	  			document.getElementById('subjectError').style.display="block";
 	  		}
 	  		else{
 	  			document.getElementById('username').style.border="2px solid green";
 	  			document.getElementById('emailid').style.border="2px solid green";
 	  			document.getElementById('subject').style.border="2px solid green";
 	  			document.getElementById('subject').style.border="2px solid green";
 	  			document.getElementById('form_action_submit').submit();
 	  		}
 	  	});
