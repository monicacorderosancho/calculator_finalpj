
/** se declara la funcion **/


function calculomontopresta () {
	montoprestamo = parseFloat(document.getElementById("montodeprestamo").value);
	tasainteres = parseFloat(document.getElementById("tasainteres").value);
	plazodepago = parseFloat(document.getElementById("plazopago").value);
	montotal = 0

	interes = montoprestamo*(tasainteres/100)
	pagototal = (interes*plazodepago)+montoprestamo

	document.getElementById ("resultado").value = pagototal 


/** estoy obteniendo el valor del elemnento con los diferentes nomvbres*/





	}


