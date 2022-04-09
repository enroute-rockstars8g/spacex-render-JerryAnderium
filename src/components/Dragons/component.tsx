export const Dragons = ({ dragon }: { dragon: any }) => {
  return (
    <div id='dragon' key={dragon.id}>
      <div>
        <p>{dragon.name}</p>
      </div>
        <p>Description:</p>
        <p>{dragon.description}</p>
        <p>Active: {dragon.active}</p>
        <p>Crew Capacity: {dragon.crew_capacity} kg</p>
        <p>First Flight: {dragon.first_flight}</p>
        <p>Material:{dragon.material} </p>
        <p>Size in meters: {dragon.size_meters} </p>
        <p>Temp in degrees: {dragon.temp_degrees}</p>
    </div>
  );
};
