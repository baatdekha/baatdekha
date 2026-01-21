import type { Shade } from "../types";

export function sendMail(name: string, code: string) {
  const recipient = "baatdekha@gmail.com";
  const subject = "Enquiry about Color Price";
  const body = `I want the following color.\nName - ${name} (${code}) color\nMy Mobile no. is - `;
  window.location.href =
    "mailto:" +
    recipient +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
}

interface PopupCardProps {
  activeColor: Shade;
  onOutsideClick: () => void;
}

export function PopupCard({ activeColor, onOutsideClick }: PopupCardProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onOutsideClick}
    >
      <div
        className="bg-white rounded-3xl p-8 max-w-xs w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-full h-48 rounded-2xl mb-6 shadow-inner"
          style={{ backgroundColor: activeColor.shadeHexCode }}
        />
        <h3 className="text-2xl font-bold text-gray-900">
          {activeColor.entityName}
        </h3>
        <p className="text-gray-500 font-mono mb-6">{activeColor.entityCode}</p>

        <button
          onClick={() =>
            sendMail(activeColor.entityName, activeColor.entityCode)
          }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Ask Price via Email
        </button>
      </div>
    </div>
  );
}
