let i1=document.getElementById('first-input').value=prompt();
let i2=document.getElementById('second-input').value=prompt();
    i1=Number(i1);
    i2=Number(i2);



 let button=document.getElementsByClassName('btn');
 
 
     for(let i=0;i<button.length;i++)
     {
        button[i].addEventListener('click', (event)=>{

        if(event.target.innerHTML=='+')
        
{
     document.getElementById('res').innerHTML=i1+i2;
     
     }

           else if(event.target.innerHTML=='-')
           {
             document.getElementById('res').innerHTML=i1-i2;
           }
           else if(event.target.innerHTML=='*')
           {
            document.getElementById('res').innerHTML=i1*i2;
           }
           else{
            document.getElementById('res').innerHTML=i1/i2;
           }
             
     })
 }
    
            
 

 


