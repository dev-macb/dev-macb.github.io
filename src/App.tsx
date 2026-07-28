import cvData from './data/cv.json';

function App() {
  const { nome, titulo, sobre, habilidades, experiencias, contacto } = cvData;

  return (
    <main>
      <section>
        <h1>{nome}</h1>
        <p>{titulo}</p>
      </section>

      {sobre && (
        <section>
          <h2>Sobre</h2>
          <p>{sobre}</p>
        </section>
      )}

      {habilidades && habilidades.length > 0 && (
        <section>
          <h2>Habilidades</h2>
          <ul>
            {habilidades.map((habilidade, index) => (
              <li key={index}>{habilidade}</li>
            ))}
          </ul>
        </section>
      )}

      {experiencias && experiencias.length > 0 && (
        <section>
          <h2>Experiência</h2>
          {experiencias.map((exp, index) => (
            <div key={index}>
              <h3>{exp.cargo}</h3>
              <p>{exp.empresa} — {exp.periodo}</p>
              <p>{exp.descricao}</p>
            </div>
          ))}
        </section>
      )}

      <section>
        <h2>Contacto</h2>
        {contacto.email && <p>{contacto.email}</p>}
        {contacto.linkedin && <p>{contacto.linkedin}</p>}
        {contacto.github && <p>{contacto.github}</p>}
      </section>
    </main>
  );
}

export default App;