import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Poppins"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
 
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
          {/* <!-- Site Script File --> */}

	<Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
	<Script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"/>
	{/* <!-- Flowbite Js --> */}
	<Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"/>
	{/* <!-- Apex Chart JS --> */}
	<Script src="https://cdn.jsdelivr.net/npm/apexcharts"/>
	{/* <!-- Custome JS --> */}
	<Script src="assets/js/chart.js"/>
	<Script src="assets/js/script.js"/>
      </body>
    </Html>
  );
}
