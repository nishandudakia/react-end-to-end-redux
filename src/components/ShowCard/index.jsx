export default function ShowCard({ show }) {
  return (
    <div className="show-card">
      <div>
        <img src={show.image.medium} />
      </div>
      <div>
        <h2>{show.name}</h2>

        <div>
          {show.rating.average ? <span>({show.rating.average}/10)</span> : ""}
        </div>
        <em>
          {show.language}, {show.premiered}
        </em>
        <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
        {/* <div>{show.summary && show.summary.replace(/<[^>]+>/g, "")}</div> */}
      </div>
    </div>
  );
}
