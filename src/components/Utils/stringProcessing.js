const stringProcessing = (str) => {
  str = str.replace(/(\d+)/g, ' $1 ');

  const subwords = str.split('_').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const words = subwords.join('');

  const readable = words.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return readable;
};

export default stringProcessing;
