import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import Id from "pages/api/products/[id]";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";

interface CreateForm {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const router = useRouter();
  const [createStream, { loading, data }] =
    useMutation<CreateResponse>(`/api/streams`);
  const { register, handleSubmit } = useForm<CreateForm>();
  const onValid = (form: CreateForm) => {
    if (loading) return;
    createStream(form);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data.stream.id}`);
    }
  }, [data, router]);
  return (
    <Layout title="Do Stream" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="px-4 space-y-5">
        <Input
          register={register("name", { required: true })}
          label="Name"
          type="text"
          name="name"
          required
        />
        <Input
          register={register("price", { required: true, valueAsNumber: true })}
          required
          type="text"
          label="Price"
          name="price"
          kind="price"
        />
        <TextArea
          register={register("description", { required: true })}
          label="Description"
          name="description"
          required
        />
        <Button text={loading ? "Loading..." : "Go live"} />
      </form>
    </Layout>
  );
};

export default Create;
