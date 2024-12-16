const URL = "https://github.com/fpaniaguaangular/fpaniaguaangular.github.io/blob/main/gamecovers/assets/gamecovers/gamecovers.json";

function processData(data) {
    // Filter the data to get only consoles with "portrait" orientation
    const consolasVerticales = data.filter(consola => consola.orientation === "portrait");

    // Iterate over the filtered consoles and log their names
    consolasVerticales.forEach(consola => {
        console.log(consola.name);
    });
}

function doRequest(URL ) {
    
}