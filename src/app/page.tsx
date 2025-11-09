import { LandingPage } from "@/components/landing-page";

export default async function Home() {
  return (
    <div>
      <main className="max-w-2xl mx-auto mt-10 flex flex-col gap-6">
        <LandingPage />
      </main>
    </div>
  );
}
