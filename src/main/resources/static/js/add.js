 function createplan()  
        {  
	
			const swalWithBootstrapButtons = Swal.mixin({
		  	customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
		  		},
				buttonsStyling: false,
				allowOutsideClick:false
			});
            //var id = document.getElementById('id').value;  
            var name = document.getElementById('name').value;  
            var description = document.getElementById('description').value;  
            var validity = document.getElementById('validity').value;
            
            if((validity>=1 && validity<=365) && (/^[A-Za-z][A-Za-z0-9 -]*$/.test(name))){
            
	            if (name.length !=0 && description.length !=0 && validity.length !=0)  
	            {  
	                var xhr = new XMLHttpRequest();
				    xhr.open("POST", "http://localhost:8080/mp", false);
				    xhr.setRequestHeader("Accept", "application/json");
					xhr.setRequestHeader("Content-Type", "application/json");
					xhr.onreadystatechange = function () {
	   				if (xhr.readyState === 4) {
	      		    console.log(xhr.status);
	      			console.log(xhr.responseText);
	   				}};
	                var obj = {
		            //"id":id,
		            "name": name ,
		            "description":description ,
		            "validity": validity
		            };
					
					var myjson = JSON.stringify(obj);
					xhr.send(myjson);
					
					if(xhr.status==201)
					{
						//alert("Mobile Plan Added Successfully");
						//swal("Success!", "Mobile Plan created successfully!", "success");
						swalWithBootstrapButtons.fire('Added!','Your Plan has been created.','SUCCESS').then(ok => 
							{
							if (ok) {
								 window.location.reload();
									}
							});
					}
					else{
						//alert("Something went wrong");
						swalWithBootstrapButtons.fire('Oops!','Something went wrong.','ERROR');
					}
				}		
			}
        }
