/**
 * Created by Gabriel on 10/9/17.
 */
class procesarDatos {

    constructor() {
    }

    procesar(data) {
        var objetoconLetras = [];
        var i;
        for (var i = 0; i < 10; i++) {
            let letras = letter;
            for (var j = 0; j < 27; j++) {
                if (j == 26) {
                    if (data.items[i][j].timer != 0) {
                        letras[letrita] = data.items[i][j].timer / data.items[i][j].cant;
                        break
                    }
                    else {
                        letras[letrita] = 0;
                        break
                    }
                }
                var letrita = String.fromCharCode(65 + j);
                if (data.items[i][j].timer != 0)
                    letras[letrita] = data.items[i][j].timer / data.items[i][j].cant;

                else {
                    letras[letrita] = 0;
                }
            }
            letras.email = data.email;
            letras.save;
            objetoconLetras.add(letras)
        }
        //noinspection JSAnnotator,JSAnnotator
        return objetoconLetras;

    }
}