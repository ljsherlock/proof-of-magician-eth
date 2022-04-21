
export class screenRecord {
  
  chunks;
  blob;
  url;
  startRecording;
  stopRecording;
  mediaRecorder;
  
  constructor() {
    this.chunks = [];
    this.blob = null;
    this.url = null;
    this.mediaRecorder = null;
    this.stream = null;
    this.startRecording.bind(this)
    this.stopRecording.bind(this)
  }

  async startRecording(
    addBlobToIPFS, 
    account, 
    number,
    mintToken,
    send,
    ipfsResultObj,
    startRandomColorTest,
    handleStopRecording
  ) {  ;

    this.setState({
      ipfsResult: null
    })

    this.stream = await navigator.mediaDevices.getDisplayMedia({
      // video: true,
      preferCurrentTab: true
    });
  
    this.mediaRecorder = new MediaRecorder(this.stream, {
      mimeType: "video/webm"
    });

    var chunks = [];

    this.mediaRecorder.ondataavailable = function(e) {
      console.log('e.data', e.data)
      console.log('chunks', chunks)
      chunks.push(e.data)
    }

    window.startTimer();

    console.log('recording');

    console.log('this.mediaRecorder', this.mediaRecorder);
    // possible callback function.
  
    this.mediaRecorder.onstop = function() {
      var blob = new Blob(chunks, {
          // type: chunks[0].type
          type: 'video/webm',
      })
      let url = URL.createObjectURL(blob)

      let video = document.querySelector("video")
      let videoWrapper = document.querySelector('.videoPlayer');
      video.src = url
      videoWrapper.style.display = "";
      video.play();

      console.log(blob)

      const result = addBlobToIPFS(blob, account, number, mintToken, send);
    };
    
  
    //we have to start the recorder manually
    this.mediaRecorder.start();
    // start.style.display = "none";
    // stop.style.display = "";

    return {
      mediaRecorder: this.mediaRecorder,
      stream: this.stream
    };
  }

  stopRecording(mediaRecorder, stream) {
    console.log('mediaRecorder', mediaRecorder)
    mediaRecorder.stop();
    stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }
}

