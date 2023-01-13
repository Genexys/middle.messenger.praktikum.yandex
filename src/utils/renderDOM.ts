import Block from "./Block";

export function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if(!root) {
    throw new Error("No root selector");
  }

  root.innerHTML = '';

  root.append(component.getContent()!);
}