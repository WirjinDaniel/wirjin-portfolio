'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { formation } from '@/lib/data';

export default function SectionFormacion() {
  const headRef = useScrollReveal();
  const eduRef = useScrollReveal();
  const capRef = useScrollReveal();

  return (
    <section id="formacion">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2>Formación</h2>
        </div>
        <div className="formacion-grid">
          <div className="reveal" ref={eduRef as React.Ref<HTMLDivElement>}>
            <h4>Educación</h4>
            <ul>
              {formation.education.map((item, i) => {
                const [bold, rest] = item.includes(' — ') ? item.split(' — ') : [null, item];
                return (
                  <li key={i}>
                    {bold ? (
                      <>
                        <b>{bold}</b>{' — '}{rest}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="reveal" ref={capRef as React.Ref<HTMLDivElement>}>
            <h4>Capacitaciones</h4>
            <ul>
              {formation.training.map((item, i) => {
                const [bold, rest] = item.includes(' — ') ? item.split(' — ') : [null, item];
                return (
                  <li key={i}>
                    {bold ? (
                      <>
                        <b>{bold}</b>{' — '}{rest}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
