import React from 'react';
import Card from 'react-bootstrap/Card';

const RecipeCard = ({ name, thumbnail, description }) => {
  return (
    <Card className="h-100 w-25 m-3">
      <Card.Img variant="top" src={thumbnail} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="text-truncate">{name}</Card.Title>
        <Card.Text className="text-muted" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description || 'No description available.'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
