function town(array) {
    array.forEach(element => {
        let [town, latitude, longitude] = element.split(' | ');
        let object = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        } 
        console.log(object);
    });
}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])