function Error() {
  return (
    <div class="text-center h-screen pt-[20rem]">
      <h1 class="mb-4 text-8xl font-semibold text-red-500 ">404</h1>
      <p class="mb-4 text-xl text-gray-600">
        Oops! l'impression que tu es perdu.
      </p>
      <div class="animate-bounce">
        <svg
          class="mx-auto h-20 w-20 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p class="mt-4 text-lg text-gray-600">
        Retournons à
        <a href="/" class="text-green-500 text-lg mx-1">
          l'accueil
        </a>
        .
      </p>
    </div>
  );
}

export default Error;
