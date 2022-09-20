
		var xhr = new XMLHttpRequest();
		xhr.open("GET","http://localhost:8080/mp");
		xhr.send();
		 
		xhr.onload = function(){
		var d=JSON.parse(xhr.response);
		console.log(d);
		var x=document.getElementById('table-head')
		x.innerHTML='<tr><th scope="col">ID1</th><th scope="col">NAME</th><th scope="col">DESCRIPTION</th><th scope="col">VALIDITY</th><th scope="col">ACTIONS</th><th scope="col">UPDATE</th></tr>';
	    
	    var tbody=document.querySelector('.table > tbody')
	     
	    d.forEach((currentElement,index,arr) =>{
		
			console.log(currentElement);
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
		
		});
		}
	 