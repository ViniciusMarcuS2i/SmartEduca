import { ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";

export function HomeOnlyMobileButton() {
  return (
    <a
      target="_blank"
      href="https://www.instagram.com/chicopretoam/"
      className="w-full flex -mt-5 justify-center items-center"
    >
      <Button className="z-10 lg:hidden bg-[#006fff] px-6 py-6 shadow-lg hover:bg-blue-800 rounded-lg font-light">
        Quero saber mais!{" "}
        <ChevronRightIcon className="ml-4" width={17} height={17} />
      </Button>
    </a>
  );
}