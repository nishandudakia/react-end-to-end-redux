import { useEffect, useState } from "react";
import ShowList from "../ShowList";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../action-creators";
import { bindActionCreators } from "redux";

export default function SearchWidget() {
  const [inputValue, setInputValue] = useState("");
  const [searchString, setSearchString] = useState("Married At First Sight");

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const {depositMoney} = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchString}`
      );
      const rawData = await response.json();
      const data = rawData.map((s) => s.show);
      depositMoney(data)
    }
    searchAPI();
  }, [searchString]);


  function handleInput(e) {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputValue} required />
        <input type="submit" value="Search" />
      </form>

      <ShowList account={account} />
    </>
  );
}
