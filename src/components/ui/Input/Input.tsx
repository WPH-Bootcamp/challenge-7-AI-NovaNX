import React from "react";

type BaseProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = BaseProps & {
  error?: boolean | string;
  helperText?: string;
};

const Input: React.FC<Props> = ({ error, helperText, style, ...rest }) => {
  const isError = Boolean(error);
  const errorText = typeof error === "string" ? error : undefined;

  return (
    <div style={{ display: "grid", gap: 6 }}>
      <input
        {...rest}
        style={{
          padding: "0.5rem 0.75rem",
          borderRadius: 8,
          border: isError ? "1px solid #dc2626" : "1px solid #d1d5db",
          outline: "none",
          fontSize: "1rem",
          ...(style || {}),
        }}
      />
      {(helperText || errorText) && (
        <span
          style={{
            fontSize: "0.85rem",
            color: isError ? "#dc2626" : "#6b7280",
          }}
        >
          {errorText ?? helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
