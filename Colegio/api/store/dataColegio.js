
const listCarrera = [
  {
    codigo: '2490',
    descripcion: "BASICO",
    duracion_anios: 3,
    usuario_crea: 1
  },
  {
    codigo: '2491',
    descripcion: "BACHILLER EN COMPUTACION",
    duracion_anios: 2,
    usuario_crea: 1
  },
  {
    codigo: '2492',
    descripcion: "BACHILLER INDUSTRIAS Y PERITO CON ESPECIALIDAD EN COMPUTACION",
    duracion_anios: 3,
    usuario_crea: 1
  },
  {
    codigo: '2493',
    descripcion: "PERITO EN ADMINISTRACION DE EMPRESAS",
    duracion_anios: 3,
    usuario_crea: 1
  },
  {
    codigo: '2494',
    descripcion: "PERITO EN ELECTRONICA",
    duracion_anios: 3,
    usuario_crea: 1
  },
  {
    codigo: '2495',
    descripcion: "SECRETARIADO BILINGUE",
    duracion_anios: 2,
    usuario_crea: 1
  }
];
const listPensum = [
  {
    codigo: '2490',
    nombre: "BASICO 2020",
    descripcion: "BASICO 2020",
    usuario_crea: 1
  },
  {
    codigo: '2491',
    nombre: "BACHILLER EN COMPUTACION 2020",
    descripcion: "BACHILLER EN COMPUTACION 2020",
    usuario_crea: 1
  },
  {
    codigo: '2492',
    nombre: "BACHILLER INDUSTRIAS Y PERITO CON ESPECIALIDAD EN COMPUTACION 2020",
    descripcion: "BACHILLER INDUSTRIAS Y PERITO CON ESPECIALIDAD EN COMPUTACION 2020",
    usuario_crea: 1
  },
  {
    codigo: '2493',
    nombre: "PERITO EN ADMINISTRACION DE EMPRESAS 2020",
    descripcion: "PERITO EN ADMINISTRACION DE EMPRESAS 2020",
    usuario_crea: 1
  },
  {
    codigo: '2494',
    nombre: "PERITO EN ELECTRONICA 2020",
    descripcion: "PERITO EN ELECTRONICA 2020",
    usuario_crea: 1
  },
  {
    codigo: '2495',
    nombre: "SECRETARIADO BILINGUE 2020",
    descripcion: "SECRETARIADO BILINGUE 2020",
    usuario_crea: 1
  }
];
const listCarreraPensum = [
  {
    carreraId: 1,
    pensumId: 1,
    usuario_crea: 1
  },
  {
    carreraId: 2,
    pensumId: 2,
    usuario_crea: 1
  },
  {
    carreraId: 3,
    pensumId: 3,
    usuario_crea: 1
  },
  {
    carreraId: 4,
    pensumId: 4,
    usuario_crea: 1
  },
  {
    carreraId: 5,
    pensumId: 5,
    usuario_crea: 1
  },
  {
    carreraId: 6,
    pensumId: 6,
    usuario_crea: 1
  }
];
const listGrado = [
  {
    descripcion: "PRIMERO BASICO",
    usuario_crea: 1
  },
  {
    descripcion: "SEGUNDO BASICO",
    usuario_crea: 1
  },
  {
    descripcion: "TERCERO BASICO",
    usuario_crea: 1
  },
  {
    descripcion: "CUARTO DIVERSIFICADO",
    usuario_crea: 1
  },
  {
    descripcion: "QUINTO DIVERSIFICADO",
    usuario_crea: 1
  },
  {
    descripcion: "SEXTO DIVERSIFICADO",
    usuario_crea: 1
  }
];
const listSeccion = [
  {
    nombre: 'A',
    descripcion: "Seccion",
    usuario_crea: 1
  },
  {
    nombre: 'B',
    descripcion: "Seccion",
    usuario_crea: 1
  },
  {
    nombre: 'C',
    descripcion: "Seccion",
    usuario_crea: 1
  },
  {
    nombre: 'D',
    descripcion: "Seccion",
    usuario_crea: 1
  }
];
const listSalon = [
  {
    codigo: "0001",
    descripcion: "Salon",
    usuario_crea: 1
  },
  {
    codigo: "0002",
    descripcion: "Salon",
    usuario_crea: 1
  },
  {
    codigo: "0003",
    descripcion: "Salon",
    usuario_crea: 1
  },
  {
    codigo: "0004",
    descripcion: "Salon",
    usuario_crea: 1
  }
];
const listHorario = [
  {
    descripcion: '13:00 - 13:30',
    usuario_crea: 1
  },
  {
    descripcion: '13:30 - 14:00',
    usuario_crea: 1
  },
  {
    descripcion: '14:00 - 14:30',
    usuario_crea: 1
  },
  {
    descripcion: '14:30 - 15:00',
    usuario_crea: 1
  },
  {
    descripcion: '15:00 - 15:30',
    usuario_crea: 1
  },
  {
    descripcion: '15:30 - 16:00',
    usuario_crea: 1
  },
  {
    descripcion: '16:00 - 16:30',
    usuario_crea: 1
  },
  {
    descripcion: '16:30 - 17:00',
    usuario_crea: 1
  },
  {
    descripcion: '17:00 - 17:30',
    usuario_crea: 1
  },
  {
    descripcion: '17:30 - 18:00',
    usuario_crea: 1
  }
]
const listCurso = [
  {
    codigo: "0005801",
    nombre: "MATEMATICAS",
    usuario_crea: 1
  },
  {
    codigo: "0005802",
    nombre: "CALCULO",
    usuario_crea: 1
  },
  {
    codigo: "0005803",
    nombre: "ETICA",
    usuario_crea: 1
  },
  {
    codigo: "0005804",
    nombre: "ELECTRONICA",
    usuario_crea: 1
  },
  {
    codigo: "0005805",
    nombre: "CIENCIAS SOCIALES",
    usuario_crea: 1
  },
  {
    codigo: "0005806",
    nombre: "INGLES",
    usuario_crea: 1
  },
  {
    codigo: "0005807",
    nombre: "CIENCIAS JURIDICAS",
    usuario_crea: 1
  }
];
const listPensumCurso = [
  {
    pensumId: 1,
    cursoId: 1,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 1,
    cursoId: 2,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 1,
    cursoId: 3,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 1,
    cursoId: 4,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 1,
    cursoId: 1,
    gradoId:2,
    usuario_crea: 1
  },
  {
    pensumId: 1,
    cursoId: 2,
    gradoId:2,
    usuario_crea: 1
  },
  {
    pensumId: 1,
    cursoId: 3,
    gradoId:2,
    usuario_crea: 1
  },
  {
    pensumId: 1,
    cursoId: 4,
    gradoId:2,
    usuario_crea: 1
  },
  {
    pensumId: 1,
    cursoId: 1,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 2,
    cursoId: 2,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 2,
    cursoId: 3,
    gradoId:2,
    usuario_crea: 1
  },
  {
    pensumId: 2,
    cursoId: 1,
    gradoId:2,
    usuario_crea: 1
  },
  {
    pensumId: 2,
    cursoId: 2,
    gradoId:2,
    usuario_crea: 1
  },
  {
    pensumId: 2,
    cursoId: 3,
    gradoId:2,
    usuario_crea: 1
  },
  {
    pensumId: 2,
    cursoId: 4,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 2,
    cursoId: 5,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 3,
    cursoId: 1,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 3,
    cursoId: 2,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 3,
    cursoId: 3,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 3,
    cursoId: 4,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 3,
    cursoId: 5,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 3,
    cursoId: 6,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 3,
    cursoId: 7,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 4,
    cursoId: 1,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 4,
    cursoId: 2,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 4,
    cursoId: 3,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 4,
    cursoId: 4,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 4,
    cursoId: 5,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 4,
    cursoId: 6,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 4,
    cursoId: 7,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 5,
    cursoId: 1,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 5,
    cursoId: 2,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 5,
    cursoId: 3,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 5,
    cursoId: 4,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 5,
    cursoId: 5,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 5,
    cursoId: 6,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 5,
    cursoId: 7,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 6,
    cursoId: 1,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 6,
    cursoId: 2,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 6,
    cursoId: 3,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 6,
    cursoId: 4,
    gradoId:1,
    usuario_crea: 1
  },
  {
    pensumId: 6,
    cursoId: 5,
    gradoId:1,
    usuario_crea: 1
  }
];
module.exports = {
  listCarrera,
  listPensum,
  listCarreraPensum,
  listGrado,
  listSeccion,
  listSalon,
  listHorario,
  listCurso,
  listPensumCurso
}