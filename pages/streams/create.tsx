import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Create: NextPage = () => {
  return (
    <Layout title="Do Stream" canGoBack>
      <form className="px-4 space-y-5">
        <Input label="Name" name="name" />
        <Input label="Price" name="price" kind="price" placeholder="0.00" />
        <TextArea label="Description" name="description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
