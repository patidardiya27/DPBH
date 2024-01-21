fetch('https://raw.githubusercontent.com/yamanalab/ec-darkpattern/master/dataset/dataset.tsv')
  .then(response => response.text())
  .then(data => {
    // Parse the dataset and implement logic to scan for dark patterns
  })
  .catch(error => console.error('Error fetching dataset:', error));
