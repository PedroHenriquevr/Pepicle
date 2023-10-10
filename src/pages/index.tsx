import Header from "components/Header/Header";
import SideBar from "components/LeftBar/LeftBar";
import Main from "components/main/main";

export default function Musicle() {
    return(
        <main>
        <Header/>
        <div className="flex justify-between items-center">
        <SideBar/>
        <Main/>
        </div>
        </main>
    )
}