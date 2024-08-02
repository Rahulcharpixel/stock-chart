export function generateUniqueColors(count: number): string[] {
  const colors: string[] = [];
  while (colors.length < count) {
    const color = generateRandomColor();
    if (!colors.includes(color)) {
      colors.push(color);
    }
  }
  return colors;
}

function generateRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    // console.log('==>',color);
  }
  return color;
}


