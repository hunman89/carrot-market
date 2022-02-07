import type { NextPage } from "next";
import FloatingButton from "../../components/floating-button";
import Layout from "../../components/layout";

const Streams: NextPage = () => {
  return (
    <Layout title="Streams" hasTabBar>
      <div className="divide-y-2 space-y-4">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div className="pt-4 px-4" key={i}>
            <div className="w-full rounded-md shadow-sm bg-slate-500 aspect-video"></div>
            <h3 className="text-gray-700 text-lg mt-2">
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
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