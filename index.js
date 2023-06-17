window.onload = mainline();

function setClassDescriptor(id, classDescriptor) {
  const e = document.getElementById(id);
  e.classList.remove('text-success', 'text-dark', 'text-warning', 'text-danger', 'text-primary');
  e.classList.add(classDescriptor);
}

function setTextContent(id, textContent) {
  const e = document.getElementById(id);
  e.textContent = textContent;
}

function handleIdPrefixes(idPrefixes, headingClassDescriptor, headingTextContent, classDescriptor, textContent) {
  let first = true;
  idPrefixes.forEach((idPrefix) => {
    if (first) {

      const headingDiv = document.getElementById('heading-div');
      headingDiv.classList.remove('text-bg-success', 'text-bg-dark', 'text-bg-warning', 'text-bg-danger', 'text-bg-primary');
      headingDiv.classList.add(headingClassDescriptor);

      setTextContent('heading-h5', headingTextContent);

      const incidents = document.getElementsByClassName('incident');
      for (let i = 0; i < incidents.length; i++) {
        incidents[i].classList.remove('text-success', 'text-dark', 'text-warning', 'text-danger', 'text-primary');
        incidents[i].classList.add(classDescriptor);
      }

      first = false;
    }
    setClassDescriptor(idPrefix + '-i', classDescriptor);
    setClassDescriptor(idPrefix + '-div', classDescriptor);
    setTextContent(idPrefix + '-strong', textContent);
  });
}

function mainline() {
  handleIdPrefixes(maintenances, 'text-bg-primary', 'Some Service Maintenance', 'text-primary', ' Maintenance');
  handleIdPrefixes(degradeds, 'text-bg-dark', 'Some Service Degradation', 'text-dark', ' Degraded Performance');
  handleIdPrefixes(partials, 'text-bg-warning', 'Partial Service Outage', 'text-warning', ' Partial Outage');
  handleIdPrefixes(majors, 'text-bg-danger', 'Major Service Outage', 'text-danger', ' Major Outage');
}
