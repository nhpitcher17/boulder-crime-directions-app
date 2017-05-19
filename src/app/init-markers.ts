export class Init{
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.log('No markers found...creating...');

      var markers = [
        {
          name: 'Marker 1',
          lat: 40.0153,
          lng: -105.2701,
          draggable: true
        },
        {
          name: 'Marker 2',
          lat: 40.0453,
          lng: -105.2788,
          draggable: true
        }
      ];

      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('Loading markers...');
    }
  }
}
