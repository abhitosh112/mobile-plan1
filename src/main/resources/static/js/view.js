	function getBYID()
     {
			console.log("outside");
			var userid =document.getElementById('id').value;
			
			if(userid.length!=0)
			{
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "http://localhost:8080/mp", false);
				xhr.send();
				var mpList = xhr.response;
				var mobilePlans = JSON.parse(mpList);
				var flag = 0;
				
				console.log("outside");
				
				var tbody=document.querySelector('.table > tbody')
		     
		     
				for (var i = 0; i < mobilePlans.length; i++)
				{
					if(mobilePlans[i].id==userid)
					{
						console.log(mobilePlans[i].id);
						var tr=document.createElement('tr');
						var td1=document.createElement('td');
						td1.innerHTML=mobilePlans[i].id;
						var td2=document.createElement('td');
						td2.innerHTML=mobilePlans[i].name;
						var td3=document.createElement('td');
						td3.innerHTML=mobilePlans[i].description;
						var td4=document.createElement('td');
						td4.innerHTML=mobilePlans[i].validity;
				
				
						tr.appendChild(td1);
						tr.appendChild(td2);
						tr.appendChild(td3);
						tr.appendChild(td4);
						tbody.removeChild(tbody.childNodes[0]);
						tbody.appendChild(tr);
						//tbody.replaceChild(tr,tbody.childNodes[0]);
						flag=1;
			  		}		
	  			}
			
		        if(flag == 1)
		        {
					alert("Data for ID "+userid+" is fetched");
				}
				else
				{
					alert("Mobile Plan for this ID is not present");
				}
					
				}
			else
			{
				alert("Please Enter ID");
			}
			
   	}			
		