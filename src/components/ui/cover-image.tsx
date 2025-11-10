import Image from "next/image";

export const CoverImage = () => {
  const localSrc = "/assets/landing/birds.jpg";
  const altSrc = "Photographer Chanan Greenblatt";

  return (
    <div className="sm:mx-0">
      <Image
        src={localSrc}
        alt={altSrc}
        className="shadow-md w-full"
        width={1300}
        height={630}
        priority
      />
    </div>
  );
};
