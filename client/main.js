async function triggerPushNotification() {
  
  if ('serviceWorker' in navigator) {
alert("akash");
    requestPermission();
    
  } else {
    console.error('Service workers are not supported in this browser');
  }
}

function requestPermission() {
  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  var i;
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
      // Handling deprecated version with callback.
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
  .then(function(permissionResult) {
    if (permissionResult == 'granted') {
      console.log("granted");    
    }
    else if(permissionResult == 'denied'){
      
      console.log('not granted')
      console.log(window.location.hostname);
      var x = window.location.hostname;
      var y = x.substr(0, 1);
      var is = arr.includes(y);
      if(is)
      {
      i = arr.indexOf(y);
      i++;
      }
      // if(localStorage.getItem("key")>0)
      //  i = localStorage.getItem("key");

       if(i == undefined || is == false){
         i = 0
         //localStorage.setItem("key", i);
       }

      while(i<6)
      {
        var x = arr[i] + '.'
        i++;
        //localStorage.setItem("key", i);
      window.location.href = "http://" + x + "localhost:5000";
        break;
      }
      // $.ajax({
      //   type: "POST",
      //   url: "/subscribejson",
      //   data: JSON.stringify({ permission: "denied"}),
      //   dataType: 'json',
      //   contentType: 'application/json'
      // });
      //throw new Error('Permission not granted.');  
    }
    else{
      console.log('default')
    }
    //requestPermission(); 
    
  });
  
}
$(document).ready(() => {
  //location.reload();
  setInterval(triggerPushNotification().catch( error => {
    console.log(error)}), 1000);
  
    
});
