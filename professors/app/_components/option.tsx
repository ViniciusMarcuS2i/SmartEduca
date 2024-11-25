import { LucideIcon, ChevronRightIcon } from "lucide-react";

interface OptionProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
}

function Option({ icon: Icon, title, onClick }: OptionProps) {
  return (
    <div
      onClick={onClick}
      className="hover:cursor-pointer hover:border-primary border-2 border-transparent flex bg-[white] justify-between shadow-md items-center rounded-lg py-6 px-8"
    >
      <div className="flex items-center flex-row gap-4">
        <Icon className="text-primary" size={34} />
        <span className="text-lg text-primary">{title}</span>
      </div>
      <ChevronRightIcon className="text-primary" />
    </div>
  );
}

export default Option;
