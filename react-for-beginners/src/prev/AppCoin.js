import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState({});
  const [money, setMoney] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => setMoney(event.target.value);
  const onSelect = (event) => {
    const selectedIndex = event.target.selectedIndex; // 선택된 옵션의 인덱스
    const selectedOption = event.target[selectedIndex];
    setSelectCoin(coins.find((coin) => coin.id === selectedOption.id));
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            The Money You Have:{" "}
            <input value={money} onChange={onChange} type="number" />
          </div>
          <br />
          <div>
            Coins You'll Have:{" "}
            <select onChange={onSelect}>
              {coins.map((coin) => (
                <option key={coin.id} id={coin.id}>
                  {coin.name} ({coin.symbol}: ${coin.quotes.USD.price})
                </option>
              ))}
            </select>
          </div>
          <br />
          {Object.keys(selectCoin).length === 0 ? null : (
            <strong>
              You can get {money / selectCoin.quotes.USD.price}{" "}
              {selectCoin.name}
            </strong>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
