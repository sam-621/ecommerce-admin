export const ProductCardSkeleton = () => {
  return (
    <div className="card-product flex-card flex rounded-xl border border-neutral-border bg-neutral-white h-[519px] w-[386px]">
      <article className={`flex w-full ${'flex-col'}`}>
        <div className={`flex justify-center relative ${'border-b border-neutral-border'}`}>
          <div className="flex items-center justify-center h-[192px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-[40px] h-[40px] text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        </div>
        <div className="p-16 flex flex-col justify-between h-full w-full">
          <div className="flex flex-col flex-grow">
            <div className="flex items-center w-full gap-8 mb-4">
              <hr className="opacity-50 bg-neutral-border w-[1px] h-[22px] border-none rounded-full" />
              <p className="text-neutral-light text-xs">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </p>
            </div>
            <div className="flex-grow">
              <h3 className="mb-8 text-neutral-title text-20 font-semibold">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </h3>
            </div>
            <div className="flex items-center gap-16">
              <h4 className="mb-12 text-32 font-bold">
                $<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </h4>
            </div>
          </div>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
        </div>
      </article>
    </div>
  );
};
