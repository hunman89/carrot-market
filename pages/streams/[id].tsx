import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";

const StreamDetail: NextPage = () => {
  return (
    <Layout title="Stream" canGoBack>
      <div className="space-y-5 px-4">
        <div className="w-full  rounded-md shadow-sm bg-slate-500 aspect-video"></div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <p className="text-3xl mt-3 text-gray-900">$140</p>
          <p className="text-base my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Live Chat</h1>
          <div className="px-4 py-10 h-[50vh] overflow-y-scroll pb-16 space-y-4">
            <Message message="Hi how much are you selling them for?" />
            <Message message="I want ￦20,000" reversed />
            <Message message="Crazy?" />
            <Message message="I want ￦20,000" reversed />
            <form className="fixed w-full mx-auto max-w-md bottom-0 inset-x-0 pb-2">
              <div className="flex relative items-center">
                <input
                  type="text"
                  className="shdow-sm rounded-full w-full pr-12 border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                />
                <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                  <button className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    &rarr;
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
