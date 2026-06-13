export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ORB 1 */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-700/40 blur-[120px] rounded-full top-[-120px] right-[-120px]" />

      {/* ORB 2 */}
      <div className="absolute w-[400px] h-[400px] bg-white/20 blur-[120px] rounded-full bottom-[-120px] left-[200px]" />

      {/* ORB 3 */}
      <div className="absolute w-[300px] h-[300px] bg-blue-300/30 blur-[120px] rounded-full top-1/2 left-[-120px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(#ffffff20_1px,transparent_1px),linear-gradient(90deg,#ffffff20_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
}
