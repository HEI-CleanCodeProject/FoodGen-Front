export default function load() {
  return (
    <>
      <div class="font-[sans-serif] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-[#333]">
        <div class="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
          <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
            <div class="max-md:text-center">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui-white.svg"
                  alt="logo"
                  class="w-52 mb-10 inline-block"
                />
              </a>
              <h2 class="text-4xl font-extrabold lg:leading-[50px] text-white">
                Seamless Login for Exclusive Access
              </h2>
              <p class="text-sm mt-6 text-white">
                Immerse yourself in a hassle-free login journey with our
                intuitively designed login form. Effortlessly access your
                account.
              </p>
            </div>
            <form class="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full">
              <h3 class="text-3xl font-extrabold mb-12 max-md:text-center">
                Log in
              </h3>
              <div>
                <input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
                  placeholder="Password"
                />
              </div>
              <div class="!mt-10">
                <button
                  type="button"
                  class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-[#222] focus:outline-none"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}