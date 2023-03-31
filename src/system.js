const system = {
    // Breakpoints
    breakpoints: ['40em', '52em', '64em'],
  
    // Colors
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#07c',
      secondary: '#30c',
      muted: '#f6f6f6',
    },
  
    // Fonts
    fonts: {
      body: 'system-ui, sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
  
    // Font sizes
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  
    // Font weights
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
  
    // Line heights
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
  
    // Letter spacings
    letterSpacings: {
      body: 'normal',
      caps: '0.2em',
    },
  
    // Space
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  
    // Widths
    sizes: {
      container: 768,
    },
  
    // Borders
    borders: [0, '1px solid', '2px solid'],
  
    // Border radii
    radii: [0, 2, 4, 8],
  
    // Shadows
    shadows: {
      small: '0 0 4px rgba(0, 0, 0, .125)',
      large: '0 0 24px rgba(0, 0, 0, .125)',
    },
  
    // Z-index
    zIndices: [0, 1, 2, 3, 4, 5],
  };
  
  export default system;

  theme: {
    extend: {
      animation: {
        typing: 'blink 1s steps(5, start) infinite'
      },
      backgroundImage: {
        gradient: 'linear-gradient(180deg,rgba(53,55,64,0),#353740 58.85%)'
      },
      keyframes: {
        blink: {
          to: { visibility: 'hidden' }
        }
      },
      colors: {
        gptlogo: '#10a37f',
        gptdarkgray: '#202123',
        gptgray: '#343541',
        gptlightgray: '#444654'
      }
    }
  },

  after:content-["▋"] after:ml-1 after:animate-typing