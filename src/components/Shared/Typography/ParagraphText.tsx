import React from "react";

type Props = {
  text: string;
  style?: string;
};

const ParagraphText: React.FC<Props> = ({ text, style = "" }: Props) => {
  return (
    <p className={`text-white-off text-center text-base font-normal ${style}`}>
      {text}
    </p>
  );
};

export default ParagraphText;
