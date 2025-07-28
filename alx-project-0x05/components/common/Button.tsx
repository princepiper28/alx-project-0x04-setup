import { ButtonProps } from "@/interface";

// ✅ Define acceptable color classes for Tailwind to keep them
const colorMap: Record<string, string> = {
  red: "bg-red-600 hover:bg-red-700",
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  orange: "bg-orange-600 hover:bg-orange-700",
  gray: "bg-gray-600 hover:bg-gray-700",
};

const Button = ({ buttonLabel, buttonBackgroundColor, action }: ButtonProps) => {
  const backgroundClasses = colorMap[buttonBackgroundColor] || colorMap["gray"];

  return (
    <button
      className={`px-6 py-3 text-white font-bold rounded-md ${backgroundClasses} transition duration-300`}
      onClick={action}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
