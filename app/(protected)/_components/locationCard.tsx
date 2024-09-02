import Image from "next/image";

interface Props {
  district: string;
  name: string;
  address: string;
  facilities: string;
  url?: string;
  photoPath: string;
}
const LocationCard: React.FC<Props> = ({
  name,
  district,
  address,
  facilities,
  photoPath,
  url,
}) => {
  return (
    <div className="flex flex-col justify-start h-fit">
      <Image
        className="rounded-lg w-full aspect-video flex-1 mb-2 shrink-0"
        src={photoPath}
        alt="Picture of facility"
        width={0}
        height={0}
        sizes="(max-width: 1024px) 25vw, 33vw"
        quality={75}
      />
      <h1 className="font-bold">{name}</h1>
      <div className="text-xs">{district}</div>
      <div className="text-xs">{address}</div>
      <div className="text-xs">{facilities}</div>
      {url && (
        <a
          href={url}
          target="_blank"
          className="text-xs text-primary font-bold mt-1"
        >
          More Details
        </a>
      )}
    </div>
  );
};

export default LocationCard;
