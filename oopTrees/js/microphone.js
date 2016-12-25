// function hasGetUserMedia() {
//   return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
//             navigator.mozGetUserMedia || navigator.msGetUserMedia);
// }
//
// if (hasGetUserMedia()) {
//   // alert("good to go");
// } else {
//   console.log('getUserMedia() is not supported in your browser');
// }

var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

// getUserMedia block - grab stream
// put it into a MediaStreamAudioSourceNode
// also output the visuals into a video element

if (navigator.mediaDevices) {
    console.log('getUserMedia supported.');
    navigator.mediaDevices.getUserMedia ({audio: true})
    .then(function(stream) {
        // Create a MediaStreamAudioSourceNode
        // Feed the HTMLMediaElement into it
        var audioCtx = new AudioContext();
        var source = audioCtx.createMediaStreamSource(stream);

        var analyser = audioCtx.createAnalyser();


        // Create a biquadfilter
        var biquadFilter = audioCtx.createBiquadFilter();
        biquadFilter.type = "lowshelf";
        biquadFilter.frequency.value = 1000;
        biquadFilter.gain.value = 1;

        // connect the AudioBufferSourceNode to the gainNode
        // and the gainNode to the destination, so we can play the
        // music and adjust the volume using the mouse cursor
        // source.connect(biquadFilter);
        // biquadFilter.connect(analyser);
        source.connect(analyser);

        setInterval(function(){
            var dataArray = new Float32Array(analyser.fftSize); // Float32Array needs to be the same length as the fftSize
            analyser.getFloatTimeDomainData(dataArray); // fill the Float32Array with data returned from getFloatTimeDomainData()
            console.log(dataArray[analyser.fftSize/2]);
        }, 16);

        // Get new mouse pointer coordinates when mouse is moved
        // then set new gain value

        // range.oninput = function() {
        //     biquadFilter.gain.value = range.value;
        // }
    })
    .catch(function(err) {
        console.log('The following gUM error occured: ' + err);
    });
} else {
   console.log('getUserMedia not supported on your browser!');
}
