import Countdown from "@/components/countdown";
import Polaroids from "@/components/polaroids";
import Wp_page from "@/components/wedparty";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-center">
      <Countdown />
      <h6 className="text-2xl font-pinyon font-semibold pt-0">Until We Say 'I Do'</h6>
      <h1 className="text-9xl font-pinyon text-light-beige pt-20">Katie & Xavier</h1>
      <h1 className="text-4xl font-c_g pt-4">Are Getting Married!</h1>
      <p className="mt-4 text-xl mb-50"> Welcome to Our Wedding Website</p>
      <Polaroids />
      <Wp_page />
    </main>
  );
}
