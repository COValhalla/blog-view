import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    <Card className="mx-4 my-2" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
