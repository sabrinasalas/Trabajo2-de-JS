const latas473 = [
  {
    marca: "Andes",
    precio: 1500,
  },
  {
    marca: "Budweiser",
    precio: 1200,
  },
  {
    marca: "Brahma",
    precio: 1250,
  },
  {
    marca: "Quilmes Stout",
    precio: 1300,
  },
  {
    marca: "Schneinder",
    precio: 1275,
  },
  {
    marca: "Wasteiner",
    precio: 1050,
  },
  {
    marca: "Isembek",
    precio: 1000,
  },
  {
    marca: "Patagonia Amber",
    precio: 1700,
  },
  {
    marca: "Coca Cola",
    precio: 900
  }
];

function mostrarLatas473() {
  latas473.forEach((lata) => {
    console.log(`${lata.marca} \n$${lata.precio}`);
  });
  console.log("-----------------------------");
}

function filtrarPorMarca(marcaUsuario) {
  const latas473Filtradas = latas473.filter((lata) => lata.marca.toLowerCase() === marcaUsuario.toLowerCase());
  if (latas473Filtradas.length === 0) {
    alert(`No disponemos de ninguna bebida de la marca ${marcaUsuario}`);
  } else {
    mostrarLatas473(latas473Filtradas);
  }
}

function filtrarPorPrecio(precioMax) {
  const latas473Filtradas = latas473.filter((lata) => lata.precio <= precioMax);
  if (latas473Filtradas.length === 0) {
    alert(`No disponemos de ninguna bebida por debajo de $${precioMax}`);
  } else {
    mostrarLatas473(latas473Filtradas);
  }
}

function mostrarMenu() {
  let opcion;

  do {
    opcion = prompt(
      "Bienvenido a Distribuidora Moron. Ingrese una opción: \n\n1 - Mostrar bebidas disponibles\n2 - Buscar por marca\n3 - Filtrar por precio\n4 - Salir\n\n(Abra la consola para ver los resultados)"
    );
    switch (opcion) {
      case "1":
        mostrarLatas473(latas473);
        break;
      case "2":
        const marcaUsuario = prompt("¿Qué marca desea buscar?");
        filtrarPorMarca(marcaUsuario);
        break;
      case "3":
        const precioMax = parseInt(prompt("Ingrese el precio máximo"));
        filtrarPorPrecio(precioMax);
        break;
      case "4":
        alert("Gracias por visitarnos :)");
        break;
      default:
        alert("Opción incorrecta");
        break;
    }
  } while (opcion !== "4");
}

mostrarMenu();
