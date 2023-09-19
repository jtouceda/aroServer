const express = require('express');
const axios = require('axios');
const app = express();

// Middleware para manejar cookies
app.use((req, res, next) => {
  // Define tus cookies aquí, por ejemplo:
  const cookies = {
    fluxSessionData: '2975gqvp0u0bnhlbl98567em43',
    // Agrega más cookies según sea necesario
  };

  // Construye el encabezado de las cookies
  const cookieHeader = Object.keys(cookies)
    .map(key => `${key}=${cookies[key]}`)
    .join('; ');

  req.headers.cookie = cookieHeader;
  next();
});

// Ruta para realizar la solicitud a google.com
app.get('/shops', async (req, res) => {
  try {
    // Realiza la solicitud HTTP GET a google.com
    const response = await axios.get('https://www.adventuresro.com/?module=vending&action=viewshop&id=37', {
      headers: {
        // Pasa las cookies en el encabezado de la solicitud
        Cookie: req.headers.cookie,
      },
    });

    // Devuelve la respuesta de google.com
    res.send(response.data);
  } catch (error) {
    // Maneja los errores aquí
    console.error(error);
    res.status(500).send('Error al realizar la solicitud.');
  }
});

app.get('/votar', async (req, res) => {
    let urls = [
        "https://www.adventuresro.com/index.php?module=voteforpoints&action=vote&sid=1",
        "https://www.adventuresro.com/index.php?module=voteforpoints&action=vote&sid=3",
        "https://www.adventuresro.com/index.php?module=voteforpoints&action=vote&sid=4",
        "https://www.adventuresro.com/index.php?module=voteforpoints&action=vote&sid=5",
        "https://www.adventuresro.com/index.php?module=voteforpoints&action=vote&sid=6",
      ];
    try {
      // Realiza la solicitud HTTP GET a google.com
      const requests = urls.map((url) => axios.get(url, {
        headers: {
          // Pasa las cookies en el encabezado de la solicitud
          Cookie: req.headers.cookie,
        },
      }));

      axios.all(requests).then((responses) => {
        res.send("Vota2");
      });
    } catch (error) {
      // Maneja los errores aquí
      console.error(error);
      res.status(500).send('Error al realizar la solicitud.');
    }
  });

  app.get('/bosses', async (req, res) => {

    try {
        // Realiza la solicitud HTTP GET a google.com
        const response = await axios.get('https://discord.com/api/v9/channels/977962199970640012/messages?limit=100', {
        headers: {
          // Pasa las cookies en el encabezado de la solicitud
          authorization: "MzU5NTU1OTc4MzYzOTI4NTc4.GC_Kh4.OXFP02XJOwA_kytbIkl-DxoKuWDVrqANxt53gI",
          'x-discord-locale': "en-US",
          Cookie: "__dcfduid=439be900f35e11eda45dbdc632787002; __sdcfduid=439be901f35e11eda45dbdc6327870023949880ffff818e3cb40c5d5101f87d787fd3b02b11b227975ffdbfd36fb5794",
          "sec-ch-ua-platform": "macOS",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
          "accept-language": "en-US,en;q=0.9,it;q=0.8,de;q=0.7,es;q=0.6,pt;q=0.5"
        },
      });
  
      // Devuelve la respuesta de google.com
      res.send(response.data);
    } catch (error) {
      // Maneja los errores aquí
      console.error(error);
      res.status(500).send('Error al realizar la solicitud.');
    }
  });

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

