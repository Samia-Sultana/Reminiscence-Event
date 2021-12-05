import React, { useEffect, useState } from "react";
import {
    Navigate,
    useLocation 
  } from "react-router-dom";
import AdminPage from "../../AdminComponents/AdminPage/AdminPage";

const ProtectedRoute =({ children, ...rest }) =>{
  console.log('inside protected route');
  const location = useLocation({});
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('accessToken');
  const [admin,setAdmin ] = useState();
  useEffect(()=>{
    if(sessionStorage.getItem('email') && sessionStorage.getItem('accessToken')){
      fetch('http://localhost:4200/admin')
      .then(res => res.json())
      .then(data =>{
        var flag = 0;
        for(var i = 0; i<data.length; i++){
          if (sessionStorage.getItem('email') === data[i].email ) {
            if(sessionStorage.getItem('accessToken')){
              console.log('email set true')
              setAdmin({'email':true});
              flag = 1;
                //break; 
            }       
          }
      }
      if(flag == 0){
        setAdmin({'email':false});
      }
      else{
        console.log('do nothing')
      }


    })
    }
    else{
      console.log('email sat false')
      setAdmin({'email':false})
    }
  },[])

    return (

       <div>
         {
           admin?.email == true && children 
         }
         {
           admin?.email == false && <Navigate to={{ pathname: "/login" }} replace state={{ from: location.pathname }}/>
         }
       </div>
            
        
        
            
  );
  
}
export default ProtectedRoute;