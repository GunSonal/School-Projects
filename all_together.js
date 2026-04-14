class AudioPlayer {
      constructor(audioId, promptId, historyId) {
        this.audio = document.getElementById(audioId);
        this.promptEl = document.getElementById(promptId);
        this.historyEl = document.getElementById(historyId);
        this.playCount = 0;
        this.log = [];

        this.audio.addEventListener('ended', () => this.onEnded());
      }
      onEnded() {
        this.playCount++;
        this.log.push(`Play #${this.playCount} ended.`);
        this.updateHistory();
        this.showPrompt();
      }
      showPrompt() {
        this.promptEl.classList.add('visible');
        if (this.playCount >= 3) {
          this.promptEl.innerHTML = `
            <form id="repeatForm">
              <p>You've listened <strong>${this.playCount} times</strong>. Play once more?</p>
              <button class="btn yes" type="submit" name="choice" value="yes">Yes</button>
              <button class="btn no"  type="submit" name="choice" value="no">No</button>
            </form>
          `;
        } else {
          this.promptEl.innerHTML = `
            <form id="repeatForm">
              <p>Audio ended. Would you like to repeat it?</p>
              <button class="btn yes" type="submit" name="choice" value="yes">Yes, repeat</button>
              <button class="btn no"  type="submit" name="choice" value="no">No, stop</button>
            </form>
          `;
        }
        document.getElementById('repeatForm').addEventListener('submit', (e) => {
          e.preventDefault();
          const choice = e.submitter.value;
          this.handleChoice(choice);
        });
      }
      handleChoice(choice) {
        this.promptEl.classList.remove('visible');
        this.promptEl.innerHTML = '';
        if (choice === 'yes') {
          this.log.push(`You chose to repeat (play #${this.playCount + 1} starting).`);
          this.audio.currentTime = 0;
          this.audio.play();
        } else {
          this.log.push('You chose to stop.');
        }
        this.updateHistory();
      }
      updateHistory() {
        let html = '<h3>Session Log</h3>';
        for (let i = 0; i < this.log.length; i++) {
          if (i % 2 === 0) {
            html += `<p class="history-item" style="color:#333;">${i + 1}. ${this.log[i]}</p>`;
          } else {
            html += `<p class="history-item">${i + 1}. ${this.log[i]}</p>`;
          }
        }
        this.historyEl.innerHTML = html;
      }
    }
    const player = new AudioPlayer('allTogetherAudio', 'prompt', 'listenHistory');