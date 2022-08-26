import { useNavigate } from "react-router-dom";

const FullPageError = ({ errorMsg }: { errorMsg: string }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full h-full grid pt-16">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto w-full max-w-5xl mx-auto text-white">
        <div
          className="bg-dark-800 text-center w-full py-16 px-7 md:px-[107px]"
          style={{ zoom: "85%" }}
        >
          <p className="text-2xl md:text-3xl mb-10 font-medium">Oops!</p>

          <p className="text-xl md:text-2xl font-medium text-muted">
            {errorMsg}
          </p>
          <span
            onClick={() => navigate("/", { replace: true })}
            className="text-loozr-purple"
          >
            Home
          </span>
        </div>
      </div>
    </div>
  );
};
export default FullPageError;
