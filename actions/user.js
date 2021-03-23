import useSWR from "swr";
import { fetcher } from "@/actions";

export const useGetUser = () => {
  const { data, ...rest } = useSWR("/api/v1/me", fetcher);
  return { data: !data, ...rest };
};
