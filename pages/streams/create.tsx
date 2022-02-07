import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-5">
        <Input label="Name" name="name" />
        <Input label="Price" name="price" kind="price" />
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
