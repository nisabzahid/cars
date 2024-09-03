import { Table } from "reactstrap";
import NewCarsModal from "./NewCarsModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

const ListCars = ({ cars }) => {
  return (
    <Table >
      <thead>
        <tr>
          <th>Owner Name</th>
          <th>Email</th>
          <th>Document</th>
          <th>Number</th>
          <th>Registration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!cars || cars.length <= 0 ? (
          <tr>
            <td colSpan="6" align="center">
              <b>No car available, Try creating new one</b>
            </td>
          </tr>
        ) : (
          cars.map((car) => (
            <tr key={car.id}>
              <td>{car.owner_name}</td>
              <td>{car.email}</td>
              <td>{car.document}</td>
              <td>{car.number}</td>
              <td>{car.registrationDate}</td>
              <td align="center">
                <NewCarsModal car={car} />
                &nbsp;&nbsp;
                <ConfirmRemovalModal carId={car.id} />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};
export default ListCars;
