import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";
import { Stream } from "@prisma/client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Button from "@components/button";
import Image from "next/image";

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
}

const Streams: NextPage = () => {
  const [page, setPage] = useState(1);
  const { data } = useSWR<StreamsResponse>(`/api/streams?page=${page}`);
  useEffect(() => {}, [page]);
  return (
    <Layout title="Streams" hasTabBar>
      <div className="divide-y-2 space-y-4">
        {data?.streams.map((stream) => (
          <Link key={stream.id} href={`/streams/${stream.id}`}>
            <a className="block pt-4 px-4">
              <div className="w-full relative overflow-hidden rounded-md shadow-sm bg-slate-500 aspect-video">
                <Image
                  layout="fill"
                  src={`https://videodelivery.net/${stream.cloudflareId}/thumbnails/thumbnail.jpg?height=270`}
                ></Image>
              </div>
              <h3 className="text-gray-700 text-lg mt-2">{stream.name}</h3>
            </a>
          </Link>
        ))}
        {page === 1 || (
          <Button
            onClick={() => {
              setPage(page - 1);
            }}
            text="Prev Page"
          />
        )}
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
          text="Next Page"
        />
        <FloatingButton href="/streams/create">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;
