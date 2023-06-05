
import Tweet from "../../components/Tweet/Tweet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Home.module.scss";
import { selectedUsers } from "@/Redux/selectors";
import { getUsers } from "@/Redux/operations";


const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectedUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const cardsInRow = 3;
  const [nextNumber, setNextNumber] = useState(cardsInRow);

  const handleLoadMore = () => {
    setNextNumber(nextNumber + cardsInRow);
  };

  return (
    <div className={s.container}>
      <ul className={s.homePage}>
        {users?.slice(0, nextNumber).map((item) => (
          <Tweet key={item.id} {...item} />
        ))}
      </ul>
      {nextNumber < users.length && (
        <button type="button" className={s.loadBtn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;