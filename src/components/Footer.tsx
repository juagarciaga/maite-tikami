export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Maitê Tikami</h3>
            <p className="text-gray-300">
              Odontologia Estética e Implantes
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-300">
              Agende sua consulta
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className="text-gray-300">
              Segunda a Sexta: 9h - 18h
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maitê Tikami. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
