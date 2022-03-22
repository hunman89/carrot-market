import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import messages from "pages/api/streams/[id]/messages";
import useUser from "@libs/client/useUser";
import { useEffect } from "react";

interface StreamMessages {
  message: string;
  id: number;
  user: {
    avatar?: string;
    id: number;
  };
}

interface StreamWithMessages extends Stream {
  messages: StreamMessages[];
}

interface StreamResponse {
  ok: boolean;
  stream: StreamWithMessages;
}

interface MessageForm {
  message: string;
}

const StreamDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const { data, mutate } = useSWR<StreamResponse>(
    router.query.id ? `/api/streams/${router.query.id}` : null,
    { refreshInterval: 1000 }
  );
  const [sendMessage, { loading, data: sendMessageData }] = useMutation(
    `/api/streams/${router.query.id}/messages`
  );
  const onValid = (form: MessageForm) => {
    if (loading) return;
    reset();
    mutate(
      (prev) =>
        prev &&
        ({
          ...prev,
          stream: {
            ...prev.stream,
            messages: [
              ...prev.stream.messages,
              {
                id: Date.now(),
                message: form.message,
                user: { ...user },
              },
            ],
          },
        } as any),
      false
    );
    sendMessage(form);
  };
  return (
    <Layout title="Stream" canGoBack>
      <div className="space-y-5 px-4">
        {data?.stream.cloudflareId ? (
          <iframe
            src={`https://iframe.videodelivery.net/${data?.stream.cloudflareId}`}
            className="w-full aspect-video rounded-md shadow-sm"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        ) : null}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {data?.stream?.name}
          </h1>
          <p className="text-3xl mt-3 text-gray-900">${data?.stream?.price}</p>
          <p className="text-base my-6 text-gray-700">
            {data?.stream?.description}
          </p>
          <div className="bg-orange-400 p-5 rounded-md overflow-scroll flex flex-col space-y-3">
            <span>Stream Keys (secret)</span>
            <span className="text-white">
              <span className="font-medium text-gray-800">URL:</span>{" "}
              {data?.stream.cloudflareUrl}
            </span>
            <span className="text-white">
              <span className="font-medium text-gray-800">Key:</span>{" "}
              {data?.stream.cloudflareKey}
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Live Chat</h1>
          <div className="px-4 py-10 h-[50vh] overflow-y-scroll pb-16 space-y-4">
            {data?.stream.messages.map((message) => (
              <Message
                key={message.id}
                message={message.message}
                reversed={message.user.id === user?.id}
              />
            ))}
            <div className="fixed w-full mx-auto max-w-md bottom-0 inset-x-0 pb-2">
              <form
                onSubmit={handleSubmit(onValid)}
                className="flex relative items-center"
              >
                <input
                  {...register("message", { required: true })}
                  type="text"
                  className="shdow-sm rounded-full w-full pr-12 border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                />
                <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                  <button className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
