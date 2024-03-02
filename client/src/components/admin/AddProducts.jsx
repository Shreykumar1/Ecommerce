import React, { useState } from 'react'
import { customFetch } from '../../utils';


const AddProducts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const addImage = async (event) => {
    event.preventDefault();
    // console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append('image',selectedImage)
    try {
      const resp = await customFetch.post(`/products/uploads`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const data = await resp.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>AddProducts
        <div className=""> 
        <input
        type="file"
        name="myImage"
        // onChange={addImage}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
     </div>
     <button onClick={addImage}>Click</button>
    </div>
  )
}

export default AddProducts