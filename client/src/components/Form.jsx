import React, { useContext, useState } from 'react';
import space from './store/context';

async function handleimg(image) {
  if (!image) {
      throw new Error("No image provided");
  }

  const reader = new FileReader();

  return new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Failed to read the file"));
      reader.readAsDataURL(image);
  });
}

const Form = () => {
  const {handleSubmit,useFetch} =useContext(space);

  const [title,fun1]=useState('');
  const [des,fun2]=useState('');
  const [tag,fun3]=useState('');
  const [pic,fun4]=useState('');


async function handleSubmitlocal(event){
  event.preventDefault();

  if(pic===""){window.alert("upload image");return;}
  var base64Image="";
  try {
    base64Image= await handleimg(pic);
    
} catch (error) {
    console.error("Error reading the image:", error.message);
}



  handleSubmit(title,des,tag,base64Image);




fun1("");
fun2("");
fun3("");
fun4("");


}










  return (
    <div >
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2" />
            <h2 className="text-2xl font-bold leading-tight">
              Add new Car
            </h2>
           
            <form className="mt-5"  onSubmit={handleSubmitlocal}>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input placeholder="Title" type="text" value={title} onChange={(e)=>{fun1(e.target.value)}} className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="user_name" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                  Description
                  </label>
                  <div className="mt-2">
                    <input placeholder="description" type="text" value={des} onChange={(e)=>{fun2(e.target.value)}} className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="email" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Tags
                    </label>
                  </div>
                  <div className="mt-2">
                    <input placeholder="black,x,y,z" type="text" value={tag} onChange={(e)=>{fun3(e.target.value)}} className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="password" />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <label className="text-base font-medium text-gray-900">
                      Picture
                    </label>
                  </div>
                  <div className="mt-2">
                    {/* <input className="file-input w-full max-w-xs"  value={pic} onChange={handelpic} type="file" name="avatar" /> */}
                    <input className='file-input w-full max-w-xs' type="file" name="image" multiple accept="image/*"  onChange={(e)=>{fun4(e.target.files[0])} }/>
                  </div>
                </div>
                <div>
                  <button  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" type="submit">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
