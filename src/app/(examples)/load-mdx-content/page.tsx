'use client';

import * as React from 'react';

import { evaluate } from '@mdx-js/mdx';
import * as jsxRuntime from 'react/jsx-runtime';

export default function Post() {
  const [MdxComponent, setMdxComponent] =
    React.useState<React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const source = `
Some **mdx** text with a component:

<HelloWorld />

Thanks!
`;

  // Use React.useMemo to stabilize the components object reference
  const components = React.useMemo(
    () => ({
      HelloWorld: () => <div style={{ color: 'red' }}>Hello World</div>,
    }),
    [],
  );

  React.useEffect(() => {
    const compileMdx = async () => {
      try {
        const { default: Component } = await evaluate(source, {
          ...jsxRuntime,
          useMDXComponents: () => components,
          development: false,
        });

        setMdxComponent(() => Component);
      } catch (error) {
        console.error('MDX compilation failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void compileMdx();
  }, [source, components]);

  if (isLoading) return <div>Loading...</div>;
  if (!MdxComponent) return <div>Error compiling MDX.</div>;

  return <MdxComponent />;
}
