import { content } from "@/app/content/page";
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<section className="gap-4 py-8 md:py-10 max-w-[1280px]">
			<div className="grid grid-cols-12 px-2 items-center gap-8">
				<div className="col-span-6 text-left">
					<h1 className="text-6xl font-bold tracking-tight">{content.mainTitle}</h1>
					<p className="text-2xl font-base tracking-tight py-6">{content.highlightedTitle}</p>
					<Button>
					{content.buttonText}
					</Button>
				</div>
				<div className="col-span-6">
					<img className="rounded-lg" src="/placeholder.svg" alt="An SVG of an eye" />

				</div>
			</div>
		</section>
	);
}
