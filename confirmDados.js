function confirmDados(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  let genderDef;
  if (gender == 'male') {
    genderDef = 'masculino';
  } else {
    genderDef = 'feminino';
  }

  const result = document.getElementById('result');

  return (result.innerHTML = `Você se chama ${name}, tem ${age} anos e é do sexo ${genderDef}.`);
}
