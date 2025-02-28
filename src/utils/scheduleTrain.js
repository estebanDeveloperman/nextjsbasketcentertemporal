const currentYear = new Date().getFullYear();

const entrenamientos = [
  {
    categoria: "Premini",
    genero: "Damas",
    dias: ["Lunes", "Miércoles", "Viernes"],
    horaInicio: "18:45",
    horaFin: "20:15",
    nacimiento: [currentYear - 10, currentYear - 9, currentYear - 8], // 8-10 años
  },
  {
    categoria: "Premini",
    genero: "Varones",
    dias: ["Martes", "Jueves"],
    horaInicio: "18:45",
    horaFin: "20:15",
    nacimiento: [currentYear - 10, currentYear - 9, currentYear - 8],
  },
  {
    categoria: "Mini",
    genero: "Damas",
    dias: ["Martes", "Jueves", "Viernes"],
    horaInicio: "18:45",
    horaFin: "20:15",
    nacimiento: [currentYear - 12, currentYear - 11], // 11-12 años
  },
  {
    categoria: "Mini",
    genero: "Varones",
    dias: ["Lunes", "Miércoles"],
    horaInicio: "18:45",
    horaFin: "20:15",
    nacimiento: [currentYear - 12, currentYear - 11],
  },
  {
    categoria: "Menores",
    genero: "Damas",
    dias: ["Lunes", "Miércoles", "Viernes"],
    horaInicio: "20:15",
    horaFin: "21:15",
    nacimiento: [currentYear - 13], // 13 años
  },
  {
    categoria: "Menores",
    genero: "Varones",
    dias: ["Martes", "Jueves"],
    horaInicio: "20:15",
    horaFin: "21:15",
    nacimiento: [currentYear - 13],
  },
  {
    categoria: "Medianos",
    genero: "Varones",
    dias: ["Lunes", "Miércoles", "Viernes"],
    horaInicio: "20:15",
    horaFin: "21:15",
    nacimiento: [currentYear - 15, currentYear - 14], // 14-15 años
  },
  {
    categoria: "Medianos",
    genero: "Varones",
    dias: ["Martes", "Jueves"],
    horaInicio: "21:15",
    horaFin: "22:30",
    nacimiento: [currentYear - 15, currentYear - 14],
  },
  {
    categoria: "Mayores",
    genero: "Damas",
    dias: ["Lunes", "Miércoles", "Viernes"],
    horaInicio: "21:00",
    horaFin: "22:30",
    nacimiento: [currentYear - 17, currentYear - 16], // 16-17 años
  },
  {
    categoria: "Mayores",
    genero: "Varones",
    dias: ["Martes", "Jueves"],
    horaInicio: "21:15",
    horaFin: "22:30",
    nacimiento: [currentYear - 17, currentYear - 16],
  },
  {
    categoria: "Juveniles",
    genero: "Varones",
    dias: ["Lunes", "Miércoles"],
    horaInicio: "21:15",
    horaFin: "22:30",
    nacimiento: [currentYear - 19, currentYear - 18, currentYear - 17], // 17-19 años
  },
  {
    categoria: "Juveniles",
    genero: "Varones",
    dias: ["Viernes"],
    horaInicio: "21:00",
    horaFin: "22:30",
    nacimiento: [currentYear - 19, currentYear - 18, currentYear - 17],
  },
];

export default entrenamientos;
