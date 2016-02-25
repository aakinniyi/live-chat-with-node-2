function startTime() {
    var today=new Date();

    var year = today.getFullYear();
    var month = today.getMonth();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    var d = today.getDate();
    var day = today.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('present').innerHTML = ""+days[day]+" "+d+" "+months[month]+" "+year+" "+h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//enable getUserMedia() to set the source of the video from the webcam

navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {video: true};

function successCallback(localMediaStream) {
  window.stream = localMediaStream; // stream available to console
  var video = document.querySelector("video");
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
}

function errorCallback(error){
  console.log("navigator.getUserMedia error: ", error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);
