import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useMutation from "@libs/client/useMutation";

interface EditProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  formErrors?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EditProfileForm>();
  useEffect(() => {
    if (user?.email) setValue("email", user?.email);
    if (user?.phone) setValue("phone", user.phone);
    if (user?.name) setValue("name", user.name);
  }, [user, setValue]);
  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);
  const onValid = ({ email, phone, name }: EditProfileForm) => {
    if (loading) return;
    if (email === "" && phone === "" && name === "") {
      return setError("formErrors", {
        message:
          "Email OR Phone number are required. you need to choose the one.,",
      });
    }
    editProfile({ email, phone, name });
  };
  useEffect(() => {
    if (data && !data.ok) {
      setError("formErrors", { message: data.error });
    }
  }, [data, setError]);
  return (
    <Layout title="Edit Profile" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className=" px-4 space-y-4">
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
        <Input
          register={register("name")}
          label="Name"
          name="name"
          type="text"
          required={false}
        />
        <Input
          register={register("email")}
          label="Email address"
          name="email"
          type="email"
          required={false}
        />
        <Input
          register={register("phone")}
          label="Phone number"
          name="phone"
          type="text"
          kind="phone"
          required={false}
        />
        {errors.formErrors ? (
          <span className="my-2 text-red-500 font-medium text-center block">
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button text={loading ? "Loading..." : "Update profile"} />
      </form>
    </Layout>
  );
};

export default EditProfile;
