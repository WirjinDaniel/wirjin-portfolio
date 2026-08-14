'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { stackGroups } from '@/lib/data';

export default function SectionStack() {
  const headRef = useScrollReveal();

  return (
    <section id="stack">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2>Tecnologías</h2>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <StackGroup key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackGroup({ group }: { group: { category: string; items: string[] } }) {
  const ref = useScrollReveal();
  return (
    <div className="stack-group reveal" ref={ref as React.Ref<HTMLDivElement>}>
      <h4>{group.category}</h4>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
