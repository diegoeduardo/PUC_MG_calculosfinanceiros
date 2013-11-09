function existeElemento(v, elemento) { 
        for (i = 0; i < v.length; i++) { 
            if (v[i] == elemento) { 
                return true; 
            } 
        } 
        return false; 
} 
 
function megaSena() { 
        var v = new Array(); 
        var valorMax = 60, valorSorteado, i = 0; 
        var resp = ""; 
        do { 
            valorSorteado = 1 + (Math.random() * valorMax); 
            if (!existeElemento(v, valorSorteado)) { 
                v[i] = Math.round(valorSorteado); 
                i++; 
            } 
        } while (i < 6); 
        v.sort(); 
        for (i = 0; i < 6; i++) { 
            resp += v[i] + " "; 
        } 
        document.getElementById('numeros').innerHTML=resp; 
}