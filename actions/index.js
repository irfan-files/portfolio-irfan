import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetPosts = () => {
  return useSWR("/api/v1/posts", fetcher);
};

// export const useGetData = (url) => {
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(url);
//       const result = await res.json();
//       if (res.status !== 200) {
//         setError(result);
//       } else {
//         setData(result);
//       }
//     }
//     url && fetchData();
//   }, [url]);
//   return { data, error };
// };
