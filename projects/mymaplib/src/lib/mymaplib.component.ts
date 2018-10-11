import { ViewContainerRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const Microsoft: any;

@Component({
  selector: 'my-map',
  template: `
  <div id='myMap' style='width: 100vw; height: 100vh;'></div>
  `,
  styles: []
})
export class MymaplibComponent implements OnInit {

  title = 'myMapApp';
    base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcBAMAAABmCgnjAAAAFVBMVEVHcEz///8aGhpsuy2s4oDRuPMaADiElDMGAAAAAXRSTlMAQObYZgAAAFNJREFUeF7FkLENgDAQA52GGiIxwD8bPBsgBmD/aXCs6JMNcpWtk1wYx8SO6gO2N3kWtDuJBc39UtYTPEc69BIpTVqLgjJOpS7tQ1I5NyiGia2rHyT7OTg7xhBoAAAAAElFTkSuQmCC';
    @ViewChild('mapElement') someInput: ElementRef;
    myMap = document.querySelector('#myMap');

    ngOnInit() {
        if (document.readyState != 'complete') {
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {
                    this.loadMapView();
                } else {
                    this.ngOnInit();
                }
            }
        } else {
            if (document.readyState === 'complete') {
                this.loadMapView();
            }
        }


    }

    loadMapView() {
        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            /* No need to set credentials if already passed in URL */
            credentials: 'AnxpS-32kYvBzjQ5pbZcnDz17oKBa1Bq2HRwHANoNpHs3Z25NDvqbhcqJZyDoYMj',
        });

        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: this.base64Image, anchor: new Microsoft.Maps.Point(12, 28) });
        map.entities.push(pushpin);
    }

}
