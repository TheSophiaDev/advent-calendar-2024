import { isValidMonth } from "@/lib/guards";
import DaysCarousel from "@/components/custom-components/days-carousel";
import ForbiddenAlert from "@/components/custom-components/forbidden-alert";

export default function Home(): JSX.Element {
  if (isValidMonth(12) !== true) {
    return (
      <>
        <div className="container mx-auto p-4 max-h-fit">
          <div className="auto-rows-auto flex justify-center h-[70vh] items-center">
            <ForbiddenAlert />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4 max-h-screen">
        <div className="auto-rows-auto flex justify-center">
          <DaysCarousel />
        </div>
      </div>
    </>
  );
}
