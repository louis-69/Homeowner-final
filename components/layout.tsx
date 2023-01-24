import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";

type layoutType = {
	children: any;
};

export default function Layout({ children }: layoutType) {
	return (
		<section className="flex h-screen w-full">
			<SideBar />

			<div className="flex h-screen flex-grow flex-col">
				<Header
					title={"Admin Dashboard"}
					number={21}
					leftText="Dashboard"
					rightText="Getting started"
				/>

				{children}

				<Footer />
			</div>
		</section>
	);
}
