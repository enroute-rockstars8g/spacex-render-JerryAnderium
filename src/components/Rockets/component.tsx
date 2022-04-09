export const Rockets = ({ rocket }: { rocket: any }) => {
  return (
    <div key={rocket.id}>
      <div>
        <p>{rocket.name}</p>
      </div>
        <p>Description:</p>
        <p>{rocket.description}</p>
        <p>Active: {rocket.active}</p>
        <p>Company: {rocket.company} kg</p>
        <p>First Flight: {rocket.first_flight}</p>
        <p>Type:{rocket.type.kg}</p>
        <p>Height: {rocket.height.meters}</p>
        <p>Diameter: {rocket.diameter.meters}</p>
    </div>
  )
}
