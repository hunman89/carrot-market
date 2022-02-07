import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout title="Edit Profile" canGoBack>
      <div className=" px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500"></div>
          <label
            htmlFor="picture"
            className=" cursor-pointer py-2 px-3 border border-gray-500 shadow-sm text-sm text-gray-900 font-medium rounded-lg
           focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input label="Email address" name="email" required />
        <Input label="Phone number" name="phone" required />
        <Button text="Update profile" />
      </div>
    </Layout>
  );
};

export default EditProfile;
