import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Formulario = ({ show, titulo }) => {
  const [formData, setFormData] = useState({
    tipoId: '',
    cedula: '',
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    profesion: '',
    aspiracionSalarial: '',
    correoElectronico: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Validaciones
    if (
      formData.tipoId === '' ||
      formData.cedula === '' ||
      formData.nombres === '' ||
      formData.apellidos === '' ||
      formData.fechaNacimiento === '' ||
      formData.profesion === '' ||
      formData.aspiracionSalarial === '' ||
      formData.correoElectronico === ''
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validación de correo electrónico usando una expresión regular simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correoElectronico)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }

    // Validación de aspiración salarial como número
    const aspiracionSalarialNumber = parseFloat(formData.aspiracionSalarial.replace(',', ''));
    if (isNaN(aspiracionSalarialNumber)) {
      alert('Ingrese una aspiración salarial válida.');
      return;
    }

    // Aquí puedes realizar cualquier lógica adicional con los datos del formulario
    console.log('Datos del formulario:', formData);
  };


  return (
    <Card className={`formulario-card ${show ? 'visible' : 'oculto'}`}>
      <Card.Body>
        <Form>
          {/* Tipo de ID (seleccionable) */}
          <Form.Group controlId="formTipoId">
            <Form.Label>Tipo de ID</Form.Label>
            <Form.Control
              as="select"
              name="tipoId"
              value={formData.tipoId}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option value="cedula">Cédula</option>
              <option value="otro">Otro</option>
              {/* Agrega más opciones según tus necesidades */}
            </Form.Control>
          </Form.Group>

          {/* Cédula */}
          <Form.Group controlId="formCedula">
            <Form.Label>Cédula</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su cédula"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Nombres */}
          <Form.Group controlId="formNombres">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese sus nombres"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Apellidos */}
          <Form.Group controlId="formApellidos">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese sus apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Fecha de Nacimiento */}
          <Form.Group controlId="formFechaNacimiento">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Profesión */}
          <Form.Group controlId="formProfesion">
            <Form.Label>Profesión</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su profesión"
              name="profesion"
              value={formData.profesion}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Aspiración Salarial */}
          <Form.Group controlId="formAspiracionSalarial">
            <Form.Label>Aspiración Salarial</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su aspiración salarial"
              name="aspiracionSalarial"
              value={formData.aspiracionSalarial}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Correo Electrónico */}
          <Form.Group controlId="formCorreoElectronico">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo electrónico"
              name="correoElectronico"
              value={formData.correoElectronico}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <div className="formulario-buttons" style={{ marginTop: '20px' }}>
          <Button variant="success" style={{ width: '100%' }} onClick={handleSubmit}>
            Postularme Ahora
          </Button>
          <Link to={`/`} style={{ width: '100%', marginTop: '10px' }}>
          <Button  variant="danger" style={{ width: '100%' }}>Cerrar</Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Formulario;

