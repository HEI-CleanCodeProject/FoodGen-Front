import Form from "./forme";

export default function Load() {
  return (
    <>
      <div className="font-[sans-serif] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-[#333]">
        <div className="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
          <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
            <div className="max-md:text-center">
              <a href="javascript:void(0)">
                <img src="" alt="logo" className="w-52 mb-10 inline-block" />
              </a>
              <h2 className="text-4xl font-extrabold lg:leading-[50px] text-white">
                Seamless Login for Exclusive Access
              </h2>
              <p className="text-sm mt-6 text-white">
                Immerse yourself in a hassle-free login journey with our
                intuitively designed login form. Effortlessly access your
                account.
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
