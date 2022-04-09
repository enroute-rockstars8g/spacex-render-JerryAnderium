export const Ships = ({ ship }: { ship: any }) => {
  return (
    <div key={ship.id}>
      <div>
        <p>{ship.name}</p>
      </div>
        <p>Description:</p>
        <p>{ship.description}</p>
        <p>Active: {ship.active}</p>
        <p>Model: {ship.model} kg</p>
        <p>Missions: {ship.missions.name}</p>
        <p>Status: {ship.status}</p>
        <p>Type: {ship.type}</p>
        <p>Speed:{ship.speed_kn} </p>
        <p>Weight: {ship.weight_kg}</p>
    </div>
  )
}
