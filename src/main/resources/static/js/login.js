
function loginCheck()
{
    var username="abhi";
    var password="1234";

    var uName=document.getElementById("username").value;
    var uPassword=document.getElementById("password").value;
    
    if(uName.length!=0 && uPassword!=0)
    {
        if((username==document.getElementById("username").value) && (password==document.getElementById("password").value))
        {
            location.replace("home.html");
        }
        else
        {
			const swalWithBootstrapButtons = Swal.mixin({
		        customClass: {
		          confirmButton: 'btn btn-success',
		          cancelButton: 'btn btn-danger'
		            },
		          buttonsStyling: false,
		          allowOutsideClick:false
		      });
            swalWithBootstrapButtons.fire('Oops!','Username and password are not correct','error');
            
        }
    }
}
