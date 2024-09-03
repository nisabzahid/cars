import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { CAR_API_URL } from "../constants/CAR_API_URL";
import { useAppContext } from "../context/AppContext";

const NewCarForm = (props) => {
  const initialData = { id: 0, owner_name: "", email: "", document: "", number: "" };
  const [formData, setFormData] = useState(initialData);
  const { getCars } = useAppContext();

  useEffect(() => {
    if (props.car) {
      const { id, owner_name, email, document, number } = props.car;
      setFormData({ id, owner_name, email, document, number });
    }
  }, [props.car]);

  const handleChange = (e)=>{
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(e.target, "e.target")
    // console.log(formData, "formData")
  }
  const handleAddCar = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(CAR_API_URL, formData);
      if ((resp.statusText = "OK")) {
        setFormData(initialData);
        props.toggle();
        getCars();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditCar = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put(
        `${CAR_API_URL}/${props.car.id}`,
        formData
      );
      if ((resp.statusText = "OK")) {
        setFormData(initialData);
        props.toggle();
        getCars();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={props.car ? handleEditCar : handleAddCar}>
      <FormGroup>
        <Label for="owner_name">Owner Name:</Label>
        <Input
          type="text"
          name="owner_name"
          required
          onChange={handleChange}
          value={formData.owner_name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={formData.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="document">Document:</Label>
        <Input
          type="text"
          name="document"
          required
          onChange={handleChange}
          value={formData.document}
        />
      </FormGroup>
      <FormGroup>
        <Label for="number">number:</Label>
        <Input
          type="number"
          name="number"
          required
          onChange={handleChange}
          value={formData.number}
        />
      </FormGroup>
      <Button>Send</Button>
    </Form>
  );
};
export default NewCarForm;
