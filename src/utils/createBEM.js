const createBEM = (block) => (element, modifiers = []) => {
  const baseClass = `${block}${element ? `__${element}` : ''}`;

  if (modifiers.length === 0) return baseClass;

  return [
    baseClass,
    ...modifiers
      .filter((m) => m)
      .map((m) => `${baseClass}--${m}`),
  ].join(' ');
};

export default createBEM;
