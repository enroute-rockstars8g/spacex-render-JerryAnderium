import { Card, CardHeader, CardFooter, CardTitle, CardText} from 'reactstrap'

export const Rockets = ({ rocket }: { rocket: any }) => {
  return (
    <div key={rocket.id} style={{background: '#1D1D1D', padding: '25px'}}>
        <Card    
            body
            inverse
            style={{
              backgroundColor: '#333',
              borderColor: 'black',
              width: '50%',
            }}
          >
          <CardHeader>
            <p>Active: {rocket.active.toString()}</p>
          </CardHeader>
          <CardTitle>
            <h1>{rocket.name}</h1>
          </CardTitle>
          <CardText>
            <h2>Description:</h2>
            <h4>{rocket.description}</h4>
            <p>Crew Capacity: {rocket.crew_capacity} kg</p>
            <p>First Flight: {rocket.first_flight}</p>
            <p>Company: {rocket.company} kg</p>
            <p>First Flight: {rocket.first_flight}</p>
            <p>Height: {rocket.height.meters}</p>
            <p>Diameter: {rocket.diameter.meters}</p>
          </CardText>
          <CardFooter>
            <a  href={rocket.wikipedia}>
              Reference
            </a>
          </CardFooter>
        </Card>
    </div>
  );
};
