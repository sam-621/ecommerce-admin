export type VendyxFetch = <T>(url: string, options?: RequestInit) => Promise<FetchResponse<T>>;

type FetchResponse<T> = {
  data: T;
  message: string[];
};

export type ServerPage = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};
