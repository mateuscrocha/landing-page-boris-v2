export function ProofCondominio() {
  return (
    <section className="py-12 bg-[#F7F7F7] border-y border-[#E5E5E5]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-full border border-border shadow-subtle">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#FF6B00] rounded-full animate-pulse"></div>
              <span className="text-lg font-poppins font-semibold text-text">-70% mensagens repetidas</span>
            </div>
            <div className="w-px h-6 bg-[#E5E5E5]"></div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#FF6B00] rounded-full animate-pulse"></div>
              <span className="text-lg font-poppins font-semibold text-text">
                3× mais moradores informados no primeiro dia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
