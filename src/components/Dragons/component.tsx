import { Card, CardHeader, CardFooter, CardTitle, CardText} from 'reactstrap'

export const Dragons = ({ dragon }: { dragon: any }) => {
  return (
    <div key={dragon.id} style={{background: '#1D1D1D', padding: '25px'}}>
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
            <p>Active: {dragon.active.toString()}</p>
          </CardHeader>
          <CardTitle>
            <h1>{dragon.name}</h1>
          </CardTitle>
          <CardText>
            <h2>Description:</h2>
            <h4>{dragon.description}</h4>
            <p>Crew Capacity: {dragon.crew_capacity} kg</p>
            <p>First Flight: {dragon.first_flight}</p>
            <p>Material: {dragon.heat_shield?.material} </p>
            <p>Size in meters: {dragon.heat_shield?.size_meters} </p>
          </CardText>
          <CardFooter>
            <a  href={dragon.wikipedia}>
              Reference
            </a>
          </CardFooter>
        </Card>
    </div>
  );
};
