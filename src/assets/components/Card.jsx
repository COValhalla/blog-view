import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function truncateContent(content) {
  if (content.length > 100) {
    return content.substring(0, 100) + '...';
  } else {
    return content;
  }
}

function CardComponent(props) {
  return (
    <Card className="mx-4 my-2" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{truncateContent(props.content)}</Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
