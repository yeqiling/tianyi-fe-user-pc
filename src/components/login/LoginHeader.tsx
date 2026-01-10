import icon from '@/assets/images/icon.png';

export function LoginHeader() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={icon} alt="天乙神算" className="w-[157px] h-[131px] mb-5" />
      <div className="text-base text-slate-600 text-center mb-7">欢迎回来</div>
    </div>
  );
}
