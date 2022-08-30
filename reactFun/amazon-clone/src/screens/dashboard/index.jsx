import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublicApi } from "../../redux/publicDataSlice";
import "./styles.css";

export default function Dashboard(props) {
  const data = useSelector((store) => store.publicData).data;
  const dispatch = useDispatch();

  useEffect(() => console.log(data), [data]);

  useEffect(() => {
    dispatch(fetchPublicApi());
  }, []);

  return <div>Random Fact :</div>;
}
