import React from "react";
import DepthButton from "./DepthButton";

export default function StateView({
  mode = "empty",
  title = "No records found",
  description = "There are currently no items to display in this view.",
  actionLabel,
  onAction,
}) {
  const isError = mode === "error";

  return (
    <div
      role={isError ? "alert" : "status"}
      className="w-full rounded-2xl bg-white border border-[#E3E5DE] p-8 sm:p-12 text-center max-w-xl mx-auto my-8 shadow-[0_1px_2px_rgba(16,24,40,0.06)]"
    >
      <div
        className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center font-mono font-bold text-sm ${
          isError
            ? "bg-[#D14343]/10 text-[#D14343] border border-[#D14343]/20"
            : "bg-[#3659D9]/10 text-[#3659D9] border border-[#3659D9]/20"
        }`}
      >
        {isError ? "!" : "0"}
      </div>
      <h3 className="text-lg font-display font-bold text-[#101828] mb-2">{title}</h3>
      <p className="text-sm font-sans text-[#5B6475] leading-relaxed mb-6">{description}</p>
      {actionLabel && onAction && (
        <DepthButton variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </DepthButton>
      )}
    </div>
  );
}
