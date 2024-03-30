import { ITeaserImg } from "@/types/interface";

export default function TeaserImg({ image, onClick, selectedImg }: ITeaserImg) {
  return (
    <div className="relative" key={image}>
      <img
      loading="lazy"
        src={image}
        alt={`image`}
        className="w-20 h-20 border cursor-pointer rounded-xl"
        onClick={onClick}
      />
      {image === selectedImg && (
        <div className="absolute top-0 z-50 w-20 h-20 bg-[rgba(0,0,0,.6)]"></div>
      )}
    </div>
  );
}
