import React from 'react'
import { screenRecord } from "../utilities/screenRecord";
import { StartRandomColorTest } from './animation'

import { ReactComponent as OrbSVG } from '../assets//orb.svg'

class ScreenRecorder extends React.Component {

  state = {
    initiated: false,
    mediaRecorder: null,
    stream: null,
    blob: null,
    url: null,
    started: false
  }
  
  construct() {
    this.handleStopRecording = this.handleStopRecording.bind(this)
  }

  async componentDidMount() {
    this.recorder = new screenRecord();
    // await this.recorder.setupStream();
    console.log('this.recorder', this.recorder);

    this.chunks = this.recorder.chunks;
    this.blob = this.recorder.blob;
    this.url = this.recorder.url;
    this.startRecording = this.recorder.startRecording;
    this.stopRecording = this.recorder.stopRecording;
  }

  getBlob() {
    return this.blob;
  }

  async handleStart() {
    const { 
      addBlobToIPFS, 
      account, 
      mintToken,
      send,
      ipfsResultObj
    } = this.props
    const {
      mediaRecorder,
      stream,
    } = await this.startRecording(
      addBlobToIPFS,
       account,
      '11',
      mintToken,
      send,
      ipfsResultObj,
    )

    console.log('mediaRecorder',mediaRecorder)

    this.setState({
      mediaRecorder: mediaRecorder,
      stream: stream,
      started: true
    })
  }

  handleStopRecording() {
    this.stopRecording(this.state.mediaRecorder, this.state.stream)
  }

  render() {
    console.log('chunks', this.chunks)

    return (
      <div class="main">
        <StartRandomColorTest
          handleStopRecording={this.handleStopRecording}
          started={this.stated}
        />
      </div>   
    );
  }
}

export default ScreenRecorder 

