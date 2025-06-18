export function Footer() {
  return (
    <footer className="bg-[#F7F7F7] text-[#222222] py-8 border-t border-[#E5E5E5]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-inter text-base mb-4">© 2025 Catapulta Digital — Todos os direitos reservados.</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
            <a
              href="/privacidade"
              className="text-[#222222] hover:text-[#FF6B00] transition-colors font-inter text-base hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 rounded"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos"
              className="text-[#222222] hover:text-[#FF6B00] transition-colors font-inter text-base hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 rounded"
            >
              Termos de Uso
            </a>
            <a
              href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Preciso%20de%20suporte%20com%20o%20B%C3%B3ris."
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#222222] hover:text-[#FF6B00] transition-colors font-inter text-base hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 rounded"
            >
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
