// JobCard.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobCard = ({ cargo, descripcion, empresa, salario }) => {
  return (
    <Card className="job-card">
      <Card.Body>
        <Card.Title>{cargo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{empresa}</Card.Subtitle>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>Salario: {salario}</Card.Text>
        <Link to={`/postulacion/${encodeURIComponent(cargo)}`}>
          <Button variant="danger">Postularme</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
