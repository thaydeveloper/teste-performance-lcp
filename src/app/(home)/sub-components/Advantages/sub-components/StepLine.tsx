const StepLine = () => {
  return (
    <div className="flex flex-col items-center relative w-[40px] md:w-[180px] h-[420px] md:h-[560px] mt-9 sm:mt-[80px] px-0 md:px-[10px]">
      {/* Linha Pontilhada - Base para todos os tamanhos */}
      <div
        className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 z-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, #222 0 4px, transparent 4px 20px)',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center',
        }}
      />

      {/* Círculo 1 - Topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--color-primary-dark)] text-[var(--color-white)] flex items-center justify-center font-bold text-lg shadow-lg z-10">
        1
      </div>

      {/* Círculo 2 - Meio */}
      <div className="absolute top-[50%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] md:-translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] flex items-center justify-center font-bold text-lg shadow-lg z-10">
        2
      </div>

      {/* Círculo 3 - Base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--color-primary-dark)] text-[var(--color-white)] flex items-center justify-center font-bold text-lg shadow-lg z-10">
        3
      </div>
    </div>
  );
};

export default StepLine;
