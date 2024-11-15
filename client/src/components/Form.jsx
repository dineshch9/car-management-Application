import React, { useContext } from 'react';

import space from './store/context';
const Form = () => {
  const {handleSubmit} =useContext(space);
  return (
    <div >
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2" />
            <h2 className="text-2xl font-bold leading-tight">
              Add new Car
            </h2>
           
            <form className="mt-5"  onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input placeholder="Title" type="text" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="user_name" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                  Description
                  </label>
                  <div className="mt-2">
                    <input placeholder="description" type="text" className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="email" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Tags
                    </label>
                  </div>
                  <div className="mt-2">
                    <input placeholder="black,x,y,z" type="password" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="password" />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <label className="text-base font-medium text-gray-900">
                      Picture
                    </label>
                  </div>
                  <div className="mt-2">
                    <input className="file-input w-full max-w-xs" type="file" name="avatar" />
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
