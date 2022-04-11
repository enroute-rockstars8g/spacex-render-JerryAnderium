import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'reactstrap'

export const Default = () => {
  return (
    <div style={{background: '#1D1D1DFF', padding: '25px'}}>
      <Card             
        body
        inverse
        style={{
          backgroundColor: '#1D1D1D80',
          borderColor: '#1D1D1DFF',
          width: '50%',
        }}>
      <h1>
        SpaceX designs, manufactures and launches advanced rockets and spacecraft.<br>
        </br>The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.
      </h1>
      </Card>
    </div>
  )
};
