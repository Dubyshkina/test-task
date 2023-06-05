/* eslint-disable react-hooks/exhaustive-deps */
import Select from "react-select";
import { filterOptions } from "./options";
import '@/components/Filter/Filter.scss';


import { useDispatch, useSelector } from "react-redux";
import { selectedFilter } from "@/Redux/selectors";
import { changeFilter } from "@/Redux/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedFilter);

  return (
    <Select
      defaultValue={filterOptions[0]}
      className="filter-container"
      classNamePrefix="filter"
      options={filterOptions}
      value={filterOptions.find((el) => el.value === filter)}
      onChange={(e) => dispatch(changeFilter(e.value))}
    />
  );
};

export default Filter;