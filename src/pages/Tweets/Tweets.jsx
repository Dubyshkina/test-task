import { useEffect } from "react";
import Tweet from "../../components/Tweet/Tweet";
import Filter from "../../components/Filter/Filter";
import s from "./Tweets.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedFilter,
  selectedFollow,
  selectedUsers,
} from "@/Redux/selectors";
import { getUsers } from "@/Redux/operations";

const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectedUsers);
  const filter = useSelector(selectedFilter);
  const idiesArr = useSelector(selectedFollow);

  const idies = idiesArr.map((el) => el.id);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Filter />

      <ul className={s.tweets_list}>
        {filter === "followings" &&
          users
            .filter((user) => idies.includes(user.id))
            .map((user) => (
              <Tweet
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
              />
            ))}
        {filter === "follow" &&
          users
            .filter((user) => !idies.includes(user.id))
            .map((user) => (
              <Tweet
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
              />
            ))}
        {(filter === "all" || filter === "") &&
          users.map((user) => (
            <Tweet
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              followers={user.followers}
              tweets={user.tweets}
            />
          ))}
      </ul>
    </div>
  );
};

export default Tweets;