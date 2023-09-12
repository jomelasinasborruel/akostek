import { useRouter } from "next/router";

export default function News() {
  const route = useRouter();
  const slug = route.query.id;
  console.log(slug);
  return <h1>News {slug}</h1>;
}
