export default function BollettoLanding() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Stai pagando troppo per luce e gas?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Bolletto confronta la tua bolletta con i prezzi ufficiali ARERA e ti dice subito se ti spetta un rimborso. Gratis e in 2 minuti.
        </p>
        <form className="mb-4">
          <input
            type="file"
            accept="application/pdf,image/*"
            className="block mx-auto mb-4"
          />
          <input
            type="email"
            placeholder="Inserisci la tua email"
            className="w-full max-w-md mx-auto p-3 rounded-xl border border-gray-300 mb-4"
          />
          <button className="bg-black text-white px-6 py-3 rounded-2xl text-lg shadow-md hover:bg-gray-900">
            📤 Analizza la mia bolletta
          </button>
        </form>
      </div>

      {/* Come funziona */}
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Come funziona</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">📄</div>
            <p>1. Carichi la bolletta</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🧠</div>
            <p>2. Bolletto legge e analizza i tuoi dati</p>
          </div>
          <div>
            <div className="text-4xl mb-2">⚖️</div>
            <p>3. Confronta con le tariffe ARERA</p>
          </div>
          <div>
            <div className="text-4xl mb-2">📩</div>
            <p>4. Ti genera il reclamo da inviare</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Già rimborsati oltre 3.200€</h3>
          <p className="italic">
            "Mi hanno restituito 78€ senza che muovessi un dito. Grazie Bolletto!"
          </p>
          <p className="italic mt-2">
            "Era ora che qualcuno difendesse i consumatori."
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="max-w-3xl mx-auto text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Non lasciare soldi in mano ai fornitori</h2>
        <p className="text-lg mb-6">Carica ora la tua bolletta e scopri se ti spetta un rimborso.</p>
        <form>
          <input
            type="file"
            accept="application/pdf,image/*"
            className="block mx-auto mb-4"
          />
          <input
            type="email"
            placeholder="Inserisci la tua email"
            className="w-full max-w-md mx-auto p-3 rounded-xl border border-gray-300 mb-4"
          />
          <button className="bg-black text-white px-6 py-3 rounded-2xl text-lg shadow-md hover:bg-gray-900">
            📤 Analizza la mia bolletta
          </button>
        </form>
      </div>
    </div>
  );
}
