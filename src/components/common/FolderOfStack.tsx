import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { api } from "../../util/api";

export default function FolderOfStack() {
  // const [apiStack, setApiStack] = useState("");
  // const stack = useSelector((state: RootState) => state.stack);

  // useEffect(() => {
  //   const dataOfStack = api.get("");
  //   setApiStack("");
  // }, [stack]);

  // if (!apiStack) return <div>데이터가 없습니다.</div>;

  return <div>FolderOfStack</div>;
}
