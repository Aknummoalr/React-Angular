// import './App.css'

// function App() {
//   return (
//     <>
//       <h1>Hello this is React App</h1>
//       <app-root></app-root> 
//     </>
//   )
// }

// export default App



import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(); 
          return;
        }
        const script = document.createElement('script');
        script.type = 'module';
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadAngularWebComponent = async () => {
      try {
        // Load in correct order
        await loadScript('/Angular/polyfills.js');
        await loadScript('/Angular/main.js');
        await loadScript('/Angular/chunk-6MDQTQU3.js');
        await loadScript('/Angular/chunk-KHV2ILOJ.js')
        console.log('Angular Web Component loaded!');
      } catch (err) {
        console.error('Failed to load Angular Web Component:', err);
      }
    };

    loadAngularWebComponent();
  }, []);

  return (
    <div>
      <h1>this is a React + Angular Web Component</h1>
      <app-root></app-root> 
    </div>
  );
}

export default App;
