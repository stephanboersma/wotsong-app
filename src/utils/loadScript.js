export const loadScript = async (src, appendBody, onload) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;

    if (onload) {
      script.onload = () => onload();
    }

    appendScript(appendBody, script);
    resolve(script);
  });
};

const appendScript = (body, script) => {
  if (body) {
    document.body.appendChild(script);
  } else {
    document.head.appendChild(script);
  }
};
