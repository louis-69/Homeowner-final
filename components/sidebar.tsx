import Image from "next/image";
import List, { Title } from "./sidebarList";
import Logo from "../public/images/logo.png";
import Client from "../public/images/client.png";
import Integration from "../public/images/integration.png";
import Logout from "../public/images/logout.png";
import Pending from "../public/images/pending.png";
import Report from "../public/images/reports.png";
import Settings from "../public/images/settings.png";
import Support from "../public/images/support.png";
import Transaction from "../public/images/transactions.png";
import loan from "../public/images/loan.svg";
import dashboard from "../public/images/dashboard.svg";

function SideBar() {
	return (
		<>
			<aside
				className="h-full w-[16rem] flex-shrink-0 basis-[16rem] "
				aria-label="Sidebar"
			>
				<aside className="px-3 py-4 overflow-y-auto bg-[#d0650d]  lg:h-full no-scrollbar">
					<div className="h-11 w-20 ml-14 my-14">
						<Image src={Logo} alt="Logo" />
					</div>
					<ul className="space-y-2 text-white">
						<List icon={dashboard} name={"Dashboard"} />
						<Title icon="" name={"User Registration"} />
						<List icon={Client} name={"Client List"} />
						<List icon={Transaction} name={"Transaction"} />
						<Title icon="" name={"Morgage Requests"} />
						<List icon={Pending} name={"Pending Approval"} />
						<List icon={loan} name={"Loan Processing"} />
						<List icon={Report} name={"Report"} />
						<Title icon="" name={"Other"} />
						<List icon={Settings} name={"Settings"} />
						<List icon={Integration} name={"Integrations"} />
						<List icon={Support} name={"Support"} />
						<List icon={Logout} name={"Logout"} />
					</ul>
				</aside>
			</aside>
		</>
	);
}

export default SideBar;
