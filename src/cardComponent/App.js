// App.js
import React from 'react';
import '../style/App.css';
import JobCard from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const jobsData = [
  {
    "Código": "RS001",
    "Cargo": "Ingeniero Industrial",
    "Descripción": "Se requiere Ingeniero Industrial con mínimo 2 años de experiencia en Salud Ocupacional",
    "Empresa": "EPM",
    "Salario": "2.500.000"
  },
  {
    "Código": "RS002",
    "Cargo": "Profesor de Química",
    "Descripción": "Se requiere Químico con mínimo 3 años de experiencia en docencia.",
    "Empresa": "INSTITUCIÓN EDUCATIVA IES",
    "Salario": "1.900.000"
  },
  {
    "Código": "RS003",
    "Cargo": "Ingeniero de Desarrollo Junior",
    "Descripción": "Se requiere Ingeniero de Sistemas con mínimo 1 año de experiencia en Desarrollo de Software en tecnología JAVA.",
    "Empresa": "XRM SERVICES",
    "Salario": "2.600.000"
  },
  {
    "Código": "RS004",
    "Cargo": "Coordinador de Mercadeo",
    "Descripción": "Se necesita Coordinador de Mercadeo con estudios Tecnológicos graduado y experiencia mínima de un año.",
    "Empresa": "INSERCOL",
    "Salario": "1.350.000"
  },
  {
    "Código": "RS005",
    "Cargo": "Profesor de Matemáticas",
    "Descripción": "Se requiere Licenciado en Matemáticas o Ingeniero con mínimo 2 años de experiencia en docencia.",
    "Empresa": "SENA",
    "Salario": "1.75.000"
  },
  {
    "Código": "RS006",
    "Cargo": "Mensajero",
    "Descripción": "Se requiere mensajero con moto, con documentos al día y buenas relaciones personales.",
    "Empresa": "SERVIENTREGA",
    "Salario": "950.000"
  },
  {
    "Código": "RS007",
    "Cargo": "Cajero",
    "Descripción": "Se requiere cajero para almacén de cadena con experiencia mínima de un año, debe disponer de tiempo por cambios de turnos.",
    "Empresa": "ALMACENES ÉXITO",
    "Salario": "850.000"
  }
]
;

function App() {
  return (
    <div className="App">
      <header >
        bienvenido a Helppeople
      </header>
      <body>
        <div className="card-container">
          {jobsData.map((job) => (
            <JobCard
              key={job["Código"]}
              codigo={job["Código"]}
              cargo={job["Cargo"]}
              descripcion={job["Descripción"]}
              empresa={job["Empresa"]}
              salario={job["Salario"]}
            />
          ))}
        </div>
      </body>
    </div>
  );
}

export default App;