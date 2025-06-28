type ChipProps = {
  text: string;
};

export default function Chip(props: ChipProps) {
  return (
    <>
      <div className="flex items-center rounded-[4px] bg-[#2B3E53] w-fit h-[30px] px-[8px]">
        <p className="text-[14px]">{props.text}</p>
      </div>
    </>
  );
}
