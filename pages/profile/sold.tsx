import type { NextPage } from "next";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Sold: NextPage = () => {
  return (
    <Layout title="Sold" canGoBack>
      <div className="flex flex-col divide-y-2">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
