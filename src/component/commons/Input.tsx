import React from "react";

export default function Input({
  label,
  value,
  type,
  htmlfor,
  name,
  id,
  handleChange,
}: {
  label: string;
  value: string;
  type: string;
  htmlfor: string;
  name: string;
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}) {
  return (
    <div className="from-input">
      <label htmlFor={htmlfor}>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
      />
    </div>
  );
}
