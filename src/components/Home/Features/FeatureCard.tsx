import React from "react";

type Props = {
  title: React.ReactNode;
  detail: string;
  gap?: string;
};

const FeatureCard: React.FC<Props> = ({
  title,
  detail,
  gap = "gap-7",
}: Props) => {
  return (
    <div className={`w-full flex flex-col items-center justify-start ${gap}`}>
      {title}
      <p className="text-center text-white-main sm:text-xl text-base font-normal">
        {detail}
      </p>
    </div>
  );
};

export default FeatureCard;
