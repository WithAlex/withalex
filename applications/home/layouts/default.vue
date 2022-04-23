<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="flex flex-col justify-between h-screen">
        <Navbar />
        <main class="mb-auto">
          <Nuxt />
        </main>
        <footer>
          <div class="flex flex-col items-center mt-16">
            <div class="flex mb-3 space-x-4">
              <a class="text-sm text-gray-500 transition hover:text-gray-600"
                                                target="_blank" rel="noopener noreferrer"
                                                href="mailto:address@yoursite.com"><span class="sr-only">mail</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                   class="fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-6 w-6">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
            </div>
            <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div>withalex</div>
              <div> •</div>
              <div>© 2021</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
</template>
