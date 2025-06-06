export default function ArtOrgCardLoader({ idx }) {
  return (
    <div
      key={idx}
      className="h-[406px] w-[282px] bg-[#111112] rounded-[16px] animate-pulse"
    >
      <div className="w-[282px] h-[207px] rounded-t-[10px] bg-gray-700" />
      <div className="flex flex-col gap-2 mt-4 ml-[16px]">
        <div className="h-[20px] w-[160px] bg-gray-700 rounded-md" />
        <div className="h-[14px] w-[100px] bg-gray-600 rounded-md mt-1" />
        <div className="h-[12px] w-[200px] bg-gray-600 rounded-md mt-2" />
        <div className="h-[12px] w-[180px] bg-gray-600 rounded-md mt-1" />
        <div className="flex gap-2 mt-4">
          <div className="h-[24px] w-[60px] bg-gray-700 rounded-full" />
          <div className="h-[24px] w-[60px] bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}
