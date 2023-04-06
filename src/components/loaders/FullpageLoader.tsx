import { useSelector } from "react-redux";
import { AppState } from "../../state/store";

export default function FullpageLoader() {
  const { pageLoader } = useSelector((state: AppState) => state.misc);
  return pageLoader ? (
    <div className="flex items-center justify-center fullpage-loader">
      <div className="text-center">Processing...</div>
    </div>
  ) : null;
}
