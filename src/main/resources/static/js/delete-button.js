 function deletebyid()
{
	console.log("outside");
	var userid =document.getElementById('deleteid').value;
	
	if(userid.length!=0)
	{
		var xhr = new XMLHttpRequest();
		xhr.open("DELETE", "http://localhost:8080/mp/"+userid, false);
		xhr.send();
		if(xhr.status!=406)
		{
			alert("Mobileplan deleted Successfully");
		}
		else
		{
			alert("Mobileplan not present to delete");
		}
		console.log("outside");	
	}
	else{
		alert("Please Enter ID");
	}
			
	 
}