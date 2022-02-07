import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-5">
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-500"
            htmlFor="name"
          >
            Name
          </label>
          <div className="rounded-md relative flex items-center shadow-sm">
            <input
              id="name"
              type="text"
              className="appearance-none py-2 w-full px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-500"
            htmlFor="price"
          >
            Price
          </label>
          <div className="rounded-md relative flex items-center shadow-sm">
            <div className=" absolute left-0 pl-3 pointer-events-none flex items-start justify-center">
              <span className=" text-gray-500 text-sm">$</span>
            </div>
            <input
              id="price"
              type="text"
              placeholder="0.00"
              className="appearance-none pl-7 w-full px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            <div className=" absolute right-0 pointer-events-none pr-3 flex items-center">
              <span className=" text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-500"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className=" appearance-none mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:outline-none focus:border-orange-500"
            id="description"
            rows={4}
          />
        </div>
        <Button text="Go live" />
      </div>
    </Layout>
  );
};

export default Create;
