import React from "react";

function HomePage({ data }) {
  return <div>取得データ ⇨ {data.res}</div>;
}
export async function getStaticProps() {
  let res = "";
  await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((json) => (res = json.email));
  const data = { res };
  return {
    props: { data },
  };
}

export default HomePage;
