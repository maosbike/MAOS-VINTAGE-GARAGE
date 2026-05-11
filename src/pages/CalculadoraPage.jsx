import Seo from '../components/Seo.jsx';
import Calculadora from '../components/Calculadora.jsx';

export default function CalculadoraPage() {
  return (
    <>
      <Seo
        title="Calculadora de importación"
        description="Estima en tiempo real cuánto te cuesta importar tu auto clásico a Chile desde USA o Alemania."
        path="/calculadora"
      />
      <div className="section">
        <Calculadora />
      </div>
    </>
  );
}
