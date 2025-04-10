export const CvButton = () => {
  return (
    <div className="mt-8 md:mt-0">
      <a
        href="/curriculos/Nicolas-Fernandes-Curriculo.pdf"
        download="Nicolas-Fernandes-Curriculo.pdf"
        className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold font-mono tracking-tighter text-lg rounded-md transition-all duration-300 border-2 border-yellow-400 hover:border-yellow-300 shadow-lg hover:shadow-yellow-400/30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        BAIXAR CV
      </a>
    </div>
  );
};
