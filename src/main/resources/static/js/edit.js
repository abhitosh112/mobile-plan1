 function setvalue()
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
        //preConfirm: () => {
           // UpdateRecord();     
           
 function editbyid(id) {
 // console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:8080/mp/"+id);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
      const objects = JSON.parse(this.responseText);
     // const user = objects['mp'];
      console.log(objects);
      window.location.assign("update.html");
      
    }
  };
}          
       
        
        function UpdateRecord()  
        {  
            var id = document.getElementById('id').value;  
            var name = document.getElementById('name').value;  
            var description = document.getElementById('description').value;  
            var validity = document.getElementById('validity').value;
            
            if (id.length != 0 && name.length !=0 && description.length !=0 && validity.length !=0)  
            {  
               
                
                var xhr = new XMLHttpRequest();
                xhr.open("PATCH", "http://localhost:8080/mp", false);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onreadystatechange = function () {
                   if (xhr.readyState === 4) {
                  console.log(xhr.status);
                  console.log(xhr.responseText);
                   }};
                var obj = {"id": id ,
                "name": name ,
                "description":description ,
                "validity": validity};
                
                var myjson = JSON.stringify(obj);
                xhr.send(myjson);
                alert("Mobileplan updated Successfully");      
            }  
            else  
            {              
                alert("Please Enter all the Fields ");  
            }  
        }  
