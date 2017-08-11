var duration;

function showOrHideArrow() {
    $('a.left-arrow').show();
    $('a.right-arrow').show();

    if (para.currentSlideI === 0) {
        $('a.left-arrow').hide();
    }

    if (para.currentSlideI === (para.slidesCount - 1)) {
        $('a.right-arrow').hide();
    }
}

function changeActiveRole() {
    $("a.role").removeClass('active');
    $("a.role").eq(para.currentSlideI).addClass('active');
}

// var slowLoad = window.setTimeout( function() {
        // console.log( "Internet Lemot" );
    // }, 1000 );

    // window.addEventListener( 'load', function() {
        // window.clearTimeout( slowLoad );
    // }, false );
	
	
//JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
var imageAddr = "http://wallpapercave.com/wp/TgfLoHZ.jpg"
var downloadSize = 163721; //bytes

function ShowProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            console.log(msg);
        } else {
            for (var i = 0; i < msg.length; i++) {
                console.log(msg[i]);
            }
        }
    }
    
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
        oProgress.innerHTML = actualHTML;
    }
}

function InitiateSpeedDetection() {
    ShowProgressMessage("Loading the image, please wait...");
    window.setTimeout(MeasureConnectionSpeed, 1);
};    

if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
		displayImages();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("Invalid image, or error downloading");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
    
    function showResults() {
        duration = (endTime - startTime) / 1000;
        // var bitsLoaded = downloadSize * 8;
        // var speedBps = (bitsLoaded / duration).toFixed(2);
        // var speedKbps = (speedBps / 1024).toFixed(2);
        // var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
			"Your Time is " + duration 
            // "Your connection speed is:", 
            // speedBps + " bps", 
            // speedKbps + " kbps", 
            // speedMbps + " Mbps"
        ]);
    }
}

function displayImages(){
	if (duration > 5){
		console.log("Lemot neh");
	}else{
		console.log("Cepat");
	}
}