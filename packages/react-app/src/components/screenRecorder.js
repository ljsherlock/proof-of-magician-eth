import React from 'react'
import { screenRecord } from "../utilities/screenRecord";
import { ReactComponent as OrbSVG } from '../assets/orb.svg'
import { ReactComponent as Emblem } from '../assets/emblem.svg'
import $ from 'jquery'

import './animation'
import { NoticeBar, NoticeBar2, NoticeBarContainer, NoticeButton } from '.';

class ScreenRecorder extends React.Component {

  state = {
    initiated: false,
    mediaRecorder: null,
    stream: null,
    blob: null,
    url: null
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

  constructor() {
    super();
    this.handleStop = this.handleStop.bind(this);
    window.handleStop = this.handleStop;
    $(document).on('keyup', function(e) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
        // stopTimer();
        window.handleStop();
      }
    });
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
      ipfsResultObj
    )

    console.log('mediaRecorder',mediaRecorder)

    this.setState({
      mediaRecorder: mediaRecorder,
      stream: stream
    })
  }

  handleStop() {
    this.stopRecording(this.state.mediaRecorder, this.state.stream)
  }

  render() {
    console.log('chunks', this.chunks)
    const { ipfsResultObj } = this.props;
    const etherscanURI = `https://rinkeby.etherscan.io/token/0x51c449b5fd5dee173658546b993bd1680fc61a02?a=${1}`

    return (
       <div className="main">
          <div className="orb">
            <div className="row">
              <div className='image-orb'>
                <OrbSVG/>
        
                <div className="white-circle">
                </div>
        
                <div id="box">
                  <span id="boxText"></span>
                </div>
        
              </div>
            </div>
        
            <div className="row buttons-row">
              <div id="box2">
                <span id="box2Text"></span>
              </div>
              {/* <div className="start">
                <button id="start" onClick={() => this.handleStart()}>Start</button>
              </div>
              <div className="stop">
                <button id="stop" onClick={() => this.handleStop()}>Stop</button>
              </div> */}
            </div>
            {/* <div className="status">
              <div className="color-match-msg"></div>
              <div className='message'>Use your mind to match the color of the background to the orb.</div>
            </div> */}
            <NoticeBarContainer id='noticeBarContainer'>
              <NoticeBar>Use your mind to match the color of the background to the orb.</NoticeBar>
              <NoticeBar2>{`Press`}<NoticeButton id="start" onClick={() => this.handleStart()}>Start</NoticeButton>{`to begin.`}</NoticeBar2>
            </NoticeBarContainer>
          </div>

          <div className="pop_up">
            <div className='message2'></div>
            <div className='message3'></div>

            <div style={{display: 'none'}} className="videoPlayer">
              <video className="video" width="600px" controls="" src="" style={{pointerEvents: 'none'}} autoPlay="" playsInline="" loop=""></video>
              <div className='nft-section'>
                <Emblem className='nft-emblem' />
                <p className='nft-title'>Proof of Magician</p>
                <p className='nft-token-id'>#0006</p>
                <p>View on <a href={etherscanURI}>Etherscan</a></p>
                <p>View on<a href={ipfsResultObj !== undefined ? ipfsResultObj.metadataURI : ''}>IPFS</a></p>
              </div>
            </div>
          </div>
        </div>  
    );
  }
}

export default ScreenRecorder 