import Image from "next/image";

type Props = {
  title: string;
  src: string;
};

export const HeroImage = ({ title, src }: Props) => {
  src = "/assets/landing/cover.jpg";
  return (
    <div className="sm:mx-0">
      <Image
        src={`${src}`}
        alt={`Cover Image for ${title}`}
        className="shadow-md w-full"
        width={1300}
        height={630}
      />
    </div>
  );
};
