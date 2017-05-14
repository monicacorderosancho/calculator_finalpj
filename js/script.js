
/** se declara la funcion **/


function calculomontopresta () {
	montoprestamo = parseFloat(document.getElementById("montodeprestamo").value);
	tasainteres = parseFloat(document.getElementById("tasainteres").value);
	cuotacapital = parseFloat(document.getElementById("cuotacapital").value);
	plazodepago = parseFloat(document.getElementById("plazopago").value);
	montotal = 0

	interes = montoprestamo*(tasainteres/100)
	cuotasemanal = interes+cuotacapital
	pagototal = cuotasemanal*plazodepago

	document.getElementById ("resultado").value = pagototal 


/** estoy obteniendo el valor del elemnento con los diferentes nomvbres*/





	}


