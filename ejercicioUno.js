/**
 * Censo Municipal
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */

function probarEjercicio()
{
	var tipoMascota;
	var tipoPelaje;
	var mascotaNombre;
	var mascotaRaza;
	var mascotaPeso;
	var mascotaEstadoClinico;
	var mascotaTemperaturaCorporal;
	var continuar;
	var perroMasPesado;
	var acumuladorEnfermos =0;
	var acumuladorMascotas =0;
	var promedioEnfermos;
	var nombreOtraCosa;
	var animalSinPelaje;
	var menorTemperatura;
	var animalMayorTemperatura;
	var mayorTemperatura;
	var acumuladorGatos =0;
	var acumuladorPerros =0;
	var porcentajeGatosyPerros;
	var totalKilos;
	var promedioKilos;
	var pesoGatoMasLiviano;
	var nombreGatoLiviano;
	var razaGatoLiviano;

	do
	{
		tipoMascota = prompt("Ingrese el tipo de mascota: gato, perro, otra cosa");

		while (!(tipoMascota == "gato" || tipoMascota == "perro" || tipoMascota == "otra cosa"))
		{
			alert ("Ingresaste un tipo de mascota no valido");
			tipoMascota = prompt("Ingrese el tipo de mascota: gato, perro, otra cosa");
		}

		tipoPelaje = prompt("Ingrese el tipo de pelaje: corto, largo, sin pelo");

		while (!(tipoPelaje == "corto" || tipoPelaje == "largo" || tipoPelaje == "sin pelo"))
		{
			alert ("Ingresaste un tipo de pelaje no valido");
			tipoPelaje = prompt("Ingrese el tipo de pelaje: corto, largo, sin pelo");
		}

		mascotaNombre = prompt("Ingrese nombre de la mascota");

		while (isNaN(mascotaNombre)== false)
		{
			alert ("Ingresaste un tipo de nombre no valido");
			mascotaNombre = prompt("Ingrese nombre de la mascota");
		}

		mascotaRaza = prompt("Ingrese raza de la mascota");

		while (isNaN(mascotaRaza)== false)
		{
			alert ("Ingresaste un tipo de raza no valido");
			mascotaRaza = prompt("Ingrese nombre de la mascota");
		}

		mascotaPeso = prompt("Ingrese el peso de la mascota");

		while (mascotaPeso <1 || mascotaPeso > 150)
		{
			alert("Ingresaste un peso no valido");
			mascotaPeso = prompt("Ingrese el peso de la mascota");
		}

		mascotaEstadoClinico = prompt("Ingrese el estado clinico de la mascota: enfermo, internado o adopcion");

		while (!(mascotaEstadoClinico == "enfermo" || mascotaEstadoClinico =="internado" || mascotaEstadoClinico =="adopcion"))
		{
			alert("Ingresaste un estado clinico no valido");
			mascotaEstadoClinico = prompt("Ingrese el estado clinico de la mascota: enfermo, internado o adopcion");
		}

		mascotaTemperaturaCorporal = prompt("Ingrese la temperatura corporal de la mascota");

		while (!(mascotaTemperaturaCorporal>10 || mascotaTemperaturaCorporal<45))
		{
			alert("Ingresaste una temperatura corporal no valida");
			mascotaTemperaturaCorporal = prompt("Ingrese la temperatura corporal de la mascota");
		}
		
		//A

		if (tipoMascota == "perro")
		{
			perroMasPesado = mascotaPeso;

			if (mascotaPeso > perroMasPesado)
			{
				perroMasPesado = mascotaPeso;
			}
		}

		//B

		acumuladorMascotas = acumuladorMascotas +1;

		if (mascotaEstadoClinico == "enfermo")
		{
			acumuladorEnfermos = acumuladorEnfermos +1;
		}

		//C

		if (tipoMascota =="otra cosa")
		{
			nombreOtraCosa = mascotaNombre;
		}

		//D

		if (tipoPelaje =="sin pelo")
		{
			menorTemperatura = mascotaTemperaturaCorporal;
			animalSinPelaje = tipoMascota;

			if (mascotaTemperaturaCorporal < menorTemperatura)
			{
				menorTemperatura = mascotaTemperaturaCorporal;
				animalSinPelaje = tipoMascota;
			}

		}

		//E

		mayorTemperatura = mascotaTemperaturaCorporal
		animalMayorTemperatura = tipoMascota;

		if (mascotaTemperaturaCorporal > mayorTemperatura)
		{
			mayorTemperatura = mascotaTemperaturaCorporal;
			animalMayorTemperatura = mascotaNombre;
		}

		//F

		if (tipoMascota == "gato")
		{
			acumuladorGatos = acumuladorGatos +1;	
		}

		if (tipoMascota == "perro")
		{
			acumuladorPerros = acumuladorPerros +1;
		}

		//H

		totalKilos = mascotaPeso;

		if (!(totalKilos == mascotaPeso))
		{
			totalKilos = (totalKilos + mascotaPeso);
		}

		//I

		if (tipoPelaje == "sin pelo")
		{
			if (tipoMascota == "gato")
			{
				nombreGatoLiviano = mascotaNombre;
				razaGatoLiviano = mascotaRaza;
				pesoGatoMasLiviano = mascotaPeso;

				if (mascotaPeso < pesoGatoMasLiviano)
				{
					nombreGatoLiviano = mascotaNombre;
					razaGatoLiviano = mascotaRaza;
					pesoGatoMasLiviano = mascotaPeso;
				}
			}
		}

		continuar = confirm("Desea continuar?");

	} while (continuar == true);

	//A

	if (isNaN(perroMasPesado == true))
	{
		alert("El perro más pesado tiene un peso de "+ perroMasPesado +" kilos");	
	}
	
	//B

	if (isNaN(acumuladorEnfermos == true))
	{
	
		promedioEnfermos = acumuladorMascotas / acumuladorEnfermos;
		alert("El promedio de animales enfermos es de "+ promedioEnfermos);
	}

	//C

	if (isNaN(nombreOtraCosa == true))
	{
		alert("El nombre de la ultima mascota del tipo 'otra cosa' es el de "+ nombreOtraCosa);	
	}

	//D

	if (isNaN(animalSinPelaje == true))
	{
		alert("El animal sin pelaje con menor temperatura es un "+ animalSinPelaje +" y tiene una temperatura de "+ menorTemperatura +" grados");	
	}
	
	//E

	alert("El animal con mayor temperatura es del tipo "+ animalMayorTemperatura + " y tiene "+ mayorTemperatura + " grados");

	//F

	if (isNaN(acumuladorGatos == true))
	{
		porcentajeGatosyPerros = acumuladorMascotas / (acumuladorGatos + acumuladorPerros);

		alert("El porcentaje de perros y gatos por sobre el total de mascotas es de "+ porcentajeGatosyPerros);	
	}

	//H

	promedioKilos = totalKilos / acumuladorMascotas;

	alert("El promedio de kilos de peso total es de "+ promedioKilos + " kilos");
	
	//I

	if (isNaN(nombreGatoLiviano == true))
	{
		alert("El nombre del gato sin pelos mas liviano es "+ nombreGatoLiviano + " y su raza es "+ razaGatoLiviano);
	}
}