import NavBar from "./utils/components/NavBar";
import ReduxToolkitContext from "./utils/context/ReduxToolkitContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head></head>
			<body
				className={`${inter.className} w-screen h-screen flex flex-col bg-slate-300`}>
				<ReduxToolkitContext>
					<NavBar />
					<div className="w-full h-full">{children}</div>
				</ReduxToolkitContext>
			</body>
		</html>
	);
}
