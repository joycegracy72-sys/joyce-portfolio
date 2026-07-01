export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07070b]">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] 
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
            linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] 
        bg-[size:60px_60px]" />

      {/* Moving glow blobs */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] 
        bg-purple-600/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] 
        bg-blue-500/20 blur-[160px] rounded-full animate-pulse" />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] 
        bg-cyan-400/10 blur-[120px] rounded-full animate-pulse" />
    </div>
  );
}
