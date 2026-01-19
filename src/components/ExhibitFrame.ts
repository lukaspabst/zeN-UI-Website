import type { ComponentDefinition } from '../data/registry';

/**
 * Creates a "Frame" element that holds a Zen UI component.
 */
export function createExhibitFrame(component: ComponentDefinition): HTMLElement {
  const frame = document.createElement('div');
  frame.className = 'exhibit-frame';

  // Separate scripts from content
  let contentHTML = component.usage || `<${component.tagName}></${component.tagName}>`;
  const scripts: string[] = [];

  // Extract script content
  contentHTML = contentHTML.replace(/<script>([\s\S]*?)<\/script>/gi, (_match, scriptContent) => {
    scripts.push(scriptContent);
    return '';
  });

  frame.innerHTML = `
    <div class="frame-glass"></div>
    <div class="frame-content">
      ${contentHTML}
    </div>
    <div class="frame-info">
      <h3 class="frame-title">${component.name}</h3>
      <p class="frame-desc">${component.description}</p>
      <div class="frame-tag">${component.tagName}</div>
    </div>
    <div class="frame-reflection"></div>
  `;

  // Execute scripts after components are fully defined
  if (scripts.length > 0) {
    // Wait for all custom elements in the frame to be defined
    const customEls = frame.querySelectorAll('*');
    const tagNames = new Set<string>();
    customEls.forEach(el => {
      if (el.tagName.includes('-')) {
        tagNames.add(el.tagName.toLowerCase());
      }
    });

    // Wait for all custom elements, then run scripts
    const waitPromises = Array.from(tagNames).map(tag =>
      customElements.whenDefined(tag).catch(() => { })
    );

    Promise.all(waitPromises).then(() => {
      // Small delay to ensure properties are ready
      setTimeout(() => {
        scripts.forEach(scriptContent => {
          try {
            // Replace document.getElementById with frame-scoped version
            const scopedScript = scriptContent.replace(
              /document\.getElementById\(["']([^"']+)["']\)/g,
              `frame.querySelector('#$1')`
            );
            const fn = new Function('frame', scopedScript);
            fn(frame);
          } catch (e) {
            console.warn('Script execution failed for', component.name, e);
          }
        });
      }, 100);
    });
  }

  return frame;
}
