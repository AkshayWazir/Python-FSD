import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublicApi, fetchPublicPopData } from "../../redux/publicDataSlice";
import "./styles.css";

export default function Dashboard(props) {
  const data = useSelector((store) => store.publicData).data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublicApi());
    dispatch(fetchPublicPopData({ drilldowns: "Nation", measures: "Population" }));
  }, []);

  return <div>Random Fact :</div>;
}
