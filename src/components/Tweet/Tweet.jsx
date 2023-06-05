import { useState } from "react";
import s from '@/components/Tweet/Tweet.module.scss';

import PropTypes from "prop-types";
import logo from "../../images/Vector.png";
import backgroundFirst from "../../images/question.png";
import backgroundSecond from "../../images/borderRing.png";
import backgroundThird from "../../images/bar.png";
import { useDispatch, useSelector } from "react-redux";
import { selectedFollow, selectedLoader } from "@/Redux/selectors";
import { removeFollow, setFollow } from "@/Redux/followersSlice";
import { putUser } from "@/Redux/operations";

const format = (value) => {
  const form = new Intl.NumberFormat("en", {
    style: "decimal",
    useGrouping: "false",
  }).format(value);

  return form;
};

const Tweet = ({
  id = null,
  avatar = null,
  followers = null,
  tweets = null,
}) => {
  const selectFollowings = useSelector(selectedFollow);
  const isLoading = useSelector(selectedLoader);
  const checker = selectFollowings.some((item) => item?.id === id);
  const [isFollowing, setIsFollowing] = useState(checker);
  const dispatch = useDispatch();

  const handleButtonClick = (id, followers) => {
    !isFollowing && dispatch(setFollow(id));
    isFollowing && dispatch(removeFollow(id));

    dispatch(
      putUser({
        id,
        followers: isFollowing ? followers - 1 : followers + 1,
      })
    );
    setIsFollowing(!isFollowing);
  };

  const buttonStyle = {
    backgroundColor: checker ? "#5CD3A8" : "#EBD8FF",
  };

  return (
    <li id={id} className={s.wrapper}>
      <div className={s.bg_logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.bg_dialog}>
        <img src={backgroundFirst} alt="dialog background" />
      </div>
      <div className={s.bg_bar}>
        <img src={backgroundThird} alt="backround bar" />
      </div>
      <div className={s.bg_ring}>
        <img src={backgroundSecond} alt="background ring" />
      </div>
      <img loading="lazy" src={avatar} alt="avatar" className={s.avatar} />
      <p className={s.tweets}>{format(tweets)} Tweets</p>
      <p className={s.followers}>{format(followers)} Followers</p>
      <button
        type="button"
        className={s.button}
        onClick={() => handleButtonClick(id, followers)}
        style={buttonStyle}
        disabled={isLoading}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </li>
  );
};

export default Tweet;

Tweet.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  tweets: PropTypes.number,
};
