function updatemap(){
 fetch("data.json")
      .then(res=>res.json())
      .then(res => {
    
         res.data.forEach(element =>{
            var latitude = element.latitude;
            var longitude = element.longitude;
            var cases = element.infected;

            console.log(longitude, latitude)

            if(cases > 255){
               col = "rgb(255,0,0)"
            }else{
               col = `rgb(${cases},${cases},0)`
            }

            new mapboxgl.Marker({
               color:col,
               draggable: false
               }).setLngLat([longitude, latitude])
               .addTo(map);
            });
         })
      }
      updatemap()