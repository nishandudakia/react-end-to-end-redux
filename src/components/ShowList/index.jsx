import ShowCard from "../ShowCard";

export default function ShowList({account}) {



  return (
    <>{account.map((s) => (s.image ? <ShowCard show={s} key={s.id} /> : ""))}</>
  );
}
