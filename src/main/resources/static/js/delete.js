function deletebyid(id){
	if(confirm("Are you sure want to delete ?")){
		deletebyid1(id);
	}
}
function deletebyid1(deleteid)
 {
	var d=deleteid;
	console.log("outside");
	//var userid =document.getElementById('deleteid').value;  
   
	var xhr = new XMLHttpRequest();
	xhr.open("DELETE", "http://localhost:8080/mp/"+deleteid, false);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	
	
	if(xhr.readyState === 4)
	{
		console.log(xhr.status);
		console.log(xhr.responseText);
	};
	   
	var obj = {
	   "id":d
	};
	  
	var myjson = JSON.stringify(obj);
	xhr.send(myjson);
		
	if(xhr.status==200)
	{
		alert("Mobile Plan deleted Successfully");
		location.reload();
	}
	else
	{
		alert("Mobile Plan not present to delete");	
	}	

console.log("outside")

}
		/*
			if(xhr.status==406)
			{
			     alert("Mobileplan not present to delete");
			}
			else
			{
				alert("Mobileplan deleted Successfully");
				
			}
			console.log("outside");*/
	 
	 