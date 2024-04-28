import React from "react";
import Head from "next/head";
//import { withRouter } from "next/router";
import Image from "next/image";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";

// const newsview = ({ router: {query}}) => {
//   const obj = query;
//   console.log(obj);
  
//   return (
//     <>
//       <Head>
//         <title>View News</title>
//         <meta name="description" content="any description" />
//       </Head>
//       <Nav />
//       <main className="w-full mb-16 flex flex-col items-center justify-center">
//         <Layout className="!pt-8">
//           <AnimatedText text={obj.ntitle} />
//           <div className="grid gap-8 grid-cols-2 md:grid-cols-1 p-3 sm:p-8">
//             <div>
//                 <Image width={1280} height={720} src={obj.imgLink} alt="" />
//             </div>
//             <div>
//                 {obj.ndesc}
//             </div>
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// };

// export default withRouter(newsview);

const newsview = () => {
  const ntitle = localStorage.getItem("aot-news-ntitle");
  const imgLink = localStorage.getItem("aot-news-imgLink");
  const ndesc = localStorage.getItem("aot-news-ndesc");
  
  return (
    <>
      <Head>
        <title>View News</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="!pt-8">
          <AnimatedText text={ntitle} />
          <div className="grid gap-8 grid-cols-2 md:grid-cols-1 p-3 sm:p-8">
            <div>
                <Image width={1280} height={720} src={imgLink} alt="" />
            </div>
            <div>
                {ndesc}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default newsview;
