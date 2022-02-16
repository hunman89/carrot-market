import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";

const Sold: NextPage = () => {
  return (
    <Layout title="Sold" canGoBack>
      <div className="flex flex-col divide-y-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="New iPhone 14"
            price={95}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
