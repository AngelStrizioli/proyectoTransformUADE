
export default new class GetDatosAPI {

    createDataEB(station){
        return({
            lat: station.lat,
            long: station.lon,
            title: station.name,
            desc: station.address
        })
    }

    createDataPV(obj){
        return({
            lat: obj.lat,
            long: obj.long,
            title: obj.plaza,
            desc: obj.tipo
        })
    }

    getDatosEcoBici(handleData){
        const urlEcobici = "https://apitransporte.buenosaires.gob.ar/ecobici/gbfs/stationInformation?client_id=482c5a921298430f94982536c55b6b9b&client_secret=0d831E412e0C4eF0B20598477B87BCCf";

        fetch(urlEcobici).then((response) => {
            return response.json();
        }).then((responseData) => {
            const stations = responseData.data.stations;

            let markers = [];
            for(let i = 0; i<stations.length; i++){
                markers.push(this.createDataEB(stations[i]));
            }
            handleData(markers)
        })
    }

    getDatosPuntosVerdes(handleData){
        var json = require("../../../resources/puntos_verdes.json");
        
        let markers = [];
        for(let i = 0; i < json.length; i++){
            markers.push(this.createDataPV(json[i]));
        }
        handleData(markers)
    }

}