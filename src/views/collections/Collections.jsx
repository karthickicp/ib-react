import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import styles from "../../layouts/mainLayout/mainLayout.module.css";
export const Collections = () => {
  const collectionData = [
    { name: "Json1", value: "{}" },
    { name: "Json2", value: "{}" },
    { name: "Json3", value: "{}" },
  ];
  const [collections, setCollections] = useState(collectionData);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const handleSelectCollection = (isChecked, collection) => {
    const filterSelectedCollection = selectedCollections.filter(
      (data) => data.name !== collection.name
    );
    if (isChecked) {
      setSelectedCollections((prev) => [...prev, collection]);
    } else {
      setSelectedCollections(filterSelectedCollection);
    }
  };

  const deleteCollection = () => {
    const remainingCollection = collectionData.filter((data) =>
      selectedCollections.forEach(
        (selectedCollection) => data.name !== selectedCollection.name
      )
    );
    console.log(remainingCollection);
  };
  return (
    <>
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
          {collections.map((collection, index) => (
            <tr key={collection.name}>
              <td>
                <Form.Check
                  type="checkbox"
                  id={`default-${collection.name}`}
                  onChange={(e) =>
                    handleSelectCollection(e.target.checked, collection)
                  }
                />
              </td>
              <td>{collection.name}</td>
              <td>{collection.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedCollections && selectedCollections.length > 0 && (
        <div className={styles.deleteWrapper}>
          <button className="Btn sm Btn-danger me-3" onClick={deleteCollection}>
            Delete
          </button>
          <button className="Btn sm Btn-outline primary">Cancel</button>
        </div>
      )}
    </>
  );
};
