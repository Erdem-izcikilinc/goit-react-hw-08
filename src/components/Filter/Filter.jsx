import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <div className={styles.box}>
      <label>
        Find by name
        <input value={value} onChange={(e) => dispatch(changeFilter(e.target.value))} />
      </label>
    </div>
  );
}
