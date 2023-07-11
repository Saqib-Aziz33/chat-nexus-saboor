import { Link } from "react-router-dom";
import Chat from "../components/Group/Chat";

const style = {
  appContainer: "w-full max-w-[728px] mx-auto text-center",
  sectionContainer:
    "flex flex-col h-[90vh] bg-gray-100 shadow-xl border relative rounded-xl",
};
function Group() {
  return (
    <div className="group min-h-screen flex flex-col justify-center items-center">
      <div className={style.appContainer}>
        <section className={style.sectionContainer}>
          <Link className=" p-2 text-sm underline" to={"/"}>
            Back
          </Link>
          <Chat />
        </section>
      </div>
    </div>
  );
}
export default Group;
