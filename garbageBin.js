function smartGarbage (trash, bins) {
  switch (trash) {
    case 'waste':
      bins.waste++;
      break;
    case 'recycling':
      bins.recycling++;
      break;
    case 'composte':
      bins.composte++;
      break;
  }
  return bins;
}