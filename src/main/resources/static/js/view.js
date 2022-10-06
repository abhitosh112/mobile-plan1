	//testing for git hub
	// function planIdFun() {
	// 	var checkBox1 = document.getElementById("myCheckId");
	// 	var div1 = document.getElementById("divPlanId");
	// 	if (checkBox1.checked == true){
	// 	  div1.style.display = "block";
	// 	} else {
	// 	   div1.style.display = "none";
	// 	}
	//   }
	  
	var flag=0;
	var checkBox2;
	var checkBox3;
	var checkBox4;
	checkBox2 = document.getElementById("myCheckName");
	checkBox3 = document.getElementById("myCheckDesc");
	checkBox4 = document.getElementById("myCheckVal");
	function planNameFun() {
		
		var div2 = document.getElementById("divPlanName");
		if (checkBox2.checked == true){
		  div2.style.display = "block";
		} else {
		   div2.style.display = "none";
		}
	  }
	  function planDescFun() {
		
		var div3 = document.getElementById("divPlanDesc");
		if (checkBox3.checked == true){
		  div3.style.display = "block";
		} else {
		   div3.style.display = "none";
		}
	  }
	  function planValFun() {
		
		var div4 = document.getElementById("divPlanVal");
		if (checkBox4.checked == true){
		  div4.style.display = "block";
		} else {
		   div4.style.display = "none";
		}
	  }
	  
	
	function getBYID()
     {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
			  confirmButton: 'btn btn-success',
			  cancelButton: 'btn btn-danger'
				},
			  buttonsStyling: false,
			  allowOutsideClick:false
		  });
			
			console.log("outside");
			
			//var pid =document.getElementById('planIdView').value;
			
			var pname =document.getElementById('name').value;
			pname=pname.toUpperCase();

			var pdesc=document.getElementById('description').value;
			pdesc=pdesc.toUpperCase();

			var pvalidity=document.getElementById('validity').value;
			pvalidity=pvalidity.toString();
  
			var outerCondition;
			
			if (checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true){
					outerCondition=(pname.length!=0 && pdesc.length!=0 && pvalidity.length!=0);
				  } else if(checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false){
					outerCondition=(pname.length!=0 && pdesc.length!=0);
				  }else if(checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true){
					outerCondition=(pname.length!=0 && pvalidity.length!=0);
				  }else if(checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false){
					outerCondition=(pname.length!=0);
				  }else if(checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true){
					outerCondition=(pdesc.length!=0 && pvalidity.length!=0);
				  }else if(checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false){
					outerCondition=(pdesc.length!=0);
				  }else if(checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true){
					outerCondition=(pvalidity.length!=0);
				  }else if(checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false){
					outerCondition=true;
				  }else{
					outerCondition=false;
				  }

			

			var xhr = new XMLHttpRequest();
			xhr.open("GET", "http://localhost:8080/mp", false);
			xhr.send();
			var mpList = xhr.response;
			console.log(xhr.response);
				
			var mobilePlans = JSON.parse(mpList);
			flag = 0;
			
			
			//if(pname.length!=0 || pdesc.length!=0 || pvalidity.length!=0)
			
			//if((pvalidity>=1 && pvalidity<=365) || (/^[A-Za-z][A-Za-z0-9 -]*$/.test(pname))){
			
			if(outerCondition)
			{
				var tbody=document.querySelector('.table > tbody')
				
				while(tbody.firstChild)
				{
					tbody.removeChild(tbody.firstChild);
				}
				
				try
				{
				mobilePlans.forEach((currentElement,index,arr) =>{
				
				console.log(currentElement);
				
				var x=currentElement.name;
				x=x.toUpperCase();
				
				var y=currentElement.description;
				y=y.toUpperCase();
				
				var z=currentElement.validity;
				z=z.toString();

				if (checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true){
					var condition=((x.indexOf(pname)>-1) && (y.indexOf(pdesc)>-1) && (z.indexOf(pvalidity)>-1));
				  } else if(checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false){
					var condition=((x.indexOf(pname)>-1) && (y.indexOf(pdesc)>-1));
				  }else if(checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true){
					var condition=((x.indexOf(pname)>-1) && (z.indexOf(pvalidity)>-1));
				  }else if(checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false){
					var condition=((x.indexOf(pname)>-1));
				  }else if(checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true){
					var condition=((y.indexOf(pdesc)>-1) && (z.indexOf(pvalidity)>-1));
				  }else if(checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false){
					var condition=((y.indexOf(pdesc)>-1));
				  }else if(checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true){
					var condition=((z.indexOf(pvalidity)>-1));
				  }else if(checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false){
					//alert("Please select min one search option...!");
					throw err;
				  }else{
					alert("Please select min one search option...!");
				  }

			
				//if(x==pname & y==pdesc & z==pvalidity)
				console.log(condition);
				if(condition)
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
					
					setTimeout(function(){
						document.body.style.backgroundColor = "white";
					},10);
					document.body.style.backgroundColor = "grey";
					var tableHead=document.getElementById('table-head-view')
					tableHead.innerHTML='<tr><th scope="col">PLAN ID</th><th scope="col">NAME</th><th scope="col">DESCRIPTION</th><th scope="col">VALIDITY</th><th scope="col">ACTIONS</th><th scope="col">UPDATE</th></tr>';
					//alert("Data fetched");
					var noData=document.getElementById('table-section-noData')
					noData.innerHTML='';
				}
				else
				{	
					setTimeout(function(){
						document.body.style.backgroundColor = "white";
					},10);
					document.body.style.backgroundColor = "grey";
					var tableHead=document.getElementById('table-head-view')
					tableHead.innerHTML='';
					var noData=document.getElementById('table-section-noData')
					noData.innerHTML='<p align="center" style="color:black; align:center; font-weight:bolder">NO DATA PRESENT</p>';

					//alert("Plan not present");	
				}

			}
			catch(err){
				var tableHead=document.getElementById('table-head-view')
				tableHead.innerHTML='';
			 	alert("Please select min one search option...!");
			 	//swalWithBootstrapButtons.fire('Oops!','Please select min one search option...!','success');
			 }	 	  			
		 }
		 else
		 {
			
			//alert("Enter required fields...");
		 }
		}
	//} 
		
function searchButton()
{
		const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		  confirmButton: 'btn btn-success',
		  cancelButton: 'btn btn-danger'
			},
		  buttonsStyling: false,
		  allowOutsideClick:false
	  });
	getBYID();
	if(flag==1)
	{
		swalWithBootstrapButtons.fire('Success!','Mobile plans searched.','success')
	}
	else
	{
		swalWithBootstrapButtons.fire('Oops!','Plan not present.','error');
		//alert("failure...!");
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
			