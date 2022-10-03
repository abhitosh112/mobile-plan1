function deletebyid(id){
	
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
 // text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
	deletebyid1(id);
    swalWithBootstrapButtons.fire(
     // 'Deleted!',
      'Your Plan has been deleted.',
      'SUCCESS'
    ).then(ok => {
                      if (ok) {
                           window.location.href = "view all.html";
                              }
                          });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
     // 'Your imaginary file is safe :)',
      //'error'
    )
  }
})
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
		
/*
	if(xhr.status==200)
	{
		  Swal.fire(
      //'Deleted!',
      'Your Plan has been deleted.',
      'success'
    ).then(ok => {
                      if (ok) {
                           window.location.href = "view all.html";
                              }
                          });
		//swal.fire("Mobile Plan deleted Successfully");
		//location.reload();
	}
	else
	{
		swal.fire("Mobile Plan not present to delete");	
	}	
*/
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
	 
	 