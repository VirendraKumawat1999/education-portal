import Image from "next/image"
import { useEffect, useState } from 'react';
import Modal from "./model";

export default function Table({ slug }) {

  const [data, setData] = useState([]);
  const [openRowIndex, setOpenRowIndex] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const toggleRow = (index) => {
    setOpenRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const fetchData = async () => {
    try {
      const url = '  https://tulasi-education-api.onrender.com/api/category/all/get/1';
      const params = {
        main_category: 1,
        parent: ''
        // Add your query parameters here
        // For example:
        // page: 1,
        // limit: 10
      };
      const headers = {
        // Add your headers here
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY2OGM2MjY5ZmNkZmNiZWNmMDBkYjgiLCJpYXQiOjE3MTA2NTY2MTAsImV4cCI6MTcxMDY4NTQxMH0.EtXWau4HJ2KMVOM-iEcR1GnBZJtTbi9V4DrjF_Fl9BQ',
        'Content-Type': 'application/json'
      };

      const response = await fetch(`${url}?${new URLSearchParams(params)}`, {
        headers: headers,
      });
      const jsonData = await response.json();

      console.log(jsonData.data, "jsonDatajsonData")
      setData(jsonData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  //  delete query

  const handleDelete = async (itemId) => {

    console.log(itemId, "itemIditemId")
    try {
      // Perform API call to delete the item
      // Example:
      const headers = {
        // Add your headers here
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY2OGM2MjY5ZmNkZmNiZWNmMDBkYjgiLCJpYXQiOjE3MTA2NTY2MTAsImV4cCI6MTcxMDY4NTQxMH0.EtXWau4HJ2KMVOM-iEcR1GnBZJtTbi9V4DrjF_Fl9BQ',
        'Content-Type': 'application/json'
      };
      await fetch(`https://tulasi-education-api.onrender.com/api/category/delete/${itemId}?main_category=1`, {
        method: 'DELETE',
        headers: headers,
      });

      // After deletion, refresh the table data
      // Example:
      const newData = data.filter(item => item._id !== itemId);
      setData(newData);

      // For demonstration, let's just log the deleted item ID
      console.log("Deleted item with ID:", itemId);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // State variable to control modal visibility
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    if (!showModal) {
      fetchData(); // Fetch data when showModal becomes false (modal is closed)
    }
  }, [showModal]); // useEffect depends on showModal state


  return (
    <>

      <div className="Maintable">

      <div className="Heading">
         <h1>{slug.slug}</h1>
      </div>
      <div className="Createbutton">
  <button onClick={() => setShowModal(true)} className="buttonclass">Create</button>
  {showModal &&
    <Modal onClose={() => setShowModal(false)}  title={slug.slug}>
      
    </Modal>
  }
</div>

        <div className="tabledata">
          <div className="tableHeading">
            <div></div>
            <div>Image</div>
            <div>Title</div>
            <div></div>
            <div></div>
            <div></div>

          </div>
          <div className="tablecontent">

            {data.map((item, index) => (
              <><div className="tableContentrow" key={item.id}>
                <div className="fontstyle"  onClick={() => toggleRow(index)}>
                <i
                className={`fa ${openRowIndex === index ? 'fa-angle-up' : 'fa-angle-down'}`}
                aria-hidden="true"
      
                style={{ cursor: 'pointer' }}
              ></i>
                </div>
                <div className="catImages">
                <Image src={item.image ? item.image : require('../../public/assets/images/dummy-image-square.jpg')}
                width={500} height={500} alt="" layout="responsive" />
                </div>
                <div className="CatTitle">{item.title}</div>
                <div className="fontstyle"><i class="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(item._id)} style={{ cursor: 'pointer' }}></i></div>
                <div className="fontstyle"><i class="fa fa-edit" aria-hidden="true"></i></div>
                <div><button onClick={() => setShowModal(true)} className="buttonclass">Create</button></div>
              </div>
              {openRowIndex !== null && openRowIndex === index && (
                <div class="highlighted-row">
                <div className="fontstyle">
                </div>
                <div className="catImages">
                <Image src={require('../../public/assets/images/dummy-image-square.jpg')} width={500} height={500} alt="" layout="responsive" />
                </div>
                <div className="CatTitle">{item.title}</div>
                <div className="fontstyle"><i class="fa fa-trash" aria-hidden="true"  style={{ cursor: 'pointer' }}></i></div>
                <div className="fontstyle"><i class="fa fa-edit" aria-hidden="true"></i></div>
                <div><button className="buttonclass">Create</button></div>
                </div>
                

                
                )}
                </>

            ))}
          </div>
        </div>
      </div>


    </>
  )
}