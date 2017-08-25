declare var Notification: any;
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'happy dog day!';
  localstream: any;
  cameraRolling = false;


  notify() {
      new Notification('Doggo', {
          body: 'Notification time!'
      });
  }

  openCamera() {
    let n = navigator;
    n.getUserMedia = ( n.getUserMedia || n['webkitGetUserMedia'] || n['mozGetUserMedia']  || n['msGetUserMedia'] );
    if (!this.cameraRolling) {
      this.cameraRolling = true;
      navigator.getUserMedia({ video: true, audio: false },
        (stream) => {
          document.getElementById('camera')['src'] = URL.createObjectURL(stream);
          this.localstream = stream;
        }, () => {
          alert('could not connect stream');
        }
      );
    } else {
      this.cameraOff();
    }
  }

  private cameraOff() {
      this.cameraRolling = false;
      document.getElementById('camera')['src'] = '';
      this.localstream.getTracks()[0].stop();
  }
}
