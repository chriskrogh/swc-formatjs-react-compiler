"use client";

import { FormattedMessage } from "react-intl";

interface ClientProps {
  value: {
    value: string;
  };
}

export function Client({ value }: ClientProps) {
  return (
    <FormattedMessage
      defaultMessage="Hello {name}"
      description={`Hello~https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png`}
      values={{
        name: value.value,
      }}
    />
  );
}
