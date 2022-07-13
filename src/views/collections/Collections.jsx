import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export const Collections = () => {
  return (
    <Table className="w-100 collectionTable">
      <thead>
        <tr>
          <th>
            <Form.Check type="checkbox" id={`default-`} />
          </th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {" "}
            <Form.Check type="checkbox" id={`default-`} />
          </td>
          <td>Json1</td>
          <td>{`{}`}</td>
        </tr>
        <tr>
          <td>
            {" "}
            <Form.Check type="checkbox" id={`default-`} />
          </td>
          <td>Json2</td>
          <td>{`{}`}</td>
        </tr>
        <tr>
          <td>
            {" "}
            <Form.Check type="checkbox" id={`default-`} />
          </td>
          <td>Json3</td>
          <td>{`{}`}</td>
        </tr>
      </tbody>
    </Table>
  );
};
