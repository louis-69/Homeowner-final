import Image from "next/image";
import bell from "../public/images/bell.png";
import dot from "../public/images/red_dot.png";
import message from "../public/images/message.png";
import zenith from "../public/images/zenith.jpg";
import line from "../public/images/line.png";

type headerProp = {
	number: number;
	title: string;
	leftText: string;
	rightText: string;
};

function Header(props: headerProp) {
	return (
		<>
			<header className="flex min-h-[7.125rem] items-center justify-between border-b-2 px-[5rem] bg-[#FAFAFA]">
				<h1>{props.title}</h1>
				<div className="flex items-center gap-4">
					<button
						type="button"
						className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-yellow-50 "
					>
						<Image src={bell} alt="" />
						<span className="sr-only">Notifications</span>
						<div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[-0.1rem] -right-[-0.06rem] ">
							{props.number}
						</div>
					</button>

					<button
						type="button"
						className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-yellow-50 "
					>
						<Image src={message} alt="" />
						<span className="sr-only">Notifications</span>
						<div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[-0.1rem] -right-[-0.06rem] ">
							{props.number}
						</div>
					</button>
					<div>
						<Image src={line} alt="" />
					</div>
					<div className="w-10">
						<Image src={zenith} alt="" />
					</div>
					<div>
						<p className="text-[#FA790F]">Zenith bank</p>
						<p className="text-[#FB8F37]">Manager</p>
					</div>
				</div>
			</header>
			<div className="flex items-center justify-between border-b px-[5rem] py-4">
				<div>{props.leftText}</div>
				<div>{props.rightText}</div>
			</div>
		</>
	);
}

export default Header;
