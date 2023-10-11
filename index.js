shops = []
tablaShop = []
cantidadMinShops = 0
cantidadMaxShops = 999
shopActual = 0
minutosProximoUpdate = 0;
// let shopsTemp = []
// let tablaShopTemp = []
bossTimers = getBossTimers()


let historico = localStorage.getItem('historico')
if(!historico) localStorage.setItem('historico', '[]')

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time/2));
  }

$( document ).ready(function() {
    // $('#titulo').text('shops!')

    // let diaHoy = new Date().getDate();
    // let mesHoy = new Date().getMonth();
    
    // let fechaFiltro = $($('#fechaFiltroCompHistorico')[0])[0].value
    document.getElementById('file-input')?.addEventListener('change', readSingleFile, false);
    document.getElementById('file-input-mvp')?.addEventListener('change', leerMvps, false);
});

function cargarTabla(){
    let datos = shops

       for(var i = 0; i < datos.length; i ++){
            cargarRow(datos[i])
       }
}

function cargarHistorico(){
    let datos = JSON.parse(localStorage.getItem('historico'))
    datos.map(e => cargarRowHistorico(e))
}

function buscarMVPs(){
    // $.get("https://www.adventuresro.com/?module=vending&p=" + index, function(data, status){

    //     console.log("llego data", data)

    //  })

    $.ajax({
        url: "https://discord.com/api/v9/guilds/896801043684397166/channels?channel_limit=100",
        headers: {"accept": "*/*","accept-language": "en-US,en;q=0.9,it;q=0.8,de;q=0.7,es;q=0.6,pt;q=0.5","authorization": "MzU5NTU1OTc4MzYzOTI4NTc4.GC_Kh4.OXFP02XJOwA_kytbIkl-DxoKuWDVrqANxt53gI", "sec-ch-ua": "Chromium","user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "Cookie": "__dcfduid=439be900f35e11eda45dbdc632787002","__sdcfduid": "439be901f35e11eda45dbdc6327870023949880ffff818e3cb40c5d5101f87d787fd3b02b11b227975ffdbfd36fb5794"}
    })

}

function getBossTimers(){

    let timers = [];
    timers.push({"boss":"Amon Ra","map":"moc_pryd06","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Assassin Cross Eremes","map":"lhz_dun03","minRespawn":100, "maxRespawn": 130})
    timers.push({"boss":"Atroce","map":"ra_fild02","minRespawn":240, "maxRespawn": 250})
    timers.push({"boss":"Atroce","map":"ra_fild03","minRespawn":180, "maxRespawn": 190})
    timers.push({"boss":"Atroce","map":"ra_fild04","minRespawn":300, "maxRespawn": 310})
    timers.push({"boss":"Atroce","map":"ve_fild01","minRespawn":180, "maxRespawn": 190})
    timers.push({"boss":"Atroce","map":"ve_fild02","minRespawn":360, "maxRespawn": 370})
    timers.push({"boss":"White Lady","map":"lou_dun03","minRespawn":117, "maxRespawn": 127})
    timers.push({"boss":"Baphomet","map":"prt_maze03","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Beelzebub","map":"abbey03","minRespawn":720, "maxRespawn": 730})
    timers.push({"boss":"Dark Lord","map":"gl_chyard","minRespawn":60, "maxRespawn": 90})
    timers.push({"boss":"Detardeurus","map":"abyss_03","minRespawn":180, "maxRespawn": 190})
    timers.push({"boss":"Doppelganger","map":"gef_dun02","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Dracula","map":"gef_dun01","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Drake","map":"treasure02","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Eddga","map":"pay_fild11","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Evil Snake Lord","map":"gon_dun03","minRespawn":94, "maxRespawn": 104})
    timers.push({"boss":"Fallen Bishop","map":"abbey02","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Garm","map":"xmas_fild01","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Gloom Under Night","map":"ra_san05","minRespawn":300, "maxRespawn": 310})
    timers.push({"boss":"Golden Thief Bug","map":"prt_sewb4","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Incantation Samurai","map":"ama_dun03","minRespawn":90, "maxRespawn": 100})
    timers.push({"boss":"Kiel D-01","map":"kh_dun02","minRespawn":120, "maxRespawn": 180}) //136
    timers.push({"boss":"Stormy Knight","map":"xmas_dun02","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Lady Tanee","map":"ayo_dun02","minRespawn":420, "maxRespawn": 430})
    timers.push({"boss":"Lord of Death","map":"niflheim","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Maya","map":"anthell02","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Mistress","map":"mjolnir_04","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Moonlight Flower","map":"pay_dun04","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Orc Hero","map":"gef_fild14","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Orc Lord","map":"gef_fild10","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"Osiris","map":"moc_pryd04","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Pharaoh","map":"in_sphinx5","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Phreeoni","map":"moc_fild17","minRespawn":120, "maxRespawn": 130})
    timers.push({"boss":"RSX-0806","map":"ein_dun02","minRespawn":125, "maxRespawn": 135})
    timers.push({"boss":"Tao Gunka","map":"beach_dun","minRespawn":300, "maxRespawn": 310})
    timers.push({"boss":"Turtle General","map":"tur_dun04","minRespawn":60, "maxRespawn": 70})
    timers.push({"boss":"Vesper","map":"jupe_core","minRespawn":120, "maxRespawn": 130})

    return timers;
}

function compararHistorico(){
    $("#historicItemsComp > tbody").empty();
    let datos = JSON.parse(localStorage.getItem('historico'))
    let itemsIgnorados = JSON.parse(localStorage.getItem('itemsIgnorados')) || []
    let coeficiente = $($('#coeficiente')[0])[0].value || 1
    let filtroMillones = $($('#filtroMillones')[0])[0].value || 0
    let fechaFiltro = $($('#fechaFiltroCompHistorico')[0])[0].value
    let textoFiltro = $($('#textoFiltroCompHistorico')[0])[0].value
    
    //fix porque no andan las cookies
    // shops = JSON.parse(localStorage.getItem('ultimosOnline'));
    // let segundaParte = JSON.parse(localStorage.getItem('ultimosOnline2'));

    // shops = [...shops, ...segundaParte]

    resultado = datos.filter(a => !textoFiltro ||a.itemName.toUpperCase().indexOf(textoFiltro.toUpperCase()) > -1)
                     .filter(e => 
                        {
                            let dataFiltrada = !fechaFiltro ? e.hisoricData : e.hisoricData.filter(a => !fechaFiltro || (new Date(fechaFiltro) <= new Date(a.fecha)))
                            if (dataFiltrada.length == 0) return false;
                            dataFiltrada.sort((a,b) => parseInt(a.itemPrice) > parseInt(b.itemPrice) ? 1 : -1)
                            let elementoBarato = dataFiltrada[0]
                            let elementoCaro = dataFiltrada[dataFiltrada.length -1]
                            let cociente = parseInt(elementoBarato.itemPrice)/parseInt(elementoCaro.itemPrice)
                            let diferenciaPrecios = parseInt(elementoCaro.itemPrice) - parseInt(elementoBarato.itemPrice)

                            let resultado = (parseFloat(cociente) <= parseFloat(coeficiente)) && (diferenciaPrecios/1000000 >= filtroMillones)
                            return resultado
                        }
                    
                    ).map(e => {
                        let itemParsed = {'itemId': 0, 'itemName': '', 'itemPriceMin': 0, 'itemPriceMax': 0, 'itemPriceMinDate': '', 'itemPriceMaxDate':'','itemCoef':0}
                        e.hisoricData.sort((a,b) => parseInt(a.itemPrice) > parseInt(b.itemPrice) ? 1 : -1)
                        let elementoBarato = e.hisoricData[0]
                        let elementoCaro = e.hisoricData[e.hisoricData.length -1]
                        let precioPromedio = e.hisoricData.reduce((partialSum, a) => partialSum + parseInt(a.itemPrice), 0)/e.hisoricData.length;
                        let avgCociente = 0
                        let cociente = 0
                         
                        itemParsed.itemId = e.itemId;
                        itemParsed.itemName = e.itemName;

                        //TODO: Fix
                        //El item puede estar online con mas de 1 precio, y este find no esta buscando el precio mas barato, toma el primero que encuentra.
                        itemOnline = shops.filter(s => (s.itemId == itemParsed.itemId)).sort((a,b) => parseInt(a.itemPrice) > parseInt(b.itemPrice) ? 1 : -1)[0] || null
                        //itemOnline = shops.find(s => (s.itemId == itemParsed.itemId))
                        itemParsed.estaOnline = !!itemOnline

                        //hoy en dia solo muestro los que estan online... si pinta cambiar eso, el else de abajo tiene sentido.
                        if (itemOnline){
                            itemParsed.itemPriceMin = itemOnline.itemPrice;
                        } else {
                            itemParsed.itemPriceMin = elementoBarato.itemPrice;
                        }

                        avgCociente = itemParsed.itemPriceMin/precioPromedio
                        cociente = itemParsed.itemPriceMin/elementoCaro.itemPrice
                        itemParsed.itemPriceMax = elementoCaro.itemPrice;
                        itemParsed.itemPriceMinDate = elementoBarato.fecha;
                        itemParsed.itemPriceMaxDate = elementoCaro.fecha;
                        itemParsed.itemCoef = cociente.toFixed(2);
                        itemParsed.avgCoef = avgCociente.toFixed(2);

                        //itemOnline = shops.find(s => (s.itemId == itemParsed.itemId) && (parseFloat(s.itemPrice) <= parseFloat(elementoBarato.itemPrice)))

                       

                        itemIgnorado = itemsIgnorados.find(s => s == itemParsed.itemId)
                        itemParsed.estaIgnorado = !!itemIgnorado;
                        
                        return itemParsed;
                    }).sort(((a,b) =>  parseFloat(a.avgCoef) > parseFloat(b.avgCoef) ? 1 : -1)
                    ).filter(e => !e.estaIgnorado)
                    .map(e => e.estaOnline ? cargarRowHistoricoComp(e) : '')
                          

                    //Detecto "Oportunidades"
                    // ${row.itemId} ${row.itemName}${parseFloat(row.itemPrice).toLocaleString()}${row.itemAmount}`);


    // for(var i = 0; i < resultado.length; i ++){
    //      cargarRowHistoricoComp(resultado[i])
    // }
}

//    piedrahita92
//d39793520

function filtrarHistorico(){
    $("#historicItems > tbody").empty();
    let concepto = $($('#filtroHistorico')[0])[0].value
    let fechaFiltro = $($('#filtroHistorico')[0])[0].valuefechaFiltroHistorico

    let datosHistorico = JSON.parse(localStorage.getItem('historico'))
    let coincidenciasHistorico = datosHistorico.filter( r => r.itemName.toUpperCase().includes(concepto.toUpperCase())).filter(a => !fechaFiltro || (new Date(fechaFiltro) <= new Date(a.fecha)))
    coincidenciasHistorico.sort((a,b) => parseInt(a.itemId) > parseInt(b.itemId) ? 1 : -1 )

    for(var i = 0; i < coincidenciasHistorico.length; i ++){
        cargarRowHistorico(coincidenciasHistorico[i])
    }
}

function filtrarBusqueda(){
    // let datos = JSON.parse(localStorage.getItem('shops'))
    $("#items > tbody").empty();
    
   let datos = shops
   let concepto = $($('#filtro')[0])[0].value

   let coincidencias = datos.filter( r => r.itemName.toUpperCase().includes(concepto.toUpperCase()))
    coincidencias.sort((a,b) => parseInt(a.itemPrice) > parseInt(b.itemPrice) ? 1 : -1 )

   for(var i = 0; i < coincidencias.length; i ++){
        cargarRow(coincidencias[i])
   }

}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";               

    document.cookie = name + "=" + value + expires + "; path=/";
}

function getPagesIds(index){
    console.log("page id", index)
    createCookie("fluxSessionData","apa9nv5sjlvoq360oj6k82mjpk",1)
    return delay(1000).then(v => 
        $.get("https://www.adventuresro.com/?module=vending&p=" + index, function(data, status){
    
        $('#titulo').text('Obteniendo ids de pagina ' + index)
        tablita = $(data).find('.horizontal-table tbody tr td a')
        console.log("tablita es: ", tablita)
        tablaShop.push(tablita);

     }))
    
}

function getShopItems(shopNum){
    // console.log("dentro de getShopItems con shopNum: ", shopNum)
    shopActual++;
    $('#titulo').text('Parseando shop: ' + shopNum + ' (' + shopActual + '/' + cantidadMaxShops +')')

    return delay(1000).then(v =>

        $.get("https://www.adventuresro.com/?module=vending&action=viewshop&id=" + shopNum, function(data, status){
            
            // localStorage.setItem('shops', data)
            let shopsTemp = []
            let shopName = "";
            let shopCoords = "";

            tabla = $(data).find('.horizontal-table tbody tr td')
            shopName = $(data).find('h3').text()
            
            if(!shopName.includes('Zeny')) return
            
            shopCoords = $(data).find('h4').text()
            let rowNum = tabla.length / 10
            let base = 0

            for(var i = 0; i < rowNum; i++){
                let row = {}
                
                row.itemId = $(tabla[base + 0]).find('a').text();
                row.itemName = $(tabla[base + 1]).find('a').text();
                row.itemRefine = $.trim($(tabla[base + 2])[0].innerText);
                row.itemSlot = $.trim($(tabla[base + 2])[0].innerText).replace('[','').replace(']','');
                row.itemCard0 = $(tabla[base + 4]).find('span').text();
                row.itemCard1 = $(tabla[base + 5]).find('span').text();
                row.itemCard2 = $(tabla[base + 6]).find('span').text();
                row.itemCard3 = $(tabla[base + 7]).find('span').text();
                row.itemPrice = $.trim($(tabla[base + 8])[0].innerText).replace('z','').replace(' ','').replace(' ','');
                row.itemAmount = $.trim($(tabla[base + 9])[0].innerText);
                row.shopId = shopNum;
                row.shopName = shopName;
                row.shopCoords = shopCoords;

                // shopsTemp.push(row)
                shops.push(row)

                //cookie
                let currentOnline = JSON.parse(localStorage.getItem('ultimosOnline'))
                currentOnline.push(row) 
                localStorage.setItem('ultimosOnline', JSON.stringify(currentOnline))
                //cookie



                actualizarHistorico(row)
                base += 10
            }

            
            // shops = JSON.parse(JSON.stringify(shopsTemp));
            

            // let currentData = JSON.parse(localStorage.getItem('shops')) || []
            // let allData = currentData.concat(shops)

            // localStorage.setItem('shops', JSON.stringify(allData))

        }));
}

function descargarArchivoStorage(){
    let data = localStorage.getItem('ultimosOnline')
    // Create element with <a> tag
    const link = document.createElement("a");

    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([data], { type: 'text/plain' });

    // Add file content in the object URL
    link.href = URL.createObjectURL(file);

    // Add file name
    link.download = "ultimosOnline.txt";

    // Add click event to <a> tag to save file.
    link.click();
    URL.revokeObjectURL(link.href);
}

function descargarArchivo(data){
    // Create element with <a> tag
    const link = document.createElement("a");

    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([data], { type: 'text/plain' });

    // Add file content in the object URL
    link.href = URL.createObjectURL(file);

    // Add file name
    link.download = "ultimosOnline.txt";

    // Add click event to <a> tag to save file.
    link.click();
    URL.revokeObjectURL(link.href);
}

function actualizarHistorico(row){
    let historico = JSON.parse(localStorage.getItem('historico')) || []

    let item = historico.find( e => e.itemId == row.itemId)
    diaHoy = new Date().getDate()
    mesHoy = new Date().getMonth()


    if(item){
        let yaCargado = item.hisoricData.find(hd => hd.itemPrice == row.itemPrice && new Date(hd.fecha).getDate() == diaHoy && new Date(hd.fecha).getMonth() == mesHoy)
        // console.log("encontre!, ya fueron cargados?", yaCargado)
        if(!yaCargado){
            item.hisoricData.push({itemPrice: row.itemPrice, fecha: new Date()})
        }
    } else {
        // console.log("no encontre, pusheo historico")
        historico.push({itemId: row.itemId, itemName: row.itemName, itemSlot: row.itemSlot, hisoricData: [{itemPrice: row.itemPrice, fecha: new Date()}]})
    }

    localStorage.setItem('historico', JSON.stringify(historico))

}

const getShopPages = async indices => {
    console.log("start - total paginas: ", indices)
    for (let i = 1; i <= indices; i++){
        await getPagesIds(i);
    }

    cantidadMinShops = (indices-1)*20
    cantidadMaxShops = indices*20
    $('#cantidadShops').text('Son entre: ' + cantidadMinShops + ' y ' + cantidadMaxShops +' shops')
    //shopIds = []
    let tablita ;
    
    for (let i = 0; i < tablaShop.length; i++){
        tablita = tablaShop[i]
        for(let i = 0; i < tablita.length; i += 2){
            let shopNum = $($(tablita[i])[0]).text()
            if(shopNum){
                await getShopItems(shopNum);
                
            }
        }
    }

    console.log("end", tablaShop)
    compararHistorico();
    let data = localStorage.getItem('ultimosOnline')
    descargarArchivo(data);
    minutosProximoUpdate = 15;
   
    //alert("1111");
}

function desIgnorarItem(itemId) {
    console.log("designorar", itemId)
}

function ignorarItem(itemId) {
    console.log("ignorar", itemId)
    let itemsIgnorados     = JSON.parse(localStorage.getItem('itemsIgnorados')) || []
    itemsIgnorados.push(itemId);
    localStorage.setItem('itemsIgnorados', JSON.stringify(itemsIgnorados))

    compararHistorico();
}

function cargarRow(row){
    $("#items > tbody").append(`<tr><td>${row.itemId}</td><td>${row.itemName}</td><td>${parseFloat(row.itemPrice).toLocaleString()}</td><td>${row.itemAmount}</td></tr>`);
 }

 function cargarRowHistorico(row){
    for(let i = 0; i < row.hisoricData.length; i++){
        $("#historicItems > tbody").append(`<tr><td>${row.itemId}</td><td>${row.itemName}</td><td>${parseFloat(row.hisoricData[i].itemPrice).toLocaleString()}</td><td>${new Date(row.hisoricData[i].fecha).toLocaleDateString()}</td></tr>`);
    }
 }

 function cargarRowHistoricoComp(row){
    // for(let i = 0; i < row.hisoricData.length; i++){
    //     $("#historicItemsComp > tbody").append(`<tr><td>${row.itemId}</td><td>${row.itemName}</td><td>${parseFloat(row.hisoricData[i].itemPrice).toLocaleString()}</td><td>${new Date(row.hisoricData[i].fecha).toLocaleDateString()}</td></tr>`);
    // }
    let clase = row.estaOnline ? 'esta-online' : 'esta-offline';
    let accion = row.isIgnored ? `<td><div><button onclick="desIgnorarItem(${row.itemId})">+</button></div></td>` : `<td><div><button onclick="ignorarItem(${row.itemId})">-</button></div></td>`

    $("#historicItemsComp > tbody").append(`<tr class="${clase}"><td>${row.itemId}</td><td>${row.itemName}</td>
                                            <td>${parseFloat(row.itemPriceMin).toLocaleString()}</td>
                                            <td>${new Date(row.itemPriceMinDate).toLocaleDateString()}</td>
                                            <td>${parseFloat(row.itemPriceMax).toLocaleString()}</td>
                                            <td>${new Date(row.itemPriceMaxDate).toLocaleDateString()}</td>
                                            <td>${parseFloat(row.itemCoef).toLocaleString()}</td>
                                            <td>${parseFloat(row.avgCoef).toLocaleString()}</td>
                                            ${accion}
                                            </tr>`);

 }

 function cargarRowMvp(row){
    let clase = row.vivo ? 'esta-online' : 'esta-offline';
    $("#mvps > tbody").append(`<tr class="${clase}"><td>${row.mvp}</td><td>${row.mapa}</td><td>${row.vivo}</td><td>${row.ultimaMuerte}</td><td>${row.proxMuerteMin}</td><td>${row.proxMuerteMax}</td></tr>`);
 }

  function buscarShopsWebsite() {
    // let delayBusqueda = 15*60*1000
    // minutosProximoUpdate = 15;

    localStorage.setItem('ultimosOnline','[]')
    comenzarBusquedaWebsite();
    // setInterval(comenzarBusquedaWebsite, delayBusqueda);
    // setInterval(actualizarTiempo, 1000*60)
}

function actualizarTiempo(){
    $('#updater').text(' Proximo update en: ' + minutosProximoUpdate + ' minutos')
    minutosProximoUpdate--;
}

function comenzarBusquedaWebsite(){
    $('#updater').text('Actualizando ...')
    $.get("https://www.adventuresro.com/?module=vending", function(data, status){
    
    indices = $(data).find('.page-item').length
    $('#titulo').text('Son ' + indices + ' paginas')
    getShopPages(indices);
});
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function replacer(key, value) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
}

  function reviver(key, value) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
}

String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function leerMvps(e){

    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContentsMvps(contents)
    //   console.log("content",contents)
      let dataParsed = JSON.parse(contents);

      let test = [];

      for (var i = 0; i < dataParsed.length; i++){
        let fechaMensaje = new Date(dataParsed[i].timestamp)
        let fechaActual = new Date();
        
        let contenido = dataParsed[i].content;

        //Si el mensaje no es de hoy, lo ignoro
        if(fechaMensaje.getDate() != fechaActual.getDate()){
            continue;
        }


        let mvp = contenido.match('killed(.*)at')[1].trim()
        let mapa = contenido.match('at (.*)\. Time')[1].trim()
        let horaMinutos = contenido.split('Time:')[1].trim();
        let hora = horaMinutos.split(':')[0]
        let minutos = horaMinutos.split(':')[1]

        let fechaMvp = new Date();
        fechaMvp.setHours(hora);
        fechaMvp.setMinutes(minutos);

        test.push({"mvp":mvp, "mapa":mapa, "horaMinutos":horaMinutos, hora, minutos})
        
      }

      test.sort((a,b) => a.mvp < b.mvp ? -1 : 1)
      console.log("test",test)

      let currentTimers = [...bossTimers];
      let intermedia = [];

      for (var i = 0; i < currentTimers.length; i++){
        let muertes = test.filter(boss => boss.mvp == currentTimers[i].boss && boss.mapa == currentTimers[i].map)
        if (!muertes) {
            console.log("no encontre muertes de: ", currentTimers[i].boss + " en " + currentTimers[i].map)
            continue;
        }
        muertes.sort((a,b) => a.hora > b.hora ? -1 : 1);
        let muerte = muertes[0];

        if (muerte){
            let ultimaMuerte = new Date();
            ultimaMuerte.setHours(muerte.hora);
            ultimaMuerte.setMinutes(muerte.minutos);

            let proxRespawnMin = new Date(ultimaMuerte.getTime() + parseInt(currentTimers[i].minRespawn)*60*1000)
            let proxRespawnMax = new Date(ultimaMuerte.getTime() + parseInt(currentTimers[i].maxRespawn)*60*1000)
            let estaVivo = proxRespawnMax <= new Date();
            intermedia.push({"mvp":muerte.mvp, "mapa":muerte.mapa, "vivo":estaVivo, "ultimaMuerte":ultimaMuerte.toLocaleTimeString(), "proxMuerteMin":proxRespawnMin.toLocaleTimeString(), "proxMuerteMax":proxRespawnMax.toLocaleTimeString()})
        }
      }

                  

      intermedia.sort((a,b) => {
        if(a.vivo < b.vivo){
            return 1;
        } else if (b.vivo < a.vivo){
            return -1;
        } else {
            if (a.proxMuerteMax < b.proxMuerteMax) {
                return -1;
            } else {
                return 1;
            }
        }
    })
      intermedia.map(row => cargarRowMvp(row))


    }

    reader.readAsText(file);
}

  function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
      shops = JSON.parse(contents);
    };
    reader.readAsText(file);
  }
  
  function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
  }

  function displayContentsMvps(contents) {
    var element = document.getElementById('file-content-mvp');
    element.textContent = contents;
  }
//   campo compañia solo admin en contacto y productos
//   exento en factura
//   Presupuesto campo "Condicion de venta" que pase a ser "Orden de compra". Deberia estar en el presup, factura, remito.

//   Campos obligatorio:
//     presup - plazo de pago
//     presup - transporte

//     todos los clientes -> plazo de pago 1 dias factura
//                         -> transporte precioPromedio

//     factura -> actividad comercial 


//     En factura falta palzo de pago y transporte
//     En factura corremos Diario arriba de Cliente

//     Reporte de cashflow