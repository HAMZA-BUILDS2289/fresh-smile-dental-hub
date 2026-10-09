import { LinkButton, WaButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-wide grid min-h-[60vh] place-items-center py-32 text-center">
      <div>
        <p className="display text-[8rem] leading-none text-gradient">404</p>
        <h1 className="h-md mt-4">This page lost a tooth.</h1>
        <p className="mt-4 text-ink/70">The page you’re looking for doesn’t exist — but your appointment does.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href="/" variant="dark">Back home</LinkButton>
          <WaButton />
        </div>
      </div>
    </section>
  );
}
