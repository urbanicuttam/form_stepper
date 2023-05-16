import { Table, Form, Input } from "react-bootstrap";
import TableData from "./TableData";


const headers = ["", ...Object.keys(TableData)]; 

const ThData = () => {
    return headers.map((name)=>{
        return <th key = {name}>{name}</th>
    })
}

export const TargetSchema = () => {
  return (
    <Table responsive>
      <thead>
        <tr>{ThData()}</tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Form.Check></Form.Check>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Form.Select aria-label="Default select example">
              <option value="1">Datatype1</option>
              <option value="2">Datatype2</option>
              <option value="3">Datatype3</option>
            </Form.Select>
          </td>
          <td>
            <Form.Check></Form.Check>
          </td>
          <td>
            <Form.Check></Form.Check>
          </td>

          <td>
            <Form.Control></Form.Control>
          </td>
        </tr>
        {/* <tr>
          <td>2</td>
          {Array.from({ length: 6 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 6 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr> */}
      </tbody>
    </Table>
  );
};
