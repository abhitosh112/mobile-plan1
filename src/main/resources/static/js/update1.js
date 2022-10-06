function UpdateRecord()
		{
            var name = document.getElementById('name').value;   
            var validity = document.getElementById('validity').value;

			if((validity>=1 && validity<=365) && (/^[A-Za-z][A-Za-z0-9 -]*$/.test(name)))
			{
				UpdateRecord1();
			}
			
		}
    
function UpdateRecord1()
{
    //swal alert
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
            },
          buttonsStyling: false,
          allowOutsideClick:false
      });
    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
       // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Update it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            UpdateRecord2();
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

function UpdateRecord2()
{ 
    //swal alert
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
            },
          buttonsStyling: false,
          allowOutsideClick:false
      });

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
            
            if(xhr.status==201)
            {
                //alert("Mobileplan updated Successfully..1");

                swalWithBootstrapButtons.fire('Updated!','Your Plan has been updated.','SUCCESS').then(ok => 
                    {
                    if (ok) {
                         window.location.reload();
                            }
                    });
                //location.replace("view all.html");
            }
            else
               {
                //alert("Mobileplan id not present to update");
                swalWithBootstrapButtons.fire('Oops!','Something went wrong.','ERROR').then(ok => 
                    {
                    if (ok) {
                         window.location.reload();
                            }
                    });
            } 
        }
     }   
}
//------------------------------------------------------------------------------------------------->


function getBYID(mode)
 {
    console.log("outside");
    var userid =document.getElementById('id').value;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
            },
          buttonsStyling: false,
          allowOutsideClick:false
      });
    
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
            //searchClear();
            document.getElementById("divPlanName").style.display = "none";
            document.getElementById("divPlanDesc").style.display = "none";
            document.getElementById("divPlanVal").style.display = "none";
            document.getElementById("divPlanSubmit").style.display = "none";
            document.getElementById("divPlanSearch").style.display = "grid";
            //alert(xhr.response);


            
            if(mode=='button'){
              swalWithBootstrapButtons.fire('Oops!','ID not present to update','ERROR').then(ok => 
                {
                if (ok) {
                     window.location.reload();
                        }
                });

            }
              
        }
        else
        {
            search();
            
            document.getElementById("divPlanID").style.display = "block";
            document.getElementById("divPlanName").style.display = "block";
            document.getElementById("divPlanDesc").style.display = "block";
            document.getElementById("divPlanVal").style.display = "block";
            document.getElementById("divPlanSearch").style.display = "none";
            document.getElementById("divPlanSubmit").style.display = "grid";
            //alert("Data for ID "+userid+" is fetched");
            //UpdateRecord();
        }
    }
    else
    {
        //alert("Please Enter ID");
        swalWithBootstrapButtons.fire('Oops!','Please enter plan ID','ERROR').then(ok => 
            {
            if (ok) {
                 window.location.reload();
                    }
            });
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
        //document.getElementById("id").readOnly=true;
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


