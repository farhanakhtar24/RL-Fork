export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className="w-full h-full overflow-hidden">{children}</section>
	);
}
