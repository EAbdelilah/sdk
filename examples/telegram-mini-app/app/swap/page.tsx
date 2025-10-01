import { SwapButton } from "./components/swap-button";
import { SwapForm } from "./components/swap-form";
import { SwapSimulationPreview } from "./components/swap-simulation";

export default function SwapPage() {
  return (
    <section className="mx-auto w-full max-w-[500px] pt-4 md:pt-12 flex flex-col gap-4">
      <SwapForm />
      <SwapSimulationPreview />
      <SwapButton />
    </section>
  );
}
