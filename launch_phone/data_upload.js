
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBFaU1oIptFGVNMgm1NYuV8-95_rXa8MKY",
          authDomain: "prodform-10f24.firebaseapp.com",
          projectId: "prodform-10f24",
          storageBucket: "prodform-10f24.appspot.com",
          messagingSenderId: "1088253126655",
          appId: "1:1088253126655:web:b526bcbfd91ff5088729ca"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        import {getDatabase, get,set,ref}
        from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js"

        

        var db=getDatabase();
        

        var Pname= document.getElementById('Pname');
        var processor= document.getElementById('processor');
        var extended= document.getElementById('extended');
        var ram= document.getElementById('ram');
        var internal= document.getElementById('internal');
        var prod_col= document.getElementById('prod_col');
        var prod_quan= document.getElementById('prod_quan');
        var add_desc= document.getElementById('add_desc');
        var image= document.getElementById('input_image');
        var price= document.getElementById('price');

        export {Pname};

        export function sub(){ 


        
            if(Pname.value && processor.value && extended.value && ram.value&& internal.value && prod_col.value && prod_quan.value && add_desc.value && price.value){
            
                    set(ref(db,'info/'+Pname.value),{   
                        Pname:Pname.value,
                        processor:processor.value,
                        extended:extended.value,
                        ram:ram.value,
                        internal:internal.value,
                        prod_col:prod_col.value,
                        prod_quan:prod_quan.value,
                        add_desc:add_desc.value,
                        //imageInStorage
                        price:price.value,

                    }).then(()=>{
                        
                        alert("data uploaded successfully");
                    
                        document.getElementById('actual_form').reset();


                    });
                
                    
            }
            else{
                alert(" data not uploaded   ");
                

            }
                
                
        }
            