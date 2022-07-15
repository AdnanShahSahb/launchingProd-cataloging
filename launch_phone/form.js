function pic(){
    var image=document.getElementById('image');
    image.src=URL.createObjectURL(event.target.files[0]);
    
  
    // let reference = storage().ref(image);         // 2
    // let task = reference.putFile(image.src);

     
}
  
    

function validation(){
    
    console.log("ch1");
    var a=document.getElementById('Pname').value;
    var b=document.getElementById('processor').value;
    var c=document.getElementById('extended').value;
    var d=document.getElementById('ram').value;
    var e=document.getElementById('prod_col').value;
    var f=document.getElementById('prod_quan').value;
    var g=document.getElementById('add_desc').value;
    var h=document.getElementById('input_image').value;
    var i=document.getElementById('price').value;

    
    if (a != "") {}
   	else{
	alert("Dont leave blank!");
	document.getElementById("Pname").style.borderColor="red";
	return false;
	}

  if (b != "") {}
   	else{
	alert("Dont leave blank!");
	document.getElementById("processor").style.borderColor="red";
	return false;
	}

  if (c != "") {}
   	else{
	alert("Dont leave blank!");
	document.getElementById("extended").style.borderColor="red";
	return false;
	}

  if (d != "") {}
   	else{
	alert("Dont leave blank!");
	document.getElementById("ram").style.borderColor="red";
	return false;
	}

  if (e != "") {}
   	else{
	alert("Dont leave blank!");
	document.getElementById("prod_col").style.borderColor="red";
	return false;
	}

  if (f != "") {}
   	else{
	alert("Dont leave blank!");
	document.getElementById("prod_quan").style.borderColor="red";
	return false;
	}

  if (g != "") {}
   	else{
	alert("Dont leave blank!");
	document.getElementById("add_desc").style.borderColor="red";
	return false;
	}

  if (h != "") {}
   	else{
	alert("Upload Image!");
	document.getElementById("input_image").style.borderColor="red";
	return false;
	}
  
  if (i != "") {}
   	else{
	alert("Dont leave blank!");
	document.getElementById("price").style.borderColor="red";
	return false;
	}
    
  
  
    
    
    
    
    
    
    
      
      
        // for(var i=0;i<valid.length;i++){
            // if(valid[0]!=" "){console.log('ok');}
            // else{
            //     alert("Enter all numbers");

            // }
    // }


        // var var1=parseInt(document.getElementById('prod_quan').value);
        // if(var1==1){
        //     price.value=20000+' RS';
        // }
        // else if(var1==2)
        // {
        //     price.value=40000+' RS';
            
        // }
        // else if(var1==3)
        // {
        //     price.value=60000+' RS';
        // }
        // else
        // {
        //     alert("no more than 3");
        //     price.value=0;
        // }
}

