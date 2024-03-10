"use client";
import React , { useState }from "react";
import Dashboard from "@/app/dashboard/page";


const Jobs = () => {
 
     const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target.files[0],"sdfsd")
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      
      formData.append('file', file);

      // Send the file to the server using axios or fetch
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };


    return (
        <>
       
            <Dashboard>
                <div className="container">
                    <div className="Heading"> 
                        <h1>Jobs</h1>
                    </div>
                    <form action="" className="jobsSection">

                        <div className="row">
                            <button style={{padding: '5px 14px'}}>Edit</button>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Title">Title</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="title" name="title" placeholder="Your title.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Description">Description..</label>
                            </div>
                            <div className="col-75">
                                <textarea id="Description" name="Description" placeholder="Write something.." style={{height:'200px'}}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Image">Image</label>
                            </div>
                            <div className="col-75">
                                <input type="file" onChange={handleFileChange} />
                                {/* <button onClick={handleUpload}>Upload</button> */}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="category ">category </label>
                            </div>
                            <div className="col-75">
                                <select id="category " name="category ">
                                    <option value="belgium">Belgium</option>
                                    <option value="canada">Canada</option>
                                    <option value="france">France</option>
                                    <option value="germany">Germany</option>
                                </select>
                            </div>
                        </div>

                        

                        <div className="row">
                            <button>Submit</button>
                        </div>

                    </form>
                </div>

            </Dashboard>
        </>
    )


}

export default Jobs;