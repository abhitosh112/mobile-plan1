		function setValue()
		{
			var url_string = window.location;
			var url = new URL(url_string);
			var tvid = url.searchParams.get("id");
			var name = url.searchParams.get("name");
			var validity = url.searchParams.get("validity");
			var description = url.searchParams.get("description");
			document.getElementById('id').value = tvid;
			document.getElementById('name').value = name;
			document.getElementById('description').value = description;
			document.getElementById('validity').value = validity;
		}
		
		function UpdateRecord()
        {  
            var id = document.getElementById('id').value;  
            var name = document.getElementById('name').value;  
            var description = document.getElementById('description').value;  
            var validity = document.getElementById('validity').value; 
            
            
            if((validity>=1 && validity<=365) && (/^[A-Za-z][A-Za-z0-9 -]*$/.test(name))){
	
	            if (id.length != 0 && name.length !=0 && description.length !=0 && validity.length !=0)  
	            {  
	               
	                
	                var xhr = new XMLHttpRequest();
				    xhr.open("PATCH", "http://localhost:8080/mp", false);
				    xhr.setRequestHeader("Accept", "application/json");
					xhr.setRequestHeader("Content-Type", "application/json");
					xhr.onload = function () {
	   				
	   				
	   				if (xhr.readyState === 4 ) {
	      		    console.log(xhr.status);
	      			console.log(xhr.responseText);
	   				
	   			    }
	   				};
	                
	   				var obj = {"id": id ,"name": name ,"description":description ,"validity": validity};
					var myjson = JSON.stringify(obj);
					xhr.send(myjson);
					if(xhr.status==404)
	               	{
		            	alert("Mobileplan id not present to update");
	                }
	                else
					{
						alert("Mobileplan updated Successfully");
						location.replace("view all.html");
					}  
	            }
	         }   
        }
        //------------------------------------------------------------------------------------------------->
        
        
        function getBYID()
     	{
			console.log("outside");
			var userid =document.getElementById('id').value;
			
			if(userid.length==0)
			{
				document.getElementById('id').value = '';
				document.getElementById('name').value ='';
				document.getElementById('description').value = '';
				document.getElementById('validity').value = '';
			}
			
			if(userid.length!=0)
			{
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "http://localhost:8080/mp/"+userid, false);
				xhr.send();

				var mpList = xhr.response;
				
				if(xhr.status==404 || userid.length==0)
				{
					searchClear();
					document.getElementById("divPlanName").style.display = "none";
					document.getElementById("divPlanDesc").style.display = "none";
					document.getElementById("divPlanVal").style.display = "none";
					//alert(xhr.response);
				}
				else
				{
					search();
					document.getElementById("divPlanName").style.display = "block";
					document.getElementById("divPlanDesc").style.display = "block";
					document.getElementById("divPlanVal").style.display = "block";
					//alert("Data for ID "+userid+" is fetched");
				}
			}
			else
			{
				//alert("Please Enter ID");
			}
		}
				
			function search()
			{
				//var mobilePlans = JSON.parse(mpList);
				var userid =document.getElementById('id').value;
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "http://localhost:8080/mp/"+userid, false);
				xhr.send();

				var mpList = xhr.response;
				var mobilePlans = JSON.parse(mpList);
				
				document.getElementById('id').value = mobilePlans.id;
				document.getElementById('name').value = mobilePlans.name;
				document.getElementById('description').value = mobilePlans.description;
				document.getElementById('validity').value = mobilePlans.validity;
			}
			
			function searchClear()
			{
				//alert("ID not present");
				//document.getElementById('id').value = '';
				document.getElementById('name').value ='';
				document.getElementById('description').value = '';
				document.getElementById('validity').value = '';
			} 


