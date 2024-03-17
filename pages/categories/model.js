
import ReactDOM from 'react-dom'; // Add this import statement
import React , { useState,useEffect }from "react";

import axios from "axios";
import slugify from 'slugify'; // Import slugify library



const Modal = ({ onClose,children, title }) => {

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };



    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: 1,
        file: null,
        slug: '',
      });
    
      const [file, setFile] = useState(null);
      
      useEffect(() => {
        // This effect runs when 'file' state is updated
        // Update 'formData.file' when 'file' state changes
        setFormData(prevFormData => ({
          ...prevFormData,
          file: file
        }));
      }, [file]);
    
    
      const [loading, setLoading] = useState(false); // State to track loading status
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        let slug = formData.slug;
        
         // Check if the changed field is the title field
      if (name === 'title') {
        // Generate new slug only if the changed field is the title field
        slug = generateSlug(value);
      }
      
        
        setFormData({
          ...formData,
          [name]: value,
          slug:slug
        });
      };
    
      const handleFileChange = (e) => {
        console.log("e",e.target.files[0])
        setFile(e.target.files[0]);
      };
      const areFieldsFilled = () => {
        console.log(formData,"")
        const filled = Object.values(formData).every(value => {
          console.log(value);
          return !!value;
        });
        return filled;
      };
    
      const handleSubmit = async (e) => {
    
        e.preventDefault();
        console.log("Submit button clicked!",file);
       
         // If all mandatory fields are not filled, prevent form submission
         if (!areFieldsFilled()) {
            console.log("sdfsdd",areFieldsFilled())
            return;
          }
          
          try {
            setLoading(true);
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("slug", formData.slug); // Append slug once
            formDataToSend.append("description", formData.description);
            formDataToSend.append("parent", '');
            formDataToSend.append("image", file);
            formDataToSend.append("main_category", 1);
            formDataToSend.append("meta_title", '');
            formDataToSend.append("meta_description", '');
            formDataToSend.append("main_category", 1);
          
            console.log("data", formDataToSend);
          
            // Send the form data to the server using axios
            const response = await axios.post(
              "https://tulasi-education-api.onrender.com/api/category/create",
              formDataToSend,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY2OGM2MjY5ZmNkZmNiZWNmMDBkYjgiLCJpYXQiOjE3MTA2NTY2MTAsImV4cCI6MTcxMDY4NTQxMH0.EtXWau4HJ2KMVOM-iEcR1GnBZJtTbi9V4DrjF_Fl9BQ",
                },
              }
            );
          
            if (response.status === 200) {
              setFormData({
                title: "",
                description: "",
                category: "",
                file: null,
                slug: "",
              });
          
              setLoading(false); // Set loading back to false after submission
              console.log("File uploaded successfully:", response.data);
            } else {
              console.error("Error uploading file. Unexpected response:", response);
            }
          } catch (error) {
            console.error("Error uploading file:", error);
          }
      };
      
    // Function to generate slug from title
    const generateSlug = (title) => {
        return '-' + slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g });
      };

    const modalContent = (

        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        
                       <div> 
                       <a href="#" onClick={handleCloseClick}>
                       <i class="fa fa-window-close" aria-hidden="true" style={{color:'#000'}}></i>
                       </a>
                       </div>

                        {title && <h1>{title}</h1>}
                    </div>
                    
                    <div className="modal-body">
                        <form className="jobsSection" onSubmit={handleSubmit}>
                            <div class="modal-body">
                                <div className='formdata' style={{width:'100%',display:'flex'}}>
                                    <div class="form-group"  style={{ width: '80%',marginRight: '5px'}}>
                                    <label htmlFor="title">Title</label>
                                    <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Your title.."
                                  />
                                    </div>

                                    <div class="form-group" style={{ width: '80%',marginLeft: '5px'}}>
                                    <label htmlFor="slug">Slug</label>
                                    <input type="text" id="slug" name="slug" value={formData.slug} readOnly style={{backgroundColor:'#cccccca8'}}/>
                                    </div>
                                </div>

                                <div className='formdata' style={{width:'100%',display:'flex'}}>
                                    <div class="form-group"  style={{ width:'48%',marginRight: '5px'}}>
                                       <label htmlFor="image">Image</label>
                                       <input
                                       type="file"
                                       id="image"
                                       name="image"
                                       onChange={handleFileChange}
                                     />
                                    </div>

                                    <div class="form-group" style={{ width: '80%',marginLeft: '5px'}}>
                                    
                                    <label htmlFor="description">Description</label>

                                    <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Write something.."
                                    style={{ height: "100px" }}
                                  ></textarea>
                                    
                                    </div>
                                </div>

                                <div className='formdata' style={{width:'100%'}}>
                                    <div class="form-group">
                                    <label htmlFor="category">Parent Category</label>
                                    <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                  >
                                    <option value="-1" disabled defaultValue>
                                      default parent category
                                    </option>
                                  </select>
                                    </div>
                                </div>

                               

                            </div>
                            <div class="modal-footer border-top-0 d-flex justify-content-center">
                            <button type="submit" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                          </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal