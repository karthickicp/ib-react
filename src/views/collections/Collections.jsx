import React, { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import styles from "../../layouts/mainLayout/mainLayout.module.css";
// import { useMemo } from "react";
export const Collections = () => {
  const collectionData = [
    { name: "Json1", value: "{}" },
    { name: "Json2", value: "{}" },
    { name: "Json3", value: "{}" },
  ];
  const selectAllRef = useRef("");
  const [collections, setCollections] = useState(collectionData);
  const [selectedCollections, setSelectedCollections] = useState([]);
  // useMemo(() => {
  //   if (selectedCollections && selectedCollections.length > 0) {
  //     return (selectAllRef.current.indeterminate = true);
  //   } else if (selectAllRef.current) {
  //     return (
  //       (selectAllRef.current.indeterminate = false),
  //       (selectAllRef.current.checked = false)
  //     );
  //   }
  // }, [selectedCollections]);
  const handleSelectCollection = (isChecked, collection) => {
    const filterSelectedCollection = selectedCollections.filter(
      (data) => data.name !== collection.name
    );
    if (isChecked) {
      setSelectedCollections((prev) => [...prev, collection]);
      selectAllRef.current.indeterminate = true;
    } else if (!isChecked && selectedCollections.length <= 1) {
      setSelectedCollections(filterSelectedCollection);
      selectAllRef.current.indeterminate = false;
    } else {
      setSelectedCollections(filterSelectedCollection);
    }
  };

  const handleSelectAllCollection = (checked) => {
    if (checked && selectedCollections.length > 0) {
      selectAllRef.current.indeterminate = false;
      selectAllRef.current.checked = false;
      setSelectedCollections([]);
    } else if (checked) {
      setSelectedCollections([...collections]);
    } else {
      setSelectedCollections([]);
    }
  };

  const deleteCollection = () => {
    const remainingCollection = collections.filter((collection) => {
      return !selectedCollections.some(
        (selectedCollection) => selectedCollection.name === collection.name
      );
    });
    setCollections(remainingCollection);
    setSelectedCollections([]);
    selectAllRef.current.indeterminate = false;
    selectAllRef.current.checked = false;
  };
  const isCollectionChecked = (collection) => {
    return selectedCollections.some(
      (selected) => selected.name === collection.name
    );
  };
  return (
    <>
      <Table className="w-100 collectionTable">
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                ref={selectAllRef}
                onChange={(e) => handleSelectAllCollection(e.target.checked)}
                disabled={collections.length === 0 ? true : false}
              />
            </th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {collections && collections.length > 0 ? (
            collections.map((collection, index) => (
              <tr key={collection.name}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id={`default-${collection.name}`}
                    onChange={(e) =>
                      handleSelectCollection(e.target.checked, collection)
                    }
                    checked={isCollectionChecked(collection, index)}
                  />
                </td>
                <td>{collection.name}</td>
                <td>{collection.value}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>
                <p className="mb-0 text-center">No Collections Found</p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {selectedCollections && selectedCollections.length > 0 && (
        <div className={styles.deleteWrapper}>
          <button className="Btn sm Btn-danger me-3" onClick={deleteCollection}>
            Delete
          </button>
          <button
            className="Btn sm Btn-outline primary"
            onClick={() => setSelectedCollections([])}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};
