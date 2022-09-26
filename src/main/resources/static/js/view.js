	
	//testing for git hub
	
	function getBYID()
     {
			
			console.log("outside");
			var pname =document.getElementById('name').value;
			pname=pname.toUpperCase();
			
			var x=document.getElementById('table-head-view')
			x.innerHTML='<tr><th scope="col">PLAN ID</th><th scope="col">NAME</th><th scope="col">DESCRIPTION</th><th scope="col">VALIDITY</th><th scope="col">ACTIONS</th><th scope="col">UPDATE</th></tr>';
			
			
			if(pname.length!=0)
			{
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "http://localhost:8080/mp", false);
				xhr.send();
				var mpList = xhr.response;
				console.log(xhr.response);
				
				var mobilePlans = JSON.parse(mpList);
				var flag = 0;
				
				console.log("outside");
				
			var tbody=document.querySelector('.table > tbody')
		   
		   
			while(tbody.firstChild)
		  	{
				tbody.removeChild(tbody.firstChild);
		  	}
		
		    mobilePlans.forEach((currentElement,index,arr) =>{
		     
			console.log(currentElement);
			x=currentElement.name;
			x=x.toUpperCase();
			if(x==pname)
			{
				
			var th=document.createElement('th');	
			var tr=document.createElement('tr');
			var td1=document.createElement('td');
			td1.innerHTML=currentElement.id;
			var td2=document.createElement('td');
			td2.innerHTML=currentElement.name;
			var td3=document.createElement('td');
			td3.innerHTML=currentElement.description;
			var td4=document.createElement('td');
			td4.innerHTML=currentElement.validity;
			var td5=document.createElement('td');
			td5.innerHTML='<button type="button" class="btn btn-outline-danger" onclick=deletebyid('+currentElement.id+')><img class="image-icon" src="images/delete.png"></button></td>';
			var td6=document.createElement('td');
			td6.innerHTML="<a href='http://localhost:8080/update.html?id="
						+ currentElement.id
						+ "&name="
						+ currentElement.name
						+ "&description="
						+ currentElement.description
						+ "&validity="
						+ currentElement.validity
						+ "'><button class='btn btn-outline-danger' id = " + currentElement.id + " type='button'><img class='image-icon' src='images/edit.png'></button>"
						
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);
		    tbody.appendChild(tr);
		      flag=1;
			}
	});
		 
		if(flag == 1)
		        {
					alert("Data for this plan name fetched");
				
				}
				else
				{
					alert("Plan name not present");
				}
					
	}
			
			else
			{
				alert("Please enter Plan Name");
			}
			
			
			  			
		 }    
	
	
	
	/*
	function getBYID()
     {
			console.log("outside");
			var userid =document.getElementById('id').value;
			
			if(userid.length!=0)
			{
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "http://localhost:8080/mp/"+userid, false);
				xhr.send();

				var mpList = xhr.response;
			   // var mobilePlans = JSON.parse(mpList);
			
				//console.log(mobilePlans.id);
				//console.log(mpList.id);
				
				if(xhr.status==404)
				{
					alert(xhr.response);
				}
				else
				{
					search();
					alert("Data for ID "+userid+" is fetched");
				}
			}
			else
			{
				alert("Please Enter ID");
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
				var flag = 0;
				
				console.log("outside");
				var x=document.getElementById('table-head-view')
				x.innerHTML='<tr><th scope="col">PLAN ID</th><th scope="col">NAME</th><th scope="col">DESCRIPTION</th><th scope="col">VALIDITY</th><th scope="col">ACTIONS</th><th scope="col">UPDATE</th></tr>';
	    
				
				var tbody=document.querySelector('.table > tbody')
				console.log(mobilePlans.id);
						var tr=document.createElement('tr');
						var td1=document.createElement('td');
						td1.innerHTML=mobilePlans.id;
						var td2=document.createElement('td');
						td2.innerHTML=mobilePlans.name;
						var td3=document.createElement('td');
						td3.innerHTML=mobilePlans.description;
						var td4=document.createElement('td');
						td4.innerHTML=mobilePlans.validity;
				
				 		var td5=document.createElement('td');
			            td5.innerHTML='<button type="button" class="btn btn-outline-danger" onclick=deletebyid('+mobilePlans.id+')><img class="image-icon" src="images/delete.png"></button></td>';
			            var td6=document.createElement('td');
			            td6.innerHTML="<a href='http://localhost:8080/update.html?id="
						+ mobilePlans.id
						+ "&name="
						+ mobilePlans.name
						+ "&description="
						+ mobilePlans.description
						+ "&validity="
						+ mobilePlans.validity
						+ "'><button class='btn btn-outline-danger' id = " + mobilePlans.id + " type='button'><img class='image-icon' src='images/edit.png'></button>"
				
						tr.appendChild(td1);
						tr.appendChild(td2);
						tr.appendChild(td3);
						tr.appendChild(td4);
						tr.appendChild(td5);
			            tr.appendChild(td6);
						tbody.removeChild(tbody.childNodes[0]);
						tbody.appendChild(tr);
						//tbody.replaceChild(tr,tbody.childNodes[0]);
						flag=1;
			}
					
			*/