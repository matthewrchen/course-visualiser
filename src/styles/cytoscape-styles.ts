export const cytoStyles: any[] = [
  {
    selector: 'node[type="Core"]',
    style: {
      shape: 'round-rectangle',
      width: 100,
      height: 100,
      'background-color': '#00467F',
      label: 'data(id)',
      color: '#ffffff',
      'text-valign': 'center',
      'text-halign': 'center',
      'font-size': 14,
      'text-wrap': 'wrap',
      'text-max-width': 50,
    },
  },

  {
    selector: 'node[type="Elective"]',
    style: {
      shape: 'round-rectangle',
      width: 100,
      height: 100,
      'background-color': '#009AC7',
      label: 'data(id)',
      color: '#ffffff',
      'text-valign': 'center',
      'text-halign': 'center',
      'font-size': 14,
      'text-wrap': 'wrap',
      'text-max-width': 50,
    },
  },

  {
    selector: 'edge',
    style: {
      width: 10,
      'line-color': '#aaa',
      'target-arrow-color': '#aaa',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
    },
  },
];
