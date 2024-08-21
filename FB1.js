
$(document).ready(function(){
    
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
                
            },
            sname:{
                required:true,
                minlength:4
        
            },
            emailaddress:{
                required:true,
                email:true,
               
            },
            password:{
                required:true,
                minlength:6,
                

            },
            password1:{
                required:true,
                minlength:6,
                equalTo:"#pswd1"
            },
           
            day:{
                required:true
            },
            month:{
                required:true
            },
            Year:{
                required:true
            },
            gender:{
                required:true
            },
            

           
        },
        messages:{
            password:{
                pwcheck:"Atleast one number,characetr,uppercase"
            }
        }
        

    })
   

})
$(document).ready(function(){
    $("#login-form").validate({
        rules:{
            phone:{
                required:true, 
                
            },
            pwd:{
                required:true,
                minlength:6
            }

        }
    
})

})


