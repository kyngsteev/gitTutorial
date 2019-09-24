function searchGoogle(){
    var searchValue = document.getElementById('formInput').value;
  
    if(typeof searchValue === undefined || searchValue === ""){
      alert('Bummer!!! You did not input anything in search box');
    }else{
      alert('Hurray!!! You are searching for ' + searchValue);
    }
  }
