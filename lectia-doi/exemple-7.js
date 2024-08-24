/** if else trebuie sa scriem un
 script care va afisa un string in consola 
 in functe de ora la care suntem daca e mai mica 17 
 "peding" daca e egala cu 24 "expires" daca e mai mare 24 sa fie "overdue" */


 const hours = 27;
  if (hours< 17)
  { console.log('pending')}
  else if( hours >= 17&& hours<=24){
    console.log('expires');

  }
  else{ console.log('overdue')}
