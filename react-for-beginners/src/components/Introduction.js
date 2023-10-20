function Introduction({ title, coverImg, year, genres, runtime, rating }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} alt="cover" />
      <div>개봉 연도: {year}년</div>
      <div>
        <span>장르: </span>
        {genres.map((g, i) => (
          <span key={i}>
            {g}
            {i !== genres.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      <div>러닝타임: {runtime}분</div>
      <div>평점: {rating}</div>
    </div>
  );
}

export default Introduction;
