import useUser from "@libs/client/useUser";
import type { NextPage } from "next";
import Head from "next/head";
import FloatingButton from "../components/floating-button";
import Item from "../components/item";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  console.log(user);
  return (
    <Layout title="Home" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col divide-y-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (_, i) => (
            <Item
              key={i}
              id={i}
              title="New iPhone 14"
              price={95}
              comments={1}
              hearts={1}
            />
          )
        )}
        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
