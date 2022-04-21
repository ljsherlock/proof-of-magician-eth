const colorOrb = () => (
  <div class="main">
    <div class="orb">
      <div class="row">
        <div class='image-orb'>
  
          <div class="white-circle">
          </div>
  
          <div id="box">
            <span id="boxText"></span>
          </div>
  
        </div>
      </div>
  
      <div class="row buttons-row">
        <div id="box2">
          <span id="box2Text"></span>
      </div>
        <div class="start">
          <button id="start">Start</button>
        </div>
        <div class="stop">
          <button id="stop">Stop</button>
        </div>
      </div>
      <div class="status">
        <div class="color-match-msg"></div>
        <div class='message'>Use your mind to match the color of the background to the orb.</div>
      </div>
    </div>

    <div class="pop_up">
      <div class='message2'></div>
      <div class='message3'></div>

      <div class="videoPlayer">
        <video class="video" width="600px" controls></video>
      </div>
    </div>
  </div>    
)

export default colorOrb;
